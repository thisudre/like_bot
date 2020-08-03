var app = require('./config/server.js');
const bot = require('./config/bot.js');

//Configura a porta disponível ou a porta 3000
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
//Configura o host disponível ou "0.0.0.0"
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, function () {
    console.log("Aplicação online.");
    buscado = [
        // "um like e",
        // "1 like e",
        // "01 like e",
        // "um fav e",
        // "1 fav e",
        // "01 fav e",
        // "um like aqui",
        // "1 like aqui",
        // "01 like aqui",
        // "um fav aqui",
        // "1 fav aqui",
        // "01 fav aqui",
    ]
    bot.buscaTweet(buscado);
});
