const Twit = require('twit');
const randomItem = require('random-item');
const ofensas = require('./ofensas-bobas.js');

const bot = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});

bot.buscaTweet = function (buscado) {
    console.log("chegou aqui?");
    var stream = bot.stream('statuses/filter', {track: buscado})
    stream.on('tweet', function(tweet){
        console.log("tweet encontrado");
        bot.curteTweet(tweet.id_str);
        if (
            (tweet.user.screen_name != 'xingabobo') 
            && (tweet.in_reply_to_screen_name != 'xingabobo')
            && (tweet.in_reply_to_screen_name != null)
        )
        {
            bot.enviaTweet(tweet.in_reply_to_screen_name, tweet.in_reply_to_status_id_str);
        }
        else
        {
            console.log("novo tweet não postado.");
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

bot.criaResposta = function (usuarioPraResponder) {
    // exclui-me de receber ofensas
    if (usuarioPraResponder == 'thidre') {
        return "@" + usuarioPraResponder + " te amo papai!";
    }
    // pega o array de respostas e gera resposta aleatoria
    const ofensa = randomItem(ofensas['inicio-ofensa']).toUpperCase() + " " + randomItem(ofensas['fim-ofensa']).toUpperCase();
    
    // retorna resposta concatenada com usuario
    return "@" + usuarioPraResponder + " " + ofensa + "!!";
};

bot.enviaTweet = function (usuarioPraResponder, tweetPraResponder) {
    // pega o tweet a ser enviado
    const resposta = bot.criaResposta(usuarioPraResponder);

    // configura os parametros
    const params = {
        status: resposta,
        in_reply_to_status_id: tweetPraResponder,
        auto_populate_reply_metadata: true,
    }

    // envia o tweet
    bot.post(
        'statuses/update',
        params,
        function (err, data, response) {
            // console.log(data);
            if (err === undefined) {
                console.log('novo tweet postado: ' + resposta);
            }
            else{
                console.log(err);
            }
        }
    );
};

module.exports = bot;