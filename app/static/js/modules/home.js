document.addEventListener('DOMContentLoaded', function() {
  // Configuração dos atos com seus respectivos recursos
    const atosConfig = {
    1: {
        title: "Criação",
        quote: "“No princípio, Deus criou o céu e a terra.” (Gn 1,1)",
        text: "E tudo começou do absoluto nada. A criação era boa, profundamente boa. Tudo o que existe brotou do amor transbordante de Deus. A natureza, os rios, os céus estrelados e o sopro da vida humana manifestam uma ordem que não é apenas física, mas espiritual. Nesta contemplação do Éden, reconhecemos a beleza do Criador e a vocação original da humanidade: viver em comunhão com Deus e com toda a criação.",
        bgImage: "static/images/landing_page/ato-1/images/criacao1.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-1/videos/criacao_loop.mp4"
        },
        audio: "static/images/landing_page/ato-1/audios/som_natureza.mp3"
    },
    2: {
        title: "Humanidade caída",
        text: "O dom da liberdade exigia responsabilidade. Mas o ser humano, seduzido pela ilusão de autonomia absoluta, afastou-se do Criador. A queda não foi apenas moral, mas existencial: inaugurou-se uma ferida no coração humano e no mundo. Violência, egoísmo, medo, caos urbano, pressa. A humanidade caminha, mas muitas vezes perdida. O paraíso se distancia – não por castigo divino, mas pela escolha humana de viver longe do amor.",
        quote: "“Comerás do suor do teu rosto, até que tornes à terra.” (Gn 3,19)",
        bgImage: "static/images/landing_page/ato-2/images/queda1.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-2/videos/caos_loop.mp4"
        },
        audio: "static/images/landing_page/ato-2/audios/som_caos.mp3"
    },
    3: {
        title: "Reconciliações",
        quote: "“O Senhor, teu Deus, é misericordioso: não te abandonará.” (Dt 4,31)",
        text: "Mesmo após a queda, Deus nunca desistiu da humanidade. Com ternura e firmeza, iniciou uma longa jornada de reconciliação. Escolheu patriarcas, levantou profetas, inspirou reis e cultivou esperanças. Toda a história de Israel aponta para um Messias que redimiria não apenas um povo, mas toda a criação. É o Deus que educa, acompanha, resgata e promete um novo céu e nova terra.",
        bgImage: "static/images/landing_page/ato-3/images/jesus_cristo.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-3/videos/timeline_animada.mp4"
        },
        audio: "static/images/landing_page/ato-3/audios/voz_off_reconciliacao.mp3"
    },
    4: {
        title: "Maria",
        quote: "“Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra.” (Lc 1,38)",
        text: "Na plenitude dos tempos, Deus encontra em Maria um coração totalmente disponível. O “fiat” (em latim, “faça-se”) da jovem de Nazaré resume a resposta da humanidade redimida: acolher com liberdade e confiança o projeto divino. Em Maria, vemos o cumprimento das promessas, a maternidade espiritual da Igreja e a presença da mulher forte que está aos pés da cruz e no nascimento da comunidade cristã. Maria é ponte entre o antigo e o novo, entre o céu e a terra.",
        bgImage: "static/images/landing_page/ato-4/images/guadalupe_mexico.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-4/videos/fundo_sonoro_suave.mp4"
        },
        audio: "static/images/landing_page/ato-4/audios/musica_suave.mp3"
    },
    5: {
        title: "Pentecostes",
        quote: "“Recebereis a força do Espírito Santo e sereis minhas testemunhas.” (At 1,8)",
        text: "A ressurreição de Jesus inaugura uma nova etapa: o tempo da missão. O Espírito Santo desce sobre os apóstolos e, desde então, sobre toda a Igreja. Este é o tempo da ação evangelizadora, da ousadia dos jovens em anunciar, da criatividade da fé encarnada. É também o tempo das lutas, dos desafios modernos e da esperança que não decepciona. Aqui, somos chamados a sair, ir ao encontro, construir comunidade.",
        bgImage: "static/images/landing_page/ato-5/images/atos_apostolos.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-5/videos/institucional_jovens.mp4"
        },
        audio: "static/images/landing_page/ato-5/audios/musica_espiritual.mp3"
    },
    6: {
        title: "Nossa Senhora de Guadalupe",
        quote: "“Não estou eu aqui, que sou tua Mãe?” (Nossa Senhora a Juan Diego)",
        text: "Entre os séculos e continentes, a Mãe de Deus continua a visitar seus filhos. Em 1531, em Guadalupe, ela se manifesta como mulher do povo, com rosto indígena, vestida de céu. No Brasil, ela se faz presente nas comunidades simples, nas igrejas vivas, nas festas populares e no carinho materno do povo. Aqui em Vila Velha, a presença de Nossa Senhora de Guadalupe renova a fé, a pertença e a missão. Ela caminha conosco.",
        bgImage: "static/images/landing_page/ato-6/images/aparicao_guadalupe.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-6/videos/video_comunidade.mp4"
        },
        audio: "static/images/landing_page/ato-6/audios/som_ambiente_igreja.mp3"
    },
    7: {
        title: "GJ Guadalupe",
        quote: "“Jovens, não tenham medo! Aceitem o convite da Igreja e de Cristo Senhor!” (Papa Leão XIV)",
        text: "Inspirados por Maria e movidos pelo Espírito, jovens se organizam, se unem e constroem comunidade. A família GJ nasce da necessidade de escutar da Palavra e servir a Deus com criatividade, alegria e coragem. Não somos espectadores da fé, mas protagonistas de um novo tempo.",
        bgImage: "static/images/landing_page/ato-7/images/logo_gj_guadalupe.png",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-7/videos/videos_rapidos.mp4"
        },
        audio: "static/images/landing_page/ato-7/audios/musica_ambiente.mp3"
    },
    8: {
        title: "Venha ser de Deus",
        quote: "“Vinde a mim todos vós que estais cansados e sobrecarregados.” (Mt 11,28)",
        text: "A fé cristã não é imposição, mas convite. Um chamado suave, constante e insistente à conversão, à comunhão, à vida em plenitude. Aqui, os jovens de 18 a 29 anos são convidados a dar um passo a mais. Não é uma campanha, mas um apelo pessoal: tua graça me basta. Jesus estende a mão. A família GJ estende o coração. Você é esperado(a), como está.",
        bgImage: "static/images/landing_page/ato-8/images/convite1.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-8/videos/botoes_animados.mp4"
        },
        audio: "static/images/landing_page/ato-8/audios/som_ambiente_igreja.mp3"
    },
    9: {
        title: "Tua graça me basta",
        quote: "“Basta-te a minha graça, pois é na fraqueza que se revela a minha força.” (2Cor 12,9)",
        text: "Esse versículo não é um lema decorativo, é uma experiência espiritual profunda. Em meio às fragilidades, doenças, limitações e quedas, a graça de Deus se mostra suficiente. O verdadeiro milagre é permanecer firme, mesmo fraco. É essa graça que sustenta a caminhada, reacende a fé, renova o ânimo. Aqui, há espaço para a oração pessoal, o silêncio fecundo e o encontro íntimo com o Senhor.",
        bgImage: "static/images/landing_page/ato-9/images/versiculo.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-9/videos/fundo_devocional.mp4"
        },
        audio: "static/images/landing_page/ato-9/audios/musica_devocional.mp3"
    },
    10: {
        title: "Sou estrangeiro aqui, o céu é meu lar",
        quote: "“Lutai para entrar pela porta estreita...” (Lc 13,24)",
        text: "A história não termina na terra. A vocação última da humanidade é a eternidade. Rumo ao céu, caminhamos com os olhos fixos em Cristo. A fé cristã não é alienação, mas esperança viva. A juventude que evangeliza também é aquela que sonha com o céu – não como fuga, mas como destino. Juntos queremos celebrar a promessa final: um novo tempo, onde Deus será tudo em todos. A família GJ lhe espera para caminharmos juntos nessa jornada.",
        bgImage: "static/images/landing_page/ato-10/images/ceu_aberto.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-10/videos/ascensao.mp4"
        },
        audio: "static/images/landing_page/ato-10/audios/musica_esperanca.mp3"
    }
    };
  // Elementos DOM
  const atoSections = document.querySelectorAll('.ato-section');
  const audioElements = {};
  let currentAudio = null;
  let jornadaIniciada = false;
  const startJourneyBtn = document.querySelector('.start-journey');

  // Inicializar cada seção de ato com estrutura básica
  atoSections.forEach(section => {
    const atoNumber = parseInt(section.dataset.ato);
    const config = atosConfig[atoNumber];
    
    if (config) {
      section.innerHTML = `
        <div class="ato-container" data-ato="${atoNumber}" 
             style="background-image: url('${config.bgImage}')">
          <div class="ato-content"></div>
        </div>
      `;
      
      // Inicializar áudio
      if (config.audio) {
        audioElements[atoNumber] = new Audio(config.audio);
        audioElements[atoNumber].loop = true;
      }
    }
  });

  // Botão "Iniciar Jornada"
  startJourneyBtn?.addEventListener('click', function(e) {
    e.preventDefault();
    jornadaIniciada = true;
    alert("Jornada iniciada! Você pode navegar pelos atos usando as setas do teclado ou clicando nos botões de navegação.");
    document.querySelector('#ato-1').scrollIntoView({ behavior: 'smooth' });
  });

  // Observador para atos
  const atoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const atoNumber = parseInt(entry.target.dataset.ato);
        handleAtoChange(atoNumber);
      }
    });
  }, { threshold: 0.6 });

  // Observar todas as seções de ato
  atoSections.forEach(section => {
    atoObserver.observe(section);
  });

  // Funções auxiliares
  function handleAtoChange(atoNumber) {
    if (atoNumber === 1 && !jornadaIniciada) {
      alert("Clique em 'CONHECER DEUS' para iniciar sua jornada!");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    manageAudio(atoNumber);
    history.replaceState(null, null, `#ato-${atoNumber}`);
    dispatchAtoChangeEvent(atoNumber);
  }

  function dispatchAtoChangeEvent(atoNumber) {
    document.dispatchEvent(new CustomEvent('atoChanged', {
      detail: { atoNumber, config: atosConfig[atoNumber] }
    }));
  }

  function manageAudio(atoNumber) {
    if (currentAudio && currentAudio !== atoNumber) {
      audioElements[currentAudio]?.pause();
    }
    if (audioElements[atoNumber]) {
      audioElements[atoNumber].currentTime = 0;
      audioElements[atoNumber].play().catch(e => console.log("Autoplay bloqueado:", e));
    }
    currentAudio = atoNumber;
  }

  // Navegação por teclado (global)
  document.addEventListener('keydown', (e) => {
    const currentAto = getCurrentAto();
    
    if (e.key === 'ArrowDown' && currentAto < 10) {
      e.preventDefault();
      document.querySelector(`#ato-${currentAto + 1}`).scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentAto > 1) {
      e.preventDefault();
      document.querySelector(`#ato-${currentAto - 1}`).scrollIntoView({ behavior: 'smooth' });
    }
    // As setas esquerda/direita são tratadas pelo nav_atos.js
  });

  function getCurrentAto() {
    for (let i = 1; i <= 10; i++) {
      const section = document.querySelector(`#ato-${i}`);
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
        return i;
      }
    }
    return 1;
  }
});


