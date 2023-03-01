let resultado=''
let num=''
const num1=document.getElementById('num1')
const display=document.getElementById('display')
function mostrar(){
        switch(simbolo.innerText){
            case '+':
               resultado=num+parseInt(num1.value)
               console.log(resultado)
                break
            case '-':
                resultado=num-parseInt(num1.value)
                break
            case '*':
                resultado=num*parseInt(num1.value)
                break
            case '/':
                resultado=num/parseInt(num1.value)
                break 
        }
        display.innerText=resultado
        simbolo.innerText=''
        num1.value=''
        num=''

}

function operador(operando){
    if(num==''){
        num=parseInt(num1.value)
        num1.value=''
        switch(operando){
            case '+':
                simbolo.innerText='+'
                break
            case '-':
                simbolo.innerText='-'
                break
            case '*':
                simbolo.innerText='*'
                break
            case '/':
                simbolo.innerText='/'
                break
        }
    }else{
        switch(operando){
            case '+':
                simbolo.innerText='+'
                break
            case '-':
                simbolo.innerText='-'
                break
            case '*':
                simbolo.innerText='*'
                break
            case '/':
                simbolo.innerText='/'
                break
        }
    }
}

function limpiar(){
        resultado=''
        simbolo.innerText=''
        num1.value=''
        num=''
        display.innerText=''
}