const display = document.getElementById("display")


function appendToDisplay (input){
  display.value+=input
}


function clearDisplay (){
display.value='';
}


function calculate (){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }

}















































// const mybutton=document.getElementById("mybutton")


// mybutton.addEventListener("click", (event) =>{
//     let name=window.prompt("Enter your name fist")
//     window.alert(`Hello soccer. ${name}`)
//     window.alert(`Supp ${name}`)
//     window.alert(`Are you mad at me ${name}`)

// }
// )