console.log("Loaded instructions...");

document.querySelector("#is").addEventListener("click", is1);
function is1() {
  console.log("is 1");
  document.querySelector("#ishoved").classList.add("my_color");
  document.querySelector("#brunis").style.fill = "green";
}
document.querySelector("#s").addEventListener("click", is2);
function is2() {
  console.log("is 2");
  document.querySelector("#sol").classList.add("my_scale");
}

document.querySelector("#brun").addEventListener("click", is3);
function is3() {
  console.log("is 3");
  document.querySelector("#brunis").classList.add("my_scale");
  document.querySelector("#brunis").style.fill = "green";
}
