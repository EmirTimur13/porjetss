

const boite = document.querySelector(".box");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const reponse = document.querySelector("p");

button1.addEventListener("click", () => {
    button2.classList.remove("sazlik");
    boite.classList.add("sazlik");
    button1.classList.toggle("sazlik");
    reponse.style.background = "green";
})
button2.addEventListener("click", () => {

    button1.classList.remove("sazlik");
    boite.classList.add("sazlik");
    button2.classList.toggle("sazlik");
    reponse.style.background = "red";
})

//-----------------------------------------------------------------------
const mousemove = document.querySelector(".mousemove")

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top= e.pageY + "px";
    
})










