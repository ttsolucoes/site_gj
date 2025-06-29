document.addEventListener('DOMContentLoaded', function() {
    const liturgiaBtn = document.getElementById('liturgiadiaria-btn');
    const liturgiaSection = document.getElementById('liturgia-diaria');
    const closeLiturgiaBtn = document.getElementById('close-liturgia-btn');
    
    // Função para mostrar a liturgia
    liturgiaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        fetchLiturgiaData();
        window.location.hash = 'liturgia';
    });
    
    // Função para fechar a liturgia
    closeLiturgiaBtn.addEventListener('click', function() {
        liturgiaSection.classList.remove('active');
        window.location.hash = '';
    });
    
    // Verificar hash na URL ao carregar a página
    if (window.location.hash === '#liturgia') {
        fetchLiturgiaData();
    }
    
    // Função para buscar e exibir os dados da liturgia
    function fetchLiturgiaData() {
        liturgiaSection.classList.add('active');
        
        // Mostrar loading
        const contentElements = document.querySelectorAll('.liturgia-content > *');
        contentElements.forEach(el => el.style.display = 'none');
        
        fetch('/liturgia-diaria')
            .then(response => {
                if (!response.ok) throw new Error('Erro ao carregar liturgia');
                return response.json();
            })
            .then(data => {
                if (data.error) throw new Error(data.error);
                populateLiturgiaData(data);
                
                // Mostrar conteúdo após carregar
                contentElements.forEach(el => el.style.display = '');
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Não foi possível carregar a liturgia do dia. Por favor, tente novamente mais tarde.');
                liturgiaSection.classList.remove('active');
            });
    }
    
    // Função para preencher os dados da liturgia
    function populateLiturgiaData(data) {
        // Dados básicos
        document.getElementById('liturgia-data').textContent = data.data || 'Data não disponível';
        document.getElementById('liturgia-titulo').textContent = data.liturgia || 'Liturgia não disponível';
        
        // Cor litúrgica
        const corElement = document.getElementById('liturgia-cor');
        if (data.cor) {
            corElement.textContent = data.cor;
            corElement.className = 'cor-badge cor-' + data.cor.toLowerCase();
        } else {
            corElement.style.display = 'none';
        }
        
        // Orações
        document.getElementById('liturgia-coleta').textContent = data.oracoes.coleta || 'Não disponível';
        document.getElementById('liturgia-oferendas').textContent = data.oracoes.oferendas || 'Não disponível';
        document.getElementById('liturgia-comunhao').textContent = data.oracoes.comunhao || 'Não disponível';
        
        // Leituras
        populateLeitura('liturgia-primeira', data.leituras.primeira);
        populateLeitura('liturgia-salmo', data.leituras.salmo);
        populateLeitura('liturgia-segunda', data.leituras.segunda);
        populateLeitura('liturgia-evangelho', data.leituras.evangelho);
        
        // Mostrar/ocultar segunda leitura conforme disponibilidade
        const segundaContainer = document.getElementById('segunda-leitura-container');
        segundaContainer.style.display = data.leituras.segunda && data.leituras.segunda.length > 0 ? 'block' : 'none';
        
        // Antífonas
        document.getElementById('liturgia-antifona-entrada').textContent = 
            data.antifonas.entrada || 'Não disponível';
        document.getElementById('liturgia-antifona-comunhao').textContent = 
            data.antifonas.comunhao || 'Não disponível';
    }
    
    // Função auxiliar para preencher leituras (que podem ter múltiplos parágrafos)
    function populateLeitura(elementId, textos) {
        const element = document.getElementById(elementId);
        element.innerHTML = ''; // Limpar conteúdo
        
        if (!textos || textos.length === 0) {
            element.innerHTML = '<p>Não disponível</p>';
            return;
        }
        
        textos.forEach(texto => {
            const p = document.createElement('p');
            p.textContent = texto;
            element.appendChild(p);
        });
    }
});