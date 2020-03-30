function contar(){
    var numini = document.getElementById('numini')
    var numfim = document.getElementById('numfim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var n1 = Number(numini.value)
    var n2 = Number(numfim.value)
    var n3 = Number(passo.value)
    //var num = n1
    if (n3 > 0){
        res.innerHTML =""
        do{
            res.innerHTML += `${n1}&#128073 `
            n1 += n3
            //console.log(`passo ${n1}`)
        } while (n1 <= n2)
        res.innerHTML +='&#127937'
    } else if (n3 < 0){
        do{
            res.innerHTML += `${n1}&#128073 `
            n1 += n3
        } while (n1 >= n2)
        res.innerHTML +='&#127937'
    } else if (n3 ==0 && n2 < 0 && n1 > n2 ) {
        var n3 = 1
        window.alert('Impossível contar! Será usado PASSO = 1')
        do{
            res.innerHTML += `${n1}&#128073 `
            n1 -= n3
        } while (n1 >= n2)
        res.innerHTML +='&#127937'
    } else if (n3 == 0 && n1 <= n2){  
        var n3 = 1
        window.alert('Impossível contar! Será usado PASSO = 1')
        do{
            res.innerHTML += `${n1}&#128073 `
            n1 += n3
        } while (n1 <= n2)
        res.innerHTML +='&#127937'
    } else {
        var n3 = 1
        window.alert('Impossível contar! Será usado PASSO = 1')
        do{
            res.innerHTML += `${n1}&#128073 `
            n1 += n3
        } while (n1 >= n2)
        res.innerHTML +='&#127937'
    }
}


