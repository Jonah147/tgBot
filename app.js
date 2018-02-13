const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const path = require('path');
const token = '501504482:AAFSjF6esZ_QxWja6N-Pradk18WAFETezGM';
const bot = new TelegramBot(token,{ polling: true});
const app = express();

bot.onText(/\/echo(.+)/,(msg,match) => {
	const chatId = msg.chat.id;
	const resp = match[1];
	bot.sendMessage(chatId,resp);

});

bot.onText(/\/greetme/,(msg) => {
	bot.sendMessage(msg.chat.id,'hello dear');
});

bot.onText(/\/options/,(msg) => {
	const chatId = msg.chat.id;
	let options = {
		"reply_markup": {
			"keyboard": [["one","two"],["three"],["four"]]		
		}
	};
	bot.sendMessage(chatId,"welcome",options);
})

bot.on('message',(msg) => {
	const chatId = msg.chat.id;
	var userName = msg.chat.first_name;
	var message = msg.text;
	if(message.toLowerCase() === "four") {		
		bot.sendMessage(chatId,"<b> visit </b> <b>link</b> ",{parse_mode : "HTML"});
	} else {
		bot.setChatTitle(chatId,chatId,msg.message_id);	
	}
});

let port = 1230;
/*
app.get('/',function requestListener(req,res) {
	res.sendFile(path.join(__dirname,'index.html'));
});
*/

app.listen(port,function() {
	console.log(`server running at port ${port}`);
});


