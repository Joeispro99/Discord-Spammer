const Discord = require('discord.js')
const client = new Discord.Client()
var a = 0
lol = new Array("")

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
            // vibe nation: 763970304136445997
        })
    })
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    } else {
        if (receivedMessage.content.startsWith("spam!")) {
            let fullCommand = receivedMessage.content.substr(5)
            let splitCommand = fullCommand.split(" ")
            let primaryCommand = splitCommand[0]
            let arguments = splitCommand.slice(1)
            if (primaryCommand == "spam") {
                for (i = 0; i < arguments; i++) {
                    lol.push("spamlol")
                    console.log(lol.length)
                }
                if (lol.length > 251) {
                    receivedMessage.channel.send("Maximum times to spam cannot exceed 250")
                    lol = new Array("")
                    return
                } else {
                    s = lol.join("\n")
                    receivedMessage.channel.send(s)
                    lol = new Array("")
                    s = ""
                }
            }
            if (primaryCommand == "fbiopenup") {
                const channel = client.channels.cache.get("763970304136445997");
                if (!channel) return console.error("The channel does not exist!");
                channel.join().then(connection => {
                    console.log("Successfully connected.");
                    const dispatcher = connection.play('./fbi.mp3');
                    dispatcher.on("end", end => {voiceChannel.leave()});
                }).catch(e => {
                    console.error(e);
                });
            }
        }
    }
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

client.login("NzYzMDE2MDUwNTEzNDEyMTI3.X3xkEg.dkY_AyakqfB7W5gFytnVqq9czPs")
