//chargemnt de l'api discord install:npm install --save discord.js
const Discord = require('discord.js')
//librairie que l'on vient de crée
const Google = require('./commande/google')
const Ping = require('./commande/ping')
//client (base)
const bot = new Discord.Client()

//token à enlever de github
//connexion 
bot.login('NjkwMTMxMzM0MjAyNTIzNjc1.XnM9Dg.cb2qPXChbGRQ4TPI8_Y2VLQZsCA')

//change l'avatar quand il se connecte
//attention ready pas documenté
bot.on('ready', function() {
    //change le l'image avec une prommesse
    bot.user.setAvatar('./tuto/img/Tortue.png') //si ok .then(()=>console.log('Tortue power'))
    //erreur dans la console
    .catch(console.error)

    //annontation 
    bot.user.setActivity('Tuto ma gueule').catch(console.error)
})

//permet de renvoyer un 'pong' si on fait la commande $ping
bot.on('message', function (message) {
    /*if (Google.match(message)) {
        return Google.action(message)
    } 
    //onremplace par */
    let CommandUse = Google.parse(message) || Ping.parse(message)

    //renvoi le contenu du message avec le pseudo
    /*if (message.content === '$ping'){
        message.reply('pong')
    }*/
    //sans le pseudo
    if (message.content === '$pong'){
        message.channel.send('ping')
    }

    if (message.content === '$courses'){
        message.reply('Ca va le faire, courage!')
    }
})

bot.on('guildMemberAdd',function (member){
    //message d'acceuil
    member.createDM().then (function(channel){
        //on le renvoie comme il pourra être intercépter par le catch
        return channel.send('bienvenu ' + member.displayName)
    })
}) 