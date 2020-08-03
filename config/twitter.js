const Twit = require('twit');
const randomItem = require('random-item');
const ofensas = require('./ofensas-bobas');

function geraOfensa() {
    return randomItem(ofensas['inicio-ofensa']).toUpperCase() + " " + randomItem(ofensas['fim-ofensa']).toUpperCase() + "!!!";
}

const twitter = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
});

twitter.postaTweet = function (tweetToReply) {
    var user = '@' + tweetToReply.in_reply_to_screen_name;
    var tweet = user + " " + geraOfensa();
    if (user == '@thidre') {
        tweet = user + " te amo papai!!"
    }
    var params = {
        status: tweet,
        in_reply_to_status_id: tweetToReply.in_reply_to_status_id_str,
        auto_populate_reply_metadata: true,
    }

    twitter.post(
        'statuses/update',
        params,
        function (err, data, response) {
            // console.log(data);
            if (err === undefined) {
                console.log('tweet postado: ' + tweet);
            }
            else{
                console.log(err);
            }
        }
    );
}

module.exports = twitter;