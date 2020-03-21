const Command = require("./Commande")
//module.exports = permet son utilisation autre part
module.exports = class Play extends Command {
    static match (message) {
        return message.content.startsWith('$play')
    }

    static action (message) {
        //plus valide 
        //on récupère le channel dans l'ensenble (guild) 
        //qui renvoie une collection qu'on cast en tab
        let voiceChannel = message.guild.channels.filter(function(channel) {
            return channel.type === 'voice'
        } ).first()

        //connexion au premier voice channel proposé
        voiceChannel
        //rejoint
        .join()
        //
        .then(function(connection){
            //streamdispacher?
            //lis le fichier?
            connection.playFile('./tuto/song/fade.mp3')
        })
    }
}