let num = []
let res = 0
function ordem(a, b) {
    return a - b;
}
function cal(){
    let msg = document.getElementById('msg')
    let numi = document.getElementById('num')
    let lista = document.getElementById('lista')
    let item = document.createElement('option')
    let n1 = Number(numi.value)
    //let res = 0
    
    //num.sort() 
    //let opt = document.getElementById('opt')
    msg.innerHTML = ""
    if (numi.value.length == 0){
        window.alert('Adicione um número')
    } else {
        //msg.innerHTML = `O menor número foi o ${num}`
        //msg.innerHTML = `${num}`
        num.push(n1)
        lista.appendChild(item)
        item.text = `O ${n1} foi adicionado!`
        res += n1
        }
}  
function fin(){
    if (num.length == 0){
        window.alert('Adicione um número antes de finalizar!')
    } else {
    num.sort(ordem)
    msg.innerHTML += `A soma de todos valores é ${res}<br>`
    msg.innerHTML += `A média dos valores é ${res/num.length}<br>`
    msg.innerHTML += `O menor número é o ${num[0]}<br>`
    msg.innerHTML += `O maior número é o ${num[num.length - 1]}<br>`
    msg.innerHTML += `Ao todo temos ${num.length} números<br>`
    }
}