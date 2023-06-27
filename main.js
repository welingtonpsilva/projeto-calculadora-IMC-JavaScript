let nome = document.getElementById('iname')
let altura = document.getElementById('ialtura')
let peso = document.getElementById('ipeso')
let calcular = document.getElementById('ibutton')
let result = document.getElementById('iresult')

calcular.addEventListener('click', calc)

function calc(){
let pesonumber = Number(peso.value)
let alturanumber = Number(altura.value)
let calcaltura = (alturanumber*alturanumber);

let calc = (pesonumber / calcaltura)
result.innerText = (`${nome.value}! o resultado do seu calculo é ${calc.toFixed(2)}`)
}
