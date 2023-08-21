var buttonPlay = document.getElementById('playnow');
var selectMode = document.getElementById('selectMode');
var selectModeNumber = 0;
var qtdPlayers = document.getElementById('qtdplayers');
var returnLobbySelect = document.getElementById('return-lobby-selectmode');
var buttonStore = document.getElementById('buttonStore');
var buttonInventario = document.getElementById('buttonInventario');
var buttonRank = document.getElementById('buttonRank');
var buttonConfig = document.getElementById('buttonConfig');
var returnLobbyLoja = document.getElementById('return-lobby-loja');
var returnLobbyInv = document.getElementById('return-lobby-inv');

// big-lobby-inventory
// big-lobby-ranking
// big-lobby-config
var game1 = document.getElementById('game1');
var game2 = document.getElementById('game2');
var game3 = document.getElementById('game3');
var game4 = document.getElementById('game4');


$('.loader').css('display', 'none');
buttonPlay.addEventListener('click', () => {
    $('.big-animations').fadeOut(400, () => {
        function openLoad() {
            $('.loader').fadeIn(400, () => {
                $('.loader').css('display', 'block');
            });
        }
        function closeLoad() {
            $('.big-login').fadeOut(400, () => {
            $('.big-login').css('display', 'none');
            $('.big-lobby').css('display', 'block');
            });
        }
        setInterval(openLoad, 400);
        setInterval(closeLoad, 3000);
    });
});

game1.addEventListener('click', () => {
  selectModeNumber = 1
  $('#game1').css('filter', 'saturate(100%)');
  $('#game2').css('filter', 'saturate(0%)');
  $('#game3').css('filter', 'saturate(0%)');
  $('#game4').css('filter', 'saturate(0%)');
});

game2.addEventListener('click', () => {
  selectModeNumber = 2
  $('#game1').css('filter', 'saturate(0%)');
  $('#game2').css('filter', 'saturate(100%)');
  $('#game3').css('filter', 'saturate(0%)');
  $('#game4').css('filter', 'saturate(0%)');
});

game3.addEventListener('click', () => {
  selectModeNumber = 3
  $('#game1').css('filter', 'saturate(0%)');
  $('#game2').css('filter', 'saturate(0%)');
  $('#game3').css('filter', 'saturate(100%)');
  $('#game4').css('filter', 'saturate(0%)');
});

game4.addEventListener('click', () => {
  selectModeNumber = 4
  $('#game1').css('filter', 'saturate(0%)');
  $('#game2').css('filter', 'saturate(0%)');
  $('#game3').css('filter', 'saturate(0%)');
  $('#game4').css('filter', 'saturate(100%)');
});

returnLobbySelect.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'block');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'none');
});

selectMode.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'flex');
  $('.big-lobby-action').css('display', 'none');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'none');

});

buttonRank.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'none');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'block');
  $('.big-lobby-config').css('display', 'none');
});

buttonConfig.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'none');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'block');
});

buttonInventario.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'none');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'block');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'none');
});

returnLobbyInv.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'block');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'none');
});

returnLobbyLoja.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'block');
  $('.big-container-lobby').css('display', 'none');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'none');
});

buttonStore.addEventListener('click', () => {
  $('.big-lobby-selectmode').css('display', 'none');
  $('.big-lobby-action').css('display', 'none');
  $('.big-container-lobby').css('display', 'block');
  $('.big-lobby-inventory').css('display', 'none');
  $('.big-lobby-ranking').css('display', 'none');
  $('.big-lobby-config').css('display', 'none');
});



const textoCompleto = "CARREGANDO A ARENA...";
const spanElement = document.getElementById('carregando');
let index = 0;
let direction = 1; // 1 para digitação, -1 para apagamento

function animarDigitacaoApagamento() {
  spanElement.textContent = textoCompleto.slice(0, index);

  if (direction === 1) {
    index++;
    if (index > textoCompleto.length) {
      direction = -1;
      setTimeout(animarDigitacaoApagamento, 1000); // Tempo de espera após digitar tudo
    } else {
      setTimeout(animarDigitacaoApagamento, 100); // Velocidade de digitação
    }
  } else if (direction === -1) {
    index--;
    if (index === 0) {
      direction = 1;
      setTimeout(animarDigitacaoApagamento, 1000); // Tempo de espera após apagar tudo
    } else {
      setTimeout(animarDigitacaoApagamento, 100); // Velocidade de apagamento
    }
  }
}

animarDigitacaoApagamento();


// Dados dos itens
const itemsData = [
  { name: "Elder Flame V. ", value: 5000, imageSrc: "imagens/elderflame-vandal-skin.png" },
  { name: "Glitchpop P.", value: 2500, imageSrc: "imagens/glitchpop-ii-phantom-skin.png" },
  { name: "Magepunk E.", value: 2000, imageSrc: "imagens/magepunk-electroblade-level-2variant-2-purple_valorant_full_skin_155034.webp" },
  { name: "Blast X", value: 500, imageSrc: "imagens/valorant-blastx-phantom-skin.png" },
  { name: "Hush G.", value: 700, imageSrc: "imagens/hush-ghost-skin.png" }
];

// Função para criar um elemento HTML
function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  return element;
}

// Função para gerar os elementos dos itens
function generateItems() {
  const container = document.querySelector(".big-lobby-loja");
  
  itemsData.forEach((item, index) => {
    const itemDiv = createElement("div", { id: `item${index + 1}` });
    const itemHeader = createElement("div", { class: "item-header" });
    const h1 = createElement("h1");
    h1.textContent = item.name;
    
    const valueItem = createElement("div", { class: "valueItem" });
    const imgDiamond = createElement("img", { src: "imagens/diamond.png", alt: "" });
    const spanValue = createElement("span");
    spanValue.textContent = item.value;
    
    const itemImage = createElement("img", { id: `image-item${index + 1}`, src: item.imageSrc, alt: "" });
    
    valueItem.appendChild(imgDiamond);
    valueItem.appendChild(spanValue);
    itemHeader.appendChild(h1);
    itemHeader.appendChild(valueItem);
    itemDiv.appendChild(itemHeader);
    itemDiv.appendChild(itemImage);
    container.appendChild(itemDiv);
  });
}

// Chamada da função para gerar os elementos
generateItems();



const rankingData = [
  { ranking: 1, nome: "João", imagePatente: "images/gold.png", patente: "Combatente Major", pontos: 35000 },
  { ranking: 2, nome: "Maria", imagePatente: "images/gold", patente: "Combatente Minor", pontos: 23000 },
  { ranking: 3, nome: "Luydi Passarin", imagePatente: "images/gold", patente: "Combatente Minor", pontos: 21459 },
  { ranking: 4, nome: "Fanho RLK", imagePatente: "images/gold", patente: "Radiante", pontos: 10321 },
  { ranking: 5, nome: "Bigodeira Quebradeira", imagePatente: "images/gold", patente: "Radiante", pontos: 9875 },
  { ranking: 6, nome: "Rega ÇaKU", imagePatente: "images/gold", patente: "Radiante", pontos: 9870 },
  { ranking: 7, nome: "Matei NoRolas", imagePatente: "images/gold", patente: "Radiante", pontos: 9790 },
  { ranking: 8, nome: "Little Hair", imagePatente: "images/gold", patente: "Radiante", pontos: 9740 },
  { ranking: 9, nome: "Mete Bala", imagePatente: "images/gold", patente: "Radiante", pontos: 9650 },
  { ranking: 10, nome: "Z-Zikka", imagePatente: "images/gold", patente: "Radiante", pontos: 9304 },
  { ranking: 12, nome: "Lasanha Quebra", imagePatente: "images/gold", patente: "Radiante", pontos: 9210 },
  { ranking: 13, nome: "Vodka", imagePatente: "images/gold", patente: "Radiante", pontos: 9180 },
  { ranking: 14, nome: "Jonh MF", imagePatente: "images/gold", patente: "Radiante", pontos: 9179 },
  { ranking: 15, nome: "Mandala Mente", imagePatente: "images/gold", patente: "Radiante", pontos: 9150 },
  { ranking: 16, nome: "Samuel", imagePatente: "images/gold", patente: "Radiante", pontos: 9101 },
  { ranking: 17, nome: "Sandoval", imagePatente: "images/gold", patente: "Radiante", pontos: 9099 },
  { ranking: 18, nome: "DUde", imagePatente: "images/gold", patente: "Radiante", pontos: 9050 },
  { ranking: 19, nome: "Bibi", imagePatente: "images/gold", patente: "Radiante", pontos: 9020 },
  { ranking: 20, nome: "A Senna", imagePatente: "images/gold", patente: "Radiante", pontos: 8997 },
  { ranking: 21, nome: "Rafael Abade", imagePatente: "images/gold", patente: "Radiante", pontos: 8950 },
  { ranking: 22, nome: "Raphaela RR", imagePatente: "images/gold", patente: "Radiante", pontos: 8920 },
  { ranking: 23, nome: "Fleck Souza", imagePatente: "images/gold", patente: "Radiante", pontos: 8432 },
  { ranking: 24, nome: "QlueBer Bambam", imagePatente: "images/gold", patente: "Radiante", pontos: 8432 },
  { ranking: 25, nome: "DanDan Gentile", imagePatente: "images/gold", patente: "Radiante", pontos: 8432 },
  // Adicione mais dados conforme necessário
];

const tableBody = document.querySelector("#rankingTable tbody");

rankingData.forEach(data => {
  const row = tableBody.insertRow();

  const rankingCell = row.insertCell(0);
  rankingCell.textContent = data.ranking;

  const nomeCell = row.insertCell(1);
  nomeCell.textContent = data.nome;

  const patenteCell = row.insertCell(2);
  patenteCell.innerHTML =  data.patente;

  const pontosCell = row.insertCell(3);
  pontosCell.textContent = data.pontos;
});
