const Twit = require('twit');

const bot = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});

bot.buscaTweet = function (buscado) {
    var stream = bot.stream('statuses/filter', {track: buscado})
    stream.on('tweet', function(tweet){
        if(bot.verificarSubString(tweet.text, buscado))
        {
            console.log("tweet encontrado");
            console.log(tweet.text);

            if (!(bot.reverificarSubString(tweet.text))){
                // bot.curteTweet(tweet.id_str);
                console.log("tweet massa encontrado");
            }
        }
    });
};

bot.curteTweet = function (tweetPraCurtir) {
    const params = {
        id: tweetPraCurtir
    }
    // curtir o tweet
    bot.post(
        'favorites/create', params
    )
};

bot.verificarSubString = function (textoTweet, buscado) {
    var retorno = false;
    buscado.forEach(texto => {
        if (textoTweet.indexOf(texto) == 0) {
            retorno = true;
        }
    });
    return retorno;
}

bot.reverificarSubString = function (textoTweet) {
    var substringRuim = [
        "pulo",
        "me jogo",
        "me mato",
        "me enforco",
        "desativo",
        "desisto de mim",
        "desisto de tudo",
    ];
    
    var retorno = false;
    substringRuim.forEach(texto => {
        if (textoTweet.indexOf(texto) != -1) {
            retorno = true;
            console.log("Tweet triste encontrado");
        }
    });
    return retorno;
}

module.exports = bot;