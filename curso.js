

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#b96506'
    }else if (hora >= 13 && hora < 18){
        // boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#f07101'
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }

    switch(hora){
        case 0:
            msg.innerHTML = `Agora é ${hora} hora.`
            break
        case 1:
            msg.innerHTML = `Agora é ${hora} hora.`
            break
        default:
            break 
    }
}
