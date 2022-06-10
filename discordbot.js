require('dotenv').config()

const finnhub = require('finnhub');

const BOT_PREFIX = "/"



const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cah7062ad3i2d29fju3g"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote("GOTU", (error, data, response) => {
  
  
var price = data.c

const alrt = "\d"

const GOTU_COMMAND = "gotu"

const Discord = require('discord.js')

const client = new Discord.Client({

    intents: ["GUILDS", "GUILD_MESSAGES"]
    
})


client.on('ready', () => {

    console.log('The bot is ready');
})

client.on("message", msg => {

    if(msg.content === "-gotu")
        msg.channel.send({embeds: ["The price of Gaotu Techedu is $" + price]});
      
    

       

        

        
});


client.login(process.env.BOT_TOKEN)

});