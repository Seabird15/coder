let nombre = prompt ("Ingresa tu nombre") 

let pais = prompt("Ingresa tu país")
    alert ("Bienvenidx " + nombre + " de " + pais + " a nuestra tienda!")


    let cardnumber = prompt("Ingresa numero de tarjeta")

    const validator = {
        isValid:(cardnumber) => {
        
          //convertir input, se dividen los numeros ingresados en numeros individuales y se convierte en un Array y se cambia a tipo number
        
          let ingresar= cardnumber.split("").map(Number);
      
          //se invierte el orden del array
          ingresar = ingresar.reverse();
        
          let total = 0;
        
          //multiplicar x2 cada numero en posicion par
          for(let i=0; i< ingresar.length; i++) {
            if (i % 2 !==0) {
              ingresar [i] = ingresar [i] *2;
        
              //resultado, se busca numeros mayores a 9 y se resta 9
        
              if (ingresar [i] >=10) {
                ingresar [i] -= 9;
              
              }
        
            }
        
            //sumar los digitos del array y obtener el total
        
            total += ingresar[i];
        
          }
          
          return total % 10 ===0;
          
        },
        

 }



 if (cardnumber.length <= 12) {
    alert(nombre + ": Ingresa un número con al menos 13 dígitos");
  } else {
    if (validator.isValid(cardnumber)) {
      alert(nombre + ": Tu tarjeta de credito es válida. Su pago ha sido realizado con exito!");
    } else {
      alert("¡Oups! Parece que tu tarjeta no es valida, verifica la información ingresada. No se ha podido procesar el pago");
   }

  }











