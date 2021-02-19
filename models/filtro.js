const filtro = {};
filtro.expressoesAFiltrar = [
    'pulo',
    'me jogo',
    'me mato',
    'morro',
    'me enforco',
    'me churrasco',
    'se churrascar',
    'se churrasca',
    'desativo',
    'desisto de mim',
    'desisto de tudo',
    'desisto da minha vida',
    'atiro-me',
    'suicidio',
    'suicídio',
    'suicido',
    'deleto minha conta',
    'cometo',
    'se mata',
    'se joga',
    'm4t0',
    '****',
    'veneno',
    'me m',
    'me j',
    'me ****',
    '** ****',
    'me matar',
    'me *****',
    '** *****'
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