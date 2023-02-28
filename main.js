let resultado=''
function mostrar(){
        document.getElementById('display').innerText=resultado
}

function operador(operando){
    switch(operando){
        case '+':
            resultado=parseInt(num1.value) + parseInt(num2.value)
            simbolo.innerText='+'
            break
        case '-':
            resultado=parseInt(num1.value) - parseInt(num2.value)
            simbolo.innerText='-'
            break
        case '*':
            resultado=parseInt(num1.value) * parseInt(num2.value)
            simbolo.innerText='*'
            break
        case '/':
            resultado=parseInt(num1.value) / parseInt(num2.value)
            simbolo.innerText='/'
            break
        case 'ac':
            resultado=''
            simbolo.innerText=''
            num1.value=''
            num2.value=''
            mostrar()
        default:
            resultado=''
            simbolo.innerText=''
            mostrar()
    }
}