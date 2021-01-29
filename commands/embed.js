const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .addField('YouTube', '[recherche youtube](https://youtube.fr)')
        .addField('Google', '[recherche google](https://google.fr)')
        .addField('Twitch', '[recherche twitch](https://twitch.com)')
        .setAuthor('XXX', 'https://cdn.discordapp.com/attachments/700685496036229180/707582808423530506/Sans_titre-.jpg', 'https://discord.gg/G5UHR6YTmf')
        .setImage('https://cdn.discordapp.com/attachments/733034580214546442/804029704507621386/telechargement.jpg')
        .setThumbnail('https://cdn.discordapp.com/attachments/733034580214546442/804030098818203678/feuille-Cannabis-1-287x300.png')
        .setFooter('el migrant by XXX', 'https://cdn.discordapp.com/attachments/700685496036229180/707582808423530506/Sans_titre-.jpg')
        .setTimestamp()
        .setColor('#E74C3C'))
    },
    name: 'embed'
}