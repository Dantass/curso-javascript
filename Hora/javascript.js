function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var mim = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${mim} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#71c0f9'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        window.document.body.style.background = '#cf5b15'
    } else {
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#0f1a26'
    }
}