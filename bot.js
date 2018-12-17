const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => {
  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Games WorlD`);
});




client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });
					
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', 'ايدي الروم').setName("W");
client.channels.find('id', 'ايدي الروم').setName("We");
client.channels.find('id', 'ايدي الروم').setName("Wel");
client.channels.find('id', 'ايدي الروم').setName("Welc");
client.channels.find('id', 'ايدي الروم').setName("Welco");
client.channels.find('id', 'ايدي الروم').setName("Welcom");
client.channels.find('id', 'ايدي الروم').setName("Welcome");
client.channels.find('id', 'ايدي الروم').setName("Welcome T");
client.channels.find('id', 'ايدي الروم').setName("Welcome To");
client.channels.find('id', 'ايدي الروم').setName("Welcome To G");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Ga");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Gam");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Game");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Games");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Games Wo");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Games Wor");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Games Worl");
client.channels.find('id', 'ايدي الروم').setName("Welcome To Games World");
  }, 3000);
});






// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
