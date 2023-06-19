var toggleBtn = document.getElementById("toggle-btnfn");
var navList = document.getElementById("div-ul");
var browse = document.getElementById("browsefn");
var botonabririmg = document.getElementById("botonabririmg");
var botoncerrarimg = document.getElementById("botoncerrarimg");

toggleBtn.addEventListener("click", function() {
  navList.classList.toggle("active");
  browse.classList.toggle("hidden");
  botonabririmg.classList.toggle("hidden");
  botoncerrarimg.classList.toggle("hidden");
});