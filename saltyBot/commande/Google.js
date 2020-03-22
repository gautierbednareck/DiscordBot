const Command = require("./Commande")
//module.exports = permet son utilisation autre part
module.exports = class Google extends Command {
    static match (message) {
        return message.content.startsWith('$google')
    }

    static action (message) {
        //on récupére le contenu du message
        let args = message.content.split(' ')
        //supprime le premier element
        args.shift()
        //delete message original
        message.delete()

        //message renvoyé
        message.reply('https://www.google.com/#q='+args.join('%20'))
    }
}