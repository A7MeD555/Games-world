const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" ^_^ امر");
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
