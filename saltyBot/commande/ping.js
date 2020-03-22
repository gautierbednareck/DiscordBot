const Command = require("./Commande")
//module.exports = permet son utilisation autre part
module.exports = class Ping extends Command {
    static match (message) {
        return message.content.startsWith('$ping')
    }

    static action (message) {
        //message renvoyé
        message.reply('ping')
    }
}