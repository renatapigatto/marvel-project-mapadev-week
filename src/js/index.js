/*
OBJETIVO 1: ao passar o mouse em cima de um personagem temos que:
 - colocar a classe selecionado no personagem e fazer a animação do personagem
 - tirar a classe selecionado do personagem anterior

OBJETIVO 2: trocar o nome e a imagem do personagem grande
*/

const personagens = document.querySelectorAll('.personagem')
personagens.forEach((personagem) => {
  personagem.addEventListener ('mouseenter', () => {
    const idSelecionado = personagem.attributes.id.value;
    if(idSelecionado === 'ultron') return;
    
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
    personagem.classList.add('selecionado')
   
    const imagemJogador1 = document.getElementById('personagem-jogador-1')
    imagemJogador1.src = `./src/img/${idSelecionado}.png`
    
    const nomeJogador1 = document.getElementById('nome-jogador-1')
    const nomeSelecionado = personagem.getAttribute('data-name')
    nomeJogador1.innerHTML = nomeSelecionado
  })
})