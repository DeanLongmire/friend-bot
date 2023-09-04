const { SlashCommandBuilder } = require('discord.js');

const friendlyHelloMessages = [
	"Hello Friend!",
	"Hello *!",
	"Hi *, how are you?",
	"Whadup *",
	"Nice to see you, *"
]

//msgs not for the faint of heart, we like colin I swear
const colinHelloMessages = [
	"Shut the fuck up",
	"ew",
	"Hello, Fuck Face",
	"You literally failed out of Duke",
	"Eat shit",
	"...",
	"No one is talking to you",
	"Remember when you bet on Florida and lost",
	"Oi! Shut yer mouth cunt",
	"Don't you have a video game to be sucking at"
]

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with Hello!'),
	async execute(interaction) {
		let msg;
		let msgIndex;
		if(interaction.user.username == 'cprock5') {
			const meanMsgListLength = colinHelloMessages.length;
			msgIndex = getRandomInt(0,meanMsgListLength);
			msg = colinHelloMessages[msgIndex];
		} else {
			const friendlyMsgListLenght = friendlyHelloMessages.length;
			msgIndex = getRandomInt(0,friendlyMsgListLenght);
			msg = friendlyHelloMessages[msgIndex].replace('*', `${interaction.user}`);
		}
		await interaction.reply(msg);
	},
};