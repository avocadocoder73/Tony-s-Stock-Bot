require('dotenv').config()
const finnhub = require('finnhub');
const BOT_PREFIX = "/"
const Discord = require('discord.js')
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = YOUR API KEY HERE
const finnhubClient = new finnhub.DefaultApi()

 


const client = new Discord.Client({

	intents: [

		"GUILDS",
		"GUILD_MESSAGES",
	]
})

client.on('ready',() =>{

	console.log('Ready!')

})

client.on("messageCreate", message =>{


let stringcontainer = message.content

let separate = stringcontainer.substring(stringcontainer.indexOf("-") + 1)



if(message.content === '-' + separate)
{
	finnhubClient.quote(separate, (error, data, response) => {
	let price = data.c

	if(price != 0){

	
	message.reply("The price of "+ separate +" is $ " + price)
	}
	})

}
})






client.login(process.env.BOT_TOKEN)


	
;
