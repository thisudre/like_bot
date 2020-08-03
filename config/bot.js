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
    var stream = bot.stream('statuses/filter', {track: buscado})
    stream.on('tweet', function(tweet){
        console.log("tweet encontrado");
        bot.curteTweet(tweet.id_str);
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

module.exports = bot;