
//========================= Dark/White Mode ==================================
const toggle = document.getElementById("toggle");
const logos = document.querySelectorAll(".logo");
let theme = window.localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
  switchLogo("dark");
} else {
  switchLogo("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
    theme = "light"; 
    switchLogo("light");
  } else {
    window.localStorage.setItem("theme", "dark");
    theme = "dark"; 
    switchLogo("dark");
  }
});

function switchLogo(theme) {
  logos.forEach((logo) => {
    if (theme === "dark") {
      logo.src = "/FreelaFlex/assets/img/logo/logoDark.svg";
    } else {
      logo.src = "/FreelaFlex/assets/img/logo/logoLight.svg";
    }
  });
}

//========================= troca do span por inout Nome do projeto ==================================
const inputNomeProjeto = document.getElementById("txtNomeProjeto");
const spanNomeProjeto = document.getElementById("spnNomeProjeto");
const btnNomeProjeto = document.getElementById("btnNomeProjeto");

if (btnNomeProjeto) {
  btnNomeProjeto.addEventListener("click", function(e) {
      e.preventDefault();
      spanNomeProjeto.classList.remove('show');
      spanNomeProjeto.classList.add('hide');
      inputNomeProjeto.classList.remove('hide');
      inputNomeProjeto.classList.add('show');
  });
}

if (inputNomeProjeto) {
  inputNomeProjeto.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      spanNomeProjeto.innerHTML = inputDescricao.value;
      spanNomeProjeto.classList.remove('hide');
      spanNomeProjeto.classList.add('show');
      inputNomeProjeto.classList.remove('show');
      inputNomeProjeto.classList.add('hide');
    }
  });
}

//========================= troca do span por inout Nome do Descrição ==================================
const btnDescricao = document.getElementById("btnDescricao");
const spanDescricao = document.getElementById("spnDescricao");
const inputDescricao = document.getElementById("txtDescricao");

if (btnDescricao) {
  btnDescricao.addEventListener("click", function(e) {
      e.preventDefault();
      spanDescricao.classList.remove('show');
      spanDescricao.classList.add('hide');
      inputDescricao.classList.remove('hide');
      inputDescricao.classList.add('show');
  });
}

if (inputDescricao) {
  inputDescricao.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      spanDescricao.innerHTML = inputDescricao.value;
      spanDescricao.classList.remove('hide');
      spanDescricao.classList.add('show');
      inputDescricao.classList.remove('show');
      inputDescricao.classList.add('hide');
    }
  });
}

//========================= troca do span por inout Nome do Habilidade ==================================
const btnHabilidades = document.getElementById("btnHabilidades");
const spnHabilidades = document.getElementById("spnHabilidades");
const txtHabilidades = document.getElementById("txtHabilidades");

if (btnHabilidades) {
  btnHabilidades.addEventListener("click", function(e) {
      e.preventDefault();
      spnHabilidades.classList.remove('show');
      spnHabilidades.classList.add('hide');
      txtHabilidades.classList.remove('hide');
      txtHabilidades.classList.add('show');
  });
}

if (txtHabilidades) {
  txtHabilidades.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      spnHabilidades.innerHTML = txtHabilidades.value;
      spnHabilidades.classList.remove('hide');
      spnHabilidades.classList.add('show');
      txtHabilidades.classList.remove('show');
      txtHabilidades.classList.add('hide');
    }
  });
}

//========================= btn filtro ==================================
const btnFiltro = document.getElementById("btnFiltro");
const divFiltro = document.getElementById("filter");

if (btnFiltro) {
  btnFiltro.addEventListener("click", function(e) {
    e.preventDefault();
    if (divFiltro) {
      if (divFiltro.style.display === "none") {
        divFiltro.style.display = "flex";
      } else {
        divFiltro.style.display = "none";
      }
    }
  });
}

//========================= textarea ==================================
function auto_grow(e) {
  e.style.height = "5px";
  e.style.height = (e.scrollHeight) + "px";
}

//========================= window resize ==================================
window.addEventListener("resize", (e) => {
    if (window.innerWidth >= "1200"){
      divFiltro.style.display = "flex";
    }
});
