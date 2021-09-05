function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var mile = data.getUTCMilliseconds()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos <br> ${segundos} segundos e ${mile} milisegundos..`
    if (hora >= 0 && hora < 12) {      
        img.src  = "morning.jpg"
        document.body.style.background = '#E0BF4E'
        
    }else if (hora >= 12 && hora < 18) {        
        img.src = "midday.jpg"
        document.body.style.background = '#ECDA3C'
    }else {        
        img.src = "evening.jpg"
        document.body.style.background = '#363732'
    }
}