function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    var hora = 21
    msg.innerHTML= `Agora são ${hora} horas.</br>`
    if (hora >= 0 && hora < 12) {
        msg.innerText += `Bom dia!`
        img.src = '/manhã.png'
        document.body.style.background = '#ADD8E6'

    } else if (hora >= 12 && hora < 18) {
        img.src = '/tarde.png'
        document.body.style.background = '#F4A460'
        msg.innerText += `Boa tarde!`
    } else {
        img.src = '/noite.png'
        document.body.style.background = '#000080'
        msg.innerText += `Boa noite!`
    }
}