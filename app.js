
function letra() {
    var artistName = document.querySelector('#artista').value
    var musicName = document.querySelector('#musica').value

    const url = `https://api.lyrics.ovh/v1/${artistName}/${musicName}`
    var resultado = document.querySelector('#resultado')
    var song = []

    fetch(url)
    .then(response => response.json())
    .then(lyric => {
        resultado.innerHTML = lyric.lyrics
        console.log(typeof lyric.lyrics)       
    })

    

}
