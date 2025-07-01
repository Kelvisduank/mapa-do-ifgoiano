class Building {
  constructor(name, description, image, link) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

const buildings = [
  new Building(
    'Prédio do Téc. Agropecuaria Comitante subsequente  - "Bloco"',
    "O técnico concomitante/subsequente em Agropecuária oferece formação técnica integrada ou após o ensino médio, capacitando o aluno em manejo animal, cultivo, gestão rural e tecnologias agrícolas para atuar em propriedades rurais, empresas e agroindústrias.",
    "img/fotospredios/20241020_095623.jpg",
    "https://maps.app.goo.gl/7RSxQX1Yyf9P2A1x5"
  ),
  new Building(
    "Ensino Médio - Agropecuaria",
    "Técnico em agropecuaria integrado ao ensino médio",
    "img/fotospredios/20241020_101756.jpg",
    "https://maps.app.goo.gl/X3LTkiyoLbSJNM4x6"
  ),
  new Building(
    "Ensino Médio - Informática",
    "Técnico em informatica integrado ao ensino médio",
    "img/fotospredios/20241020_101347.jpg",
    "https://maps.app.goo.gl/BJxF6eVZgfU7SKYg9"
  ),
  new Building(
    "Ensino Médio - Biotécnologia",
    "Técnico em biotecnlogia integrado ao ensino médio",
    "img/fotospredios/20241020_100945.jpg",
    "https://maps.app.goo.gl/7WBuW7F3ur4whnqX8"
  ),
  new Building(
    "NAP - Nucleo de apoio pedagogico",
    "O Núcleo de Apoio Pedagógico (NAP) é um setor ou equipe dentro de instituições de ensino, como escolas, universidades ou institutos, que tem como objetivo principal oferecer suporte pedagógico aos estudantes e, em alguns casos, aos professores. Ele busca contribuir para o processo de ensino-aprendizagem e garantir que todos tenham condições adequadas para desenvolver suas potencialidades acadêmicas.",
    "img/fotospredios/20241020_101852.jpg",
    "https://maps.app.goo.gl/Ss2VsFoTmgShHpA68"
  ),
  new Building(
    "Cordenações - Informatica, Biotecnologia, Agropecuaria.",
    "Cordenações dos cursos técnicos",
    "img/fotospredios/20241020_101903.jpg",
    "https://maps.app.goo.gl/Ss2VsFoTmgShHpA68"
  ),
  new Building(
    "NAPNE - Nucleo de atendimento a pessoas com necessidades especificas",
    "O NAPNE (Núcleo de Atendimento às Pessoas com Necessidades Específicas) é uma estrutura presente em instituições de ensino, como os Institutos Federais e outras escolas, com o objetivo de promover a inclusão e garantir condições adequadas para a participação e o desenvolvimento de pessoas com necessidades específicas, incluindo deficiência, altas habilidades/superdotação e transtornos globais do desenvolvimento.",
    "img/fotospredios/20241020_101844.jpg",
    "https://maps.app.goo.gl/Ss2VsFoTmgShHpA68"
  ),
  new Building(
    "Gerência de ensino médio e técnico.",
    "A Gerência de Ensino Médio e Técnico coordena e supervisiona atividades pedagógicas dos cursos técnicos e ensino médio integrado, garantindo qualidade e alinhamento às políticas educacionais.",
    "img/fotospredios/20241020_101838.jpg",
    "https://maps.app.goo.gl/Ss2VsFoTmgShHpA68"
  ),
  new Building(
    "Vestiarios - Armarios",
    "Vestiarios do campus",
    "img/fotospredios/20241020_095901.jpg",
    "https://maps.app.goo.gl/5j5sXquC6XxgLK4T9"
  ),
  new Building(
    "CEBIO / FAPEG",
    "Laboratorios.",
    "img/fotospredios/20241020_100414.jpg",
    "https://maps.app.goo.gl/VV7fWxzGodetzZUt7"
  ),
  new Building(
    "Laboratório de Fitopatologia",
    "Laboratorio.",
    "img/fotospredios/20241020_100444.jpg",
    "https://maps.app.goo.gl/qHJE9PfpTYTiNC2v6"
  ),
  new Building(
    "Laboratório de Microbiologia",
    "Laboratorio.",
    "img/fotospredios/20241020_100444.jpg",
    "https://maps.app.goo.gl/qHJE9PfpTYTiNC2v6"
  ),
  new Building(
    "Auditório - Paulo Freire",
    "Auditorio Pequeno.",
    "img/fotospredios/20241020_100535.jpg",
    "https://maps.app.goo.gl/8UUsZpWYTNV3Nnoq9"
  ),
  new Building(
    "Cozinha do Ensino Médio - Todos",
    "Possui geladeira, microondas, pia. é possivel guardar sua refeições.",
    "img/fotospredios/20241020_100632.jpg",
    "https://maps.app.goo.gl/UiM3w3oiFXNpbTPT9"
  ),
  new Building(
    "Sala de professores - Ensino médio",
    "sala de Professores das disciplinas do ensino médio",
    "img/fotospredios/20241020_100920.jpg",
    "https://maps.app.goo.gl/TGXNDRdrMNMct4Py5"
  ),
  new Building(
    "NEABI - Núcleo de estudos afro brasileiros e indigenas",
    "O NEABI (Núcleo de Estudos Afro-Brasileiros e Indígenas) é um setor acadêmico presente em muitas universidades e instituições de ensino, com a missão de promover o estudo, a pesquisa, e a valorização das culturas afro-brasileira e indígena. O objetivo do NEABI é assegurar a inclusão dessas culturas no currículo acadêmico e nas práticas educacionais, além de atuar na promoção de uma educação mais diversificada e representativa.",
    "img/fotospredios/20241020_101359.jpg",
    "https://maps.app.goo.gl/VV7fWxzGodetzZUt7"
  ),
  new Building(
    "Cantina do Ensino médio.",
    "A cantina escolar é o local dentro da escola destinado à venda de alimentos e bebidas para alunos, professores e funcionários. Sua principal função é fornecer opções alimentícias durante o horário escolar, contribuindo para a alimentação e o bem-estar da comunidade escolar.",
    "img/fotospredios/20241020_101719.jpg",
    "https://maps.app.goo.gl/tWrpsENZUzSxcXVu8"
  ),
  new Building(
    "GAE - Gerencia de assistência estudantil.",
    "A Gerência de Assistência Estudantil é um setor responsável por coordenar e implementar políticas e ações que garantam o acesso, a permanência e o sucesso dos estudantes no ambiente acadêmico, especialmente aqueles em situação de vulnerabilidade social ou econômica.",
    "img/fotospredios/20241020_101733.jpg",
    "https://maps.app.goo.gl/aJnvmnmiEcmAz5ox5"
  ),
  new Building(
    "Biblioteca.",
    "Maior acervo de livros da escola.",
    "img/fotospredios/20241020_102250.jpg",
    "https://maps.app.goo.gl/wrcXzTWDtEFVygLB7"
  ),
  new Building(
    "Gerência de pesquisa.",
    "Gerencia de pesquisa.",
    "img/fotospredios/20241020_102153.jpg",
    "https://maps.app.goo.gl/5xq3Q7fmT8DPX5197"
  ),
  new Building(
    "Castelinho do Campus urutaí.",
    "Castelinho de Urutaí fica dentro do IF Goiano e é considerado fundamental para a história do órgão. Urutaí é uma cidade goiana que fica a 170 quilômetros de Goiânia, e abriga um verdadeiro tesouro arquitetônico que está sendo deteriorado pelo tempo e pela falta de cuidado..",
    "img/fotospredios/20241020_102455.jpg",
    "https://maps.app.goo.gl/aGabNXpZ5bKfRkNi6"
  ),
  new Building(
    "Gerencia de Gestão de pessoas.",
    ".",
    "img/fotospredios/20241020_102611.jpg",
    "https://maps.app.goo.gl/1QNhvE8jF8ppnrMLA"
  ),
  new Building(
    "Residência 1 - Feminina",
    "Residencia para menores de 18 anos.",
    "img/fotospredios/20241020_103037.jpg",
    "https://maps.app.goo.gl/EcZ5E2yspok7jdteA"
  ),
  new Building(
    "Ginásio",
    "Ginásio de esportes",
    "img/fotospredios/20241020_103617.jpg",
    "https://maps.app.goo.gl/Wvp3WFybDyRcUTmy5"
  ),
  new Building(
    "Academia ao Ar Livre",
    "Academia publica.",
    "img/fotospredios/20241020_103550.jpg",
    "https://maps.app.goo.gl/VRemQDJdPX4EpsNN6"
  ),

  new Building(
    "Quadra de tenis",
    "Quadra publica.",
    "img/fotospredios/20241020_103659.jpg",
    "https://maps.app.goo.gl/7xTrJAeMsn3WwK8K8"
  ),

  new Building(
    "Quadra coberta",
    "Quadra publica.",
    "img/fotospredios/20241020_103410.jpg",
    "https://maps.app.goo.gl/CcGiYctqukEtb27R9"
  ),

  new Building(
    "Campo grande - Futebol",
    "Campo Grande.",
    "img/fotospredios/20244256.jpg",
    "https://maps.app.goo.gl/jrWehbCSYoySYt8K9"
  ),

  new Building(
    "Piscina",
    "Piscina do campus",
    "img/fotospredios/20241020_103305.jpg",
    "https://maps.app.goo.gl/PshHCyGNzLpwi5f67"
  ),

  new Building(
    "Vila estudantil - Residência",
    "Residencia para maiores.",
    "img/fotospredios/20241020_103936.jpg",
    "https://maps.app.goo.gl/e5gnbDHokkcd6Q9u8"
  ),

  new Building(
    "Pista de atletismo",
    "",
    "img/fotospredios/20241020_104431.jpg",
    "https://maps.app.goo.gl/e5gnbDHokkcd6Q9u8"
  ),

  new Building(
    "Vila estudantil - Residência",
    "Residencia para maiores.",
    "img/fotospredios/20241020_103936.jpg",
    "https://maps.app.goo.gl/e5gnbDHokkcd6Q9u8"
  ),

  new Building(
    "Campo de futebol - Grande",
    "campo de futebol.",
    "img/fotospredios/20241020_104256.jpg",
    "https://maps.app.goo.gl/rHEXFXLgPEWB9dg86"
  ),

  new Building(
    "Quadra de peteca",
    "Qaudra de peteca.",
    "img/fotospredios/20241020_104440.jpg",
    "https://maps.app.goo.gl/LaU5qgjkrr48qiNm6"
  ),

  new Building(
    "Defensivos Agricolas",
    "..",
    "img/fotospredios/20241020_104724.jpg",
    "https://maps.app.goo.gl/iayWzd2DSajWTk6r5"
  ),

  new Building(
    "Biotério e Labtox",
    "Necroterios de animais",
    "img/fotospredios/20241020_104838.jpg",
    "https://maps.app.goo.gl/wosV3ZvxtX1W2d9ZA"
  ),

  new Building(
    "Bovinocultura - Residencia estudantil",
    "Residencia para maiores",
    "img/fotospredios/20241020_105426.jpg",
    "https://maps.app.goo.gl/icdes14uHxwrQXmQA"
  ),

  new Building(
    "Represa do Campus",
    "Represa",
    "img/fotospredios/20241020_105538.jpg",
    "https://maps.app.goo.gl/Xz9kkCRCf4PdWQyS8"
  ),

  new Building(
    "Centro de Equoterapia",
    "Um centro de equoterapia é uma instituição que oferece atendimento terapêutico e educacional por meio do cavalo. Este método é indicado para pessoas com deficiência ou necessidades especiais",
    "img/fotospredios/20241020_110024.jpg",
    "https://maps.app.goo.gl/58mQrNLDZEqpSZWF9"
  ),

  new Building(
    "Residencia YPE, (DESATIVADA)",
    "Residencia para maiores, desativada",
    "img/fotospredios/20241020_110438.jpg",
    "https://maps.app.goo.gl/wLw2692PBBWo5NJm6"
  ),

  new Building(
    "Almoxarifado",
    "Almoxarifado do campus",
    "img/fotospredios/20241020_111814.jpg",
    "https://maps.app.goo.gl/15b1pLspsgheLdHw9"
  ),

  new Building(
    "Garagem",
    "Local onde os veiculos do campus ficam estacionados",
    "img/fotospredios/20241020_111826.jpg",
    "https://maps.app.goo.gl/37QJu5bYbyCV36McA"
  ),

  new Building(
    "Lavanderia - Residencia 2 e 3",
    "Local usado para a lavagem de roupas",
    "img/fotospredios/20241020_095352.jpg",
    "https://maps.app.goo.gl/Xq9gejyyHXG2txh48"
  ),

  new Building(
    "Residência 3 - Masculina ",
    "Residência para menores",
    "img/fotospredios/20241020_0955352.jpg",
    "https://maps.app.goo.gl/WtyLKgVZH683r34S9"
  ),

  new Building(
    "Residencia 4 - Feminina",
    "Residencia de meninas",
    "img/fotospredios/20241020_095724.jpg",
    "https://maps.app.goo.gl/VXXaEKrQQmrgmhJa7"
  ),

  new Building(
    "Posto de saúde - CIS",
    "centro integrado de saúde",
    "img/fotospredios/20241020_095750.jpg",
    "https://maps.app.goo.gl/iBqY81MZKgaSPxLb8"
  ),

  new Building(
    "Capela",
    "Local para cerimonias religiosas",
    "img/fotospredios/20241020_095835.jpg",
    "https://maps.app.goo.gl/2bE7LY9cWgyhRsES8"
  ),

  new Building(
    "Olericultura",
    "Horta e residencia para maiores",
    "img/fotospredios/20241020_10044.jpg",
    "https://maps.app.goo.gl/4nvh2C7P3M32dmvJ8"
  ),

  new Building(
    "Secretaria do ensino médio",
    "Secretaria dos cursos tecnicos",
    "img/fotospredios/20241020_101810.jpg",
    "https://maps.app.goo.gl/QiWfqxeKwrFz3CcJA"
  ),

  new Building(
    "Gerencia de ensino médio e tecnico",
    "",
    "img/fotospredios/20241020_101838.jpg",
    "https://maps.app.goo.gl/VXXaEKrQQmrgmhJa7"
  ),

  new Building(
    "Prédio de ciencias da saúde ",
    "Predio utilizado para aulas",
    "img/fotospredios/20241020_101921.jpg",
    "https://maps.app.goo.gl/VXXaEKrQQmrgmhJa7"
  ),

  new Building(
    "Prédio de direção de ensino",
    "responsável por planejar, coordenar, supervisionar, acompanhar e avaliar a implementação das atividades, ações e políticas de ensino, pesquisa e extensão,",
    "img/fotospredios/20241020_101958.jpg",
    "https://maps.app.goo.gl/SUvn3p9zLHHV4NAw8"
  ),

  
  new Building(
    "Predio do Projeto Cão Guia",
    "Um projeto de cão-guia treina animais para auxiliar pessoas com deficiência visual na locomoção e na realização de tarefas do dia a dia. O objetivo é proporcionar maior autonomia, segurança e independência a pessoas que dependem do auxílio de um cão-guia para se locomover e interagir no mundo. ",
    "img/fotospredios/fotosabril/20250406_075428.jpg",
    "https://maps.app.goo.gl/5LY5qFedsLX78DxM6"
  ),

  new Building(
    "Refeitório Estudantil",
    "Onde são servidos todas as refeições do Campus. Horario de funcionamento: Almoço: 11:00 - 12:15 (Dias Uteis) ",
    "img/fotospredios/fotosabril/20250406_075600.jpg",
    "https://maps.app.goo.gl/KupP2uMfeZkDpoZ18"
  ),

  new Building(
    "Hospital Veterinário",
    "Hospital Veterinario do Campus urutai",
    "img/fotospredios/fotosabril/20250406_075653.jpg",
    "https://maps.app.goo.gl/eDyhp7NV6qDdodUN7"
  ),
  new Building(
    "Prédio da medicina veterinaria",
    "Local de aulas da Med Vet",
    "img/fotospredios/fotosabril/20250406_075937_001.jpg",
    "https://maps.app.goo.gl/W6nCjte2jnUoFRaa7"
  ),
  new Building(
    "Predio da ciencias Biologicas",
    "Biologia ",
    "img/fotospredios/fotosabril/20250406_080032.jpg",
    "https://maps.app.goo.gl/7NfLj63JUtKofD7x7"
  ),
  new Building(
    "Cantina Do Superior - Area de Convivência",
    "Comercio & area de convivencia ",
    "img/fotospredios/fotosabril/20250406_080110.jpg",
    "https://maps.app.goo.gl/NsBBHUtKFGAuZBsN7"
  ),
  new Building(
    "Ponto de Onibus",
    "Local de embarque e desembarque de estudantes ",
    "img/fotospredios/fotosabril/20250406_090211.jpg",
    "https://maps.app.goo.gl/2DmH6GtKfQmJiCEg6"
  ),
  
  new Building(
    "Secretaria de ensino superior",
    "",
    "img/fotospredios/fotosabril/20250406_120337.jpg",
    "https://maps.app.goo.gl/QLxo1ft5YetWmgJx8"
  ),


  new Building(
    "Nucleo de informatica",
    "Nucleo de informatica",
    "img/fotospredios/fotosabril/20250406_120345.jpg",
    "https://maps.app.goo.gl/ZjcdjJogb7Mjeu6u8"
  ),


  new Building(
    "Nucleo da matematica",
    "Nucleo da matematica",
    "img/fotospredios/fotosabril/20250406_120506.jpg",
    "https://maps.app.goo.gl/BSF1ChofdCoUNL8k9"
  ),



  
];

const searchInput = document.getElementById("search");
const buildingList = document.getElementById("building-list");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const modalClose = document.getElementById("modal-close");

function displayBuildings(filter = "") {
  buildingList.innerHTML = "";
  buildings
    .filter((building) =>
      building.name.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach((building) => {
      const item = document.createElement("div");
      item.className = "building-item";
      item.textContent = building.name;
      item.addEventListener("click", () => openModal(building));
      buildingList.appendChild(item);
    });
}

function openModal(building) {
  modalImage.src = building.image;
  modalTitle.textContent = building.name;
  modalDescription.textContent = building.description;
  modalLink.href = building.link;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

searchInput.addEventListener("input", (e) => displayBuildings(e.target.value));
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

displayBuildings();


class IntroScreen {
  constructor({ containerId, audioId, duration = 3000 }) {
      this.container = document.getElementById(containerId);
      this.audio = document.getElementById(audioId);
      this.duration = duration;
  }

  play() {
      this.playAudio();
      this.startTimer();
  }

  playAudio() {
      if (this.audio) {
          this.audio.play();
      }
  }

  startTimer() {
      setTimeout(() => this.hide(), this.duration);
  }

  hide() {
      if (this.container) {
          this.container.classList.add("unique-hide");
          setTimeout(() => this.container.remove(), 1000);
      }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const intro = new IntroScreen({
      containerId: "unique-intro",
      audioId: "unique-intro-sound",
      duration: 4000
  });
  intro.play();
});