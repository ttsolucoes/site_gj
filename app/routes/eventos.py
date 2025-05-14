from app import app
from config import secret_key, required_roles
from flask import render_template, request, redirect, session

app.secret_key = secret_key

def ver_eventos():
    from config import executar_sql
    from datetime import datetime
    """Retorna todos os usuários com suas informações detalhadas."""
    # id|nome        |data_evento     |local_evento                             |recorrencia|criado_em          |atualizado_em      |criado_por |
    query = """
SELECT 
    u.id, 
    u.nome,
    u.data_evento,
    u.local_evento
FROM eventos u;
    """
    resultados = executar_sql(query)
    
    return [{
        'id': row[0],
        'nome': row[1],
        'data_evento': datetime.fromisoformat(row[2]) if row[2] else None,
        'local_evento': row[3]
    } for row in resultados]

@app.route('/eventos')
@required_roles('admin', 'user')
def eventos():
    eventos = ver_eventos()
    return render_template('pages/private/eventos.html', eventos=eventos)

@app.route('/eventos_alterar', methods=['POST'])
def eventos_alterar():
    from config import executar_sql
    from utils import inserir_log

    tipo_acao = request.form.get('tipo_acao')
    username = session['user']['username']
    
    if tipo_acao == 'criar':
        # Processar criação
        nome = request.form.get('nome')
        data = request.form.get('data')
        local = request.form.get('local')
        recorrencia = request.form.get('recorrencia')
        
        query = f"""
        INSERT INTO eventos 
            (nome, data_evento, local_evento, recorrencia, criado_por) 
        VALUES 
            ('{nome}', '{data}', '{local}', '{recorrencia}', '{username}')
        """
        
        res = executar_sql(query)
        
        if 'SUCESSO' in str(res).upper():
            inserir_log(username, 'Evento criado', f'Sucesso ao criar evento: Nome: {nome}, Data: {data}, Local: {local}')

    elif tipo_acao == 'atualizar':
        # Processar atualização
        evento_id = request.form.get('evento_id')
        novo_nome = request.form.get('novo_nome')
        nova_data = request.form.get('nova_data')
        novo_local = request.form.get('novo_local')
        
        query = f"""
        UPDATE eventos 
        SET 
            nome = '{novo_nome}', 
            data_evento = '{nova_data}', 
            local_evento = '{novo_local}',
            atualizado_em = CURRENT_TIMESTAMP
        WHERE 
            id = {evento_id}
        """
        
        res = executar_sql(query)
        
        if 'SUCESSO' in str(res).upper():
            inserir_log(username, 'Evento atualizado', f'Sucesso ao atualizar evento: ID: {evento_id}, Novo Nome: {novo_nome}, Nova Data: {nova_data}, Novo Local: {novo_local}')

    elif tipo_acao == 'remover':
        # Processar remoção
        evento_id = request.form.get('evento_id_remover')
        
        query = f"DELETE FROM eventos WHERE id = {evento_id}"
        
        res = executar_sql(query)
        
        if 'SUCESSO' in str(res).upper():
            inserir_log(username, 'Evento removido', f'Sucesso ao remover evento: ID: {evento_id}')

    return redirect('/eventos')
