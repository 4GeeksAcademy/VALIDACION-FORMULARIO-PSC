import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Alert } from "bootstrap";

window.onload = function () {
  var formulario = document.querySelector("#formulario")
  formulario.addEventListener("submit", validar)
  document.getElementById("alerta").style.display = "none"
} 

function validar(event) {
  event.preventDefault()
  const inputCard = document.getElementById('cardnumber').value
  if (inputCard == "") {
    console.log("el campo card esta vacio");
    document.getElementById("alerta").style.display = "block"

    document.getElementById("cardnumber").style.border = "1px solid rgba(255, 0, 0, 0.17)"
    document.getElementById("cardnumber").style.background = "rgba(255, 0, 0, 0.14)"

  } else {
    document.getElementById("cardnumber").style.border = "1px solid rgba(169, 169, 169, 0.87)"
    document.getElementById("cardnumber").style.background = "rgba(255, 255, 255, 0.14)"
     console.log(inputCard) 
     document.getElementById("alerta").style.display = "none"
    }
     
      const inputCVC = document.getElementById('CVC').value
      if (inputCVC == "") {
        console.log("el campo CVC esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("CVC").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("CVC").style.background = "rgba(255, 0, 0, 0.14)"
      }
      else {
        document.getElementById("CVC").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("CVC").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputCVC) 
      document.getElementById("alerta").style.display = "none"
        }

      const inputamount = document.getElementById('amount').value
      if (inputamount == "") {
        console.log("el campo amount esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("amount").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("amount").style.background = "rgba(255, 0, 0, 0.14)"
      }

      else {
        document.getElementById("amount").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("amount").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputamount) 
      document.getElementById("alerta").style.display = "none"
        }

      const inputfirstname = document.getElementById('firstname').value
      if (inputfirstname == "") {
        console.log("el campo firstname esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("firstname").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("firstname").style.background = "rgba(255, 0, 0, 0.14)"
      }

      else {
        document.getElementById("firstname").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("firstname").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputfirstname) 
      document.getElementById("alerta").style.display = "none"
        }

      const inputlastname = document.getElementById('lastname').value
      if (inputlastname == "") {
        console.log("el campo lastname esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("lastname").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("lastname").style.background = "rgba(255, 0, 0, 0.14)"
      }

      else {
        document.getElementById("lastname").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("lastname").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputlastname) 
      document.getElementById("alerta").style.display = "none"
        }

      const inputcity = document.getElementById('city').value
      if (inputcity == "") {
        console.log("el campo city esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("city").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("city").style.background = "rgba(255, 0, 0, 0.14)"
      }

      else {
        document.getElementById("city").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("city").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputcity) 
      document.getElementById("alerta").style.display = "none"
        }

      const inputstate = document.getElementById('state').value
      if (inputstate == "") {
        console.log("el campo state esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("state").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("state").style.background = "rgba(255, 0, 0, 0.14)"
      }
      else {
        document.getElementById("state").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("state").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputstate) 
      document.getElementById("alerta").style.display = "none"
        }

      const inputpostalcode = document.getElementById('postalcode').value
      if (inputpostalcode == "") {
        console.log("el campo postalcode esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("postalcode").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("postalcode").style.background = "rgba(255, 0, 0, 0.14)"
      }
      else {
        document.getElementById("postalcode").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("postalcode").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(inputpostalcode) 
      document.getElementById("alerta").style.display = "none"
        }

        const exampleFormControlTextarea1 = document.getElementById('exampleFormControlTextarea1').value
      if (exampleFormControlTextarea1 == "") {
        console.log("el campo postalcode esta vacio");
        document.getElementById("alerta").style.display = "block"
        document.getElementById("exampleFormControlTextarea1").style.border = "1px solid rgba(255, 0, 0, 0.17)"
        document.getElementById("exampleFormControlTextarea1").style.background = "rgba(255, 0, 0, 0.14)"
      }
      else {
        document.getElementById("exampleFormControlTextarea1").style.border = "1px solid rgba(169, 169, 169, 0.87)"
        document.getElementById("exampleFormControlTextarea1").style.background = "rgba(255, 255, 255, 0.14)"
         console.log(exampleFormControlTextarea1) 
      document.getElementById("alerta").style.display = "none"
        }
      


    }

/* let formsubmit = document.getElementsByClassName('row')
formsubmit.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log("Formulario Enviado")

  let { cardnumber, CVC, amount, firstname, lastname, city, state, postalcode } = e.target

  console.log(cardnumber.value)
    console.log(CVC.value)
    console.log(amount.value)
    console.log(firstname.value)
    console.log(lastname.value)
    console.log(city.value)
    console.log(state.value)
    console.log(postalcode.value)
}













/*write your code here
const inputCVC = document.getElementById('CVC').value
  if (inputCVC == "") {
    console.log("el campo CVC esta vacio");
  }
  const inputamount = document.getElementById('amount').value
  if (inputamount == "") {
    console.log("el campo amount esta vacio");
  }

  const inputfirstname = document.getElementById('firstname').value
  if (inputfirstname == "") {
    console.log("el campo amount esta vacio");
  }

/*document.addEventListener (FormFull)


/* let submit = document.getElementById ('.cardnumber', '.CVC', '.amount','.firstname','.lastname', '.city', '.state', '.postalcode' ) */
/*document.addEventListener("submit", function() {
*/

/*
const inputCard = document.querySelector('.cardnumber')

inputCard.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let card = document.querySelector('input[type=text]')
  if (card.value == '') {
    card.classList.add('alert')
    error = true
  }
  else {
    card.classList.remove('alert')
    error=false
  }
}

const inputCVC = document.querySelector('.CVC')

inputCVC.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let CVC = document.querySelector('input[type=number]')
  if (CVC.value == '') {
    CVC.classList.add('alert')
    error = true
  }
  else {
    CVC.classList.remove('alert')
    error=false
  }
}

const inputamount = document.querySelector('.amount')

inputamount.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let amount = document.querySelector('input[type=text]')
  if (amount.value == '') {
   amount.classList.add('alert')
    error = true
  }
  else {
    amount.classList.remove('alert')
    error=false
  }
}

const inputfirstname = document.querySelector('.firstname')

inputfirstname.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let firstname = document.querySelector('input[type=text]')
  if (firstname.value == '') {
    firstname.classList.add('alert')
    error = true
  }
  else {
    firstname.classList.remove('alert')
    error=false
  }
}

const inputlastname = document.querySelector('.lastname')

inputlastname.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let lastname = document.querySelector('input[type=text]')
  if (lastname.value == '') {
    lastname.classList.add('alert')
    error = true
  }
  else {
    lastname.classList.remove('alert')
    error=false
  }
}

const inputcity = document.querySelector('.city')

inputcity.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let city = document.querySelector('input[type=text]')
  if (city.value == '') {
    city.classList.add('alert')
    error = true
  }
  else {
    city.classList.remove('alert')
    error=false
  }
}

const inputstate = document.querySelector('.state')

inputstate.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let state = document.querySelector('input[type=text]')
  if (state.value == '') {
    state.classList.add('alert')
    error = true
  }
  else {
    state.classList.remove('alert')
    error=false
  }
}

const inputpostalcode = document.querySelector('.postalcode')

inputpostalcode.addEventListener('submit', (event) => {
  event.preventDefault ()
  
  const error = false

  let postalcode = document.querySelector('input[type=text]')
  if (postalcode.value == '') {
    postalcode.classList.add('alert')
    error = true
  }
  else {
    postalcode.classList.remove('alert')
    error=false
  }
}
*/





/*
function validar (inputCard) {
  if (inputCard == "") { console.log(error)
  }

}

    function AlertForm () {
      const error = getElementsByClass(alert)
    }
    

/*Asignar Evento

inputCard.addEventListener(validar)
inputCVC.addEventListener(validar)
inputamount.addEventListener(validar)
inputfirstname.addEventListener(validar)
inputlastname.addEventListener(validar)
inputcity.addEventListener(validar)
inputstate.addEventListener(validar)
inputpostalcode.addEventListener(validar)

function validar (inputCard) {
  if (inputCard == "") {
  }

}

function AlertForm () {
  const error = getElementsByClass(alert)
  console.log(error)
}




}
)


/* submit.addEventListener('submit', (e) => {
    e.preventDefault()

    let error = false

    let email = document.querySelector('input[type=email]')
    if(email.value == ''){
        email.classList.add('alert')
        error = true
    } else {
        email.classList.remove('alert')
        error = false
    }

    if(!error){
        e.target.submit()
    }
}) */
