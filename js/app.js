const input1 = document.getElementById("votoNumber1");
const input2 = document.getElementById("votoNumber2");
const clear = document.getElementById("clear");
const musicaSrc = document.getElementById("playmusic");

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  let valor1 = "";
  let valor2 = "";

  charKeyBtn.addEventListener("click", function () {
    musicaSrc.src = "./music/key.wav";
    musicaSrc.autoplay = "true";
    const value = charKeyBtn.dataset.value;
    if (input1.value === "") {
      input1.value = value;
    } else if (input2.value === "") {
      input2.value = value;
    }

    let x = input1.value + input2.value;

    if (x === "13") {
      document.getElementById("fotoPresidente").src = "./img/lula.png";
      document.querySelector(".view").style.display = "none";
      document.querySelector(".candidado").style.display = "block";
      clear.addEventListener("click", function () {
        window.location.reload();
      });
    } else if (x === "22") {
      document.getElementById("fotoPresidente").src =
        "./img/jair-bolsonario.png";
      document.getElementById("number").innerText = "22";
      document.getElementById("nomeCompleto").innerText = "Jair Bolsonaro";
      document.getElementById("partido").innerText = "PL";
      document.querySelector(".view").style.display = "none";
      document.querySelector(".candidado").style.display = "block";
      clear.addEventListener("click", function () {
        window.location.reload();
      });
    }
  });
});

//Corrigir
clear.addEventListener("click", function () {
  if (input2.value !== "") {
    input2.value = "";
  } else if (input1.value !== "") {
    input1.value = "";
  }
});

const btnConfirmar = document.getElementById("confirmar");

btnConfirmar.addEventListener("click", function () {
  musicaSrc.src = "./music/key.wav";
  musicaSrc.autoplay = "true";
  if (input1.value === "1" && input2.value === "3") {
    document.querySelector(".candidado").style.display = "none";
    document.querySelector(".caixa-load").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".caixa-load").style.display = "none";
      document.querySelector(".fim").style.display = "flex";
      musicaSrc.src = "./music/confirm.wav";
      musicaSrc.autoplay = "true";
    }, 5000);
  } else if (input1.value === "2" && input2.value === "2") {
    document.querySelector(".candidado").style.display = "none";
    document.querySelector(".caixa-load").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".caixa-load").style.display = "none";
      document.querySelector(".fim").style.display = "flex";
      musicaSrc.src = "./music/confirm.wav";
      musicaSrc.autoplay = "true";
    }, 5000);
  }
});
