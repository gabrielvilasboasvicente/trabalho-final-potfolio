const botaoMensagem = document.getElementById('botao-mensagem');
const textoDescricao = document.getElementById('texto-descricao');
const fotoPerfil = document.querySelector('.foto-perfil');
const descricaoOriginal = textoDescricao.textContent.trim();
const fotoOriginal = fotoPerfil.getAttribute('src');
const altOriginal = fotoPerfil.getAttribute('alt');
const fotoCuriosidade = 'assets/curiosidade.jpeg';
let mostrandoCuriosidade = false;

function alternarMensagem() {
  mostrandoCuriosidade = !mostrandoCuriosidade;

  if (mostrandoCuriosidade) {
    textoDescricao.textContent = 'Em 2022, realizei o curso de piloto privado no Aeroclube de Ponta Grossa, em Ponta Grossa (PR), um grande sonho. Por questões pessoais, precisei interromper essa jornada, mas continuo guardando com carinho o amor por voar.';
    fotoPerfil.setAttribute('src', fotoCuriosidade);
    fotoPerfil.setAttribute('alt', 'Foto-curiosidade');
    botaoMensagem.textContent = 'Voltar descrição';
  } else {
    textoDescricao.textContent = descricaoOriginal;
    fotoPerfil.setAttribute('src', fotoOriginal);
    fotoPerfil.setAttribute('alt', altOriginal);
    botaoMensagem.textContent = 'Ver curiosidade';
  }
}

botaoMensagem.addEventListener('click', alternarMensagem);