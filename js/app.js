const boton=document.querySelector("#addText");
const myDiv=document.querySelector("#miDiv");

boton.addEventListener("click", function(){
    console.log("Se realiza un click");
    const nuevoParrafo=document.createElement("p");
    nuevoParrafo.textContent="BootcampJavaFullStack";

    myDiv.append(nuevoParrafo);

    myDiv.classList.add("bg-success","p-3");
})