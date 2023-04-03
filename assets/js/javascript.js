document.addEventListener("DOMContentLoaded", function() {
    //* Obtener el formulario y sus campos
    let form = document.querySelector("#formulario");
    let nombre = document.querySelector("#input-name");
    let email = document.querySelector("#input-email");
    let mensaje = document.querySelector("#input-mensaje");
  
    function validate() {
      //* retornar verdadero o falso
      //* CORREO ELECTRONICO
      let emailValue = email.value;
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let nombreValue = nombre.value;
      let mensajeValue = mensaje.value;
  
      if(nombreValue.length == 0) {
        document.querySelector("#nameError").innerHTML = "No puede estar vacio el nombre";
        return false;
      }


      if(!emailRegex.test(emailValue)) {
        document.querySelector("#emailError").innerHTML = "Por favor, ingresa un correo electrónico válido";
        return false;
      } 
  
      if(mensajeValue.length == 0) {
        document.querySelector("#mensajeError").innerHTML = "No puede estar vacio el mensaje";
        return false;
      }

      
      return true;
    }
  
    form.addEventListener("submit", function(event) {
      
     
      if(!validate()) {
        event.preventDefault();
        //* impido que se envie el formulario
      } else {
        //* false
        alert('El formulario se envio correctamente');
      }  
  
    })
  
  });


