const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password1-el")
let passwordTwoEl = document.getElementById("password2-el")
let lengthEl = document.getElementById("length-el")

function generatePass() {
    if (lengthEl.value < 6 || lengthEl.value >15) {
        alert("Please pick between 6-15")
        return
    }
    passwordOneEl.textContent = ""
    passwordTwoEl.textContent = ""
    for (let i = 0; i < lengthEl.value; i++) {
        let randomOne = Math.floor(Math.random() * characters.length)
        let randomTwo = Math.floor(Math.random() * characters.length)
        passwordOneEl.textContent += characters[randomOne]
        passwordTwoEl.textContent += characters[randomTwo]
        
    }
}
