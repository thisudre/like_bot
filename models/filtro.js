const filtro = {};
filtro.expressoesAFiltrar = [
    "pulo",
    "me jogo",
    "me mato",
    "morro",
    "me enforco",
    "desativo",
    "desisto de mim",
    "desisto de tudo",
    "desisto da minha vida",
    "atiro-me",
    "suicidio",
    "suicídio",
    "suicido",
    "deleto minha conta",
    "cometo",
    "m4t0",
    "****",
    "veneno",
    "me m" 
]

filtro.temExpressaoRuim = (textoTweet) => {
    const textoTweetMaiusculo = textoTweet.toUpperCase();
    retorno = false;
    filtro.expressoesAFiltrar.forEach(expressao => {
        if (textoTweetMaiusculo.indexOf(expressao.toUpperCase()) != -1) retorno = true;
    })
    return retorno;
}

module.exports = filtro;