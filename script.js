function startSurprise() {
  document.getElementById("options").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  createHearts();
}

function showGallery() {
  document.getElementById("gallery").classList.remove("hidden");
  document.getElementById("message").classList.add("hidden");
}

function showMessage() {
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("gallery").classList.add("hidden");
}

function startSurprise() {
  document.getElementById("options").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5;   // 0.0 to 1.0
  music.play();
}


function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}
