const conteinerEpisode = document.querySelector('.episodios-container');


// numEpisode - Significa a quantidade de Ep do Anime
var numEpisode = 13;
var allLinksEpisode = [];

const generationLinks = () => {
	for(var i = 1; i <= numEpisode; i++){
		var useNum = i
		if(i < 10){
			useNum = `0${i}`
		}
		allLinksEpisode.push(
			`https://betteranime.net/anime/dublado/bastard-ankoku-no-hakaishin-ona-dublado/episodio-${useNum}`
		)
		// document.write(useNum + '<br>')
	}
}
generationLinks()

allLinksEpisode.forEach((episode, i) => {
    conteinerEpisode.innerHTML += `<a> href="${episode}" target="_blank" Episódio ${i}</a>`
})
