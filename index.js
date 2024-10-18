let number1;
function firstnumber(event){
number1=event.target.value;
console.log(number1);


}
let number2;
function secondnumber(event){
    number2 =event.target.value;
    console.log(number2);
    
    
}





// let sum 
function addition(){
    // addition = document.getElementById('add')
    // sum = (Number(number1)+Number(number2));
    resul.innerText =(Number(number1)+Number(number2));
      
}
function substraction(){
    resul.innerText =(Number(number1)-Number(number2));
}
function divison(){
    resul.innerText =(Number(number1)/Number(number2));
}
function multiplication(){
    resul.innerText =(Number(number1)*Number(number2));
}

let resul = document.getElementById('result')