const colors = ["orange", "pink", "blueviolet", "green", "gray"];
// document.body.style.backgroundColor = "red"

function colorChange(yeniRenk){
    document.body.style.backgroundColor = yeniRenk; 
}
const sifirla = document.getElementById("sifirla");
const kutu0 = document.getElementById("renk0");
const kutu1 = document.getElementById("renk1");
const kutu2 = document.getElementById("renk2");
const kutu3 = document.getElementById("renk3");
const kutu4 = document.getElementById("renk4");

sifirla.addEventListener("click", () => colorChange("transparent"))

kutu0.addEventListener("click", () => colorChange("orange"))
kutu1.addEventListener("click", () => colorChange("pink"))
kutu2.addEventListener("click", () => colorChange("blueviolet"))
kutu3.addEventListener("click", () => colorChange("green"))
kutu4.addEventListener("click", () => colorChange("gray"))