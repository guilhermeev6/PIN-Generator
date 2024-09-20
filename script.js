function a(tamanho) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()`´{}[]~^,.'
    let password = ''

    for(let i = 0; i <= tamanho; i++){
        let randomIndex = Math.round(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return console.log(password)
}

a(10)