var app = require('./config/server.js');
const bot = require('./config/bot.js');

//Configura a porta disponível ou a porta 3000
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
//Configura o host disponível ou "0.0.0.0"
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, function () {
    console.log("Aplicação online.");
    buscado = ["um like", "1 like", "01 like", "um fav", "1 fav", "01 fav"]
    bot.buscaTweet(buscado);
});
