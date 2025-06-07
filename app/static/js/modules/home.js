document.addEventListener('DOMContentLoaded', function() {
  // Configuração dos atos com seus respectivos recursos
    const atosConfig = {
    1: {
        title: "Criação",
        bgImage: "static/images/landing_page/ato-1/images/criacao1.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-1/videos/criacao_loop.mp4"
        },
        audio: "static/images/landing_page/ato-1/audios/som_natureza.mp3"
    },
    2: {
        title: "Humanidade caída",
        bgImage: "static/images/landing_page/ato-2/images/queda1.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-2/videos/caos_loop.mp4"
        },
        audio: "static/images/landing_page/ato-2/audios/som_caos.mp3"
    },
    3: {
        title: "Reconciliações",
        bgImage: "static/images/landing_page/ato-3/images/jesus_cristo.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-3/videos/timeline_animada.mp4"
        },
        audio: "static/images/landing_page/ato-3/audios/voz_off_reconciliacao.mp3"
    },
    4: {
        title: "Maria",
        bgImage: "static/images/landing_page/ato-4/images/guadalupe_mexico.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-4/videos/fundo_sonoro_suave.mp4"
        },
        audio: "static/images/landing_page/ato-4/audios/musica_suave.mp3"
    },
    5: {
        title: "Pentecostes",
        bgImage: "static/images/landing_page/ato-5/images/atos_apostolos.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-5/videos/institucional_jovens.mp4"
        },
        audio: "static/images/landing_page/ato-5/audios/musica_espiritual.mp3"
    },
    6: {
        title: "Nossa Senhora de Guadalupe",
        bgImage: "static/images/landing_page/ato-6/images/aparicao_guadalupe.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-6/videos/video_comunidade.mp4"
        },
        audio: "static/images/landing_page/ato-6/audios/som_ambiente_igreja.mp3"
    },
    7: {
        title: "GJ Guadalupe",
        bgImage: "static/images/landing_page/ato-7/images/logo_gj_guadalupe.png",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-7/videos/videos_rapidos.mp4"
        },
        audio: "static/images/landing_page/ato-7/audios/musica_ambiente.mp3"
    },
    8: {
        title: "Venha ser de Deus",
        bgImage: "static/images/landing_page/ato-8/images/convite1.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-8/videos/botoes_animados.mp4"
        },
        audio: "static/images/landing_page/ato-8/audios/som_ambiente_igreja.mp3"
    },
    9: {
        title: "Tua graça me basta",
        bgImage: "static/images/landing_page/ato-9/images/versiculo.jpg",
        media: {
        type: "video",
        src: "static/images/landing_page/ato-9/videos/fundo_devocional.mp4"
        },
        audio: "static/images/landing_page/ato-9/audios/musica_devocional.mp3"
    },
    10: {
        title: "Sou estrangeiro aqui, o céu é meu lar",
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
  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');

  // Inicializar cada seção de ato
  atoSections.forEach(section => {
    const atoNumber = parseInt(section.dataset.ato);
    const config = atosConfig[atoNumber];
    
    if (config) {
      // Configurar background
      const bgDiv = section.querySelector('.ato-background');
      bgDiv.style.backgroundImage = `url('${config.bgImage}')`;
      
      // Configurar mídia
      const mediaDiv = section.querySelector('.ato-media');
      if (config.media.type === 'video') {
        mediaDiv.innerHTML = `
          <video autoplay loop muted playsinline>
            <source src="${config.media.src}" type="video/mp4">
          </video>
        `;
      } else {
        mediaDiv.innerHTML = `<img src="${config.media.src}" alt="${config.title}">`;
      }
      
      // Criar elemento de áudio
      if (config.audio) {
        audioElements[atoNumber] = new Audio(config.audio);
        audioElements[atoNumber].loop = true;
      }
    }
  });

  // Botão "Iniciar Jornada"
  startJourneyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    jornadaIniciada = true;
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    alert("Preparado para iniciar a jornada? Prepare fone de ouvido, separe um tempo para refletir sobre cada etapa e aproveite a experiência!");
    document.querySelector('#ato-1').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Observador para atos
  const atoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const atoNumber = parseInt(entry.target.dataset.ato);
        handleAtoChange(atoNumber);
        
        // Ocultar header/footer quando entrar em qualquer ato
        if (atoNumber >= 1 && !jornadaIniciada) {
          if (header) header.style.display = 'none';
          if (footer) footer.style.display = 'none';
          jornadaIniciada = true;
        }
      }
    });
  }, { threshold: 0.6 });

  // Observador para hero section
  const heroSection = document.getElementById('ato-0');
  if (heroSection) {
    const heroObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (header) header.style.display = 'block';
          if (footer) footer.style.display = 'block';
          jornadaIniciada = false;
        }
      });
    }, { threshold: 0.6 });

    heroObserver.observe(heroSection);
  }

  // Observar todas as seções de ato
  atoSections.forEach(section => {
    atoObserver.observe(section);
  });

  // Funções auxiliares
  function handleAtoChange(atoNumber) {
    updateProgressDots(atoNumber);
    manageAudio(atoNumber);
    history.replaceState(null, null, `#ato-${atoNumber}`);
  }

  function updateProgressDots(atoNumber) {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    const activeDot = document.querySelector(`.progress-dot:nth-child(${atoNumber})`);
    if (activeDot) activeDot.classList.add('active');
  }

  function manageAudio(atoNumber) {
    if (currentAudio && currentAudio !== atoNumber) {
      audioElements[currentAudio]?.pause();
    }
    if (audioElements[atoNumber]) {
      audioElements[atoNumber].currentTime = 0;
      audioElements[atoNumber].play()
        .catch(e => console.log("Autoplay bloqueado:", e));
    }
    currentAudio = atoNumber;
  }

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    const currentAto = getCurrentAto();
    if (e.key === 'ArrowDown' && currentAto < 10) {
      e.preventDefault();
      document.querySelector(`#ato-${currentAto + 1}`).scrollIntoView({
        behavior: 'smooth'
      });
    } else if (e.key === 'ArrowUp' && currentAto > 1) {
      e.preventDefault();
      document.querySelector(`#ato-${currentAto - 1}`).scrollIntoView({
        behavior: 'smooth'
      });
    }
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