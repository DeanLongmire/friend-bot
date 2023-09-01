const { SlashCommandBuilder } = require('discord.js');

const friendlyHelloMessages = [
	"Hello Friend!",
	"Hello *!",
	"Hi *, how are you?",
	"Whadup *",
	"Nice to see you, *"
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

		} else {
			const friendlyMsgListLenght = friendlyHelloMessages.length;
			msgIndex = getRandomInt(0,friendlyMsgListLenght);
			msg = friendlyHelloMessages[msgIndex].replace(interaction.user.username);
		}
		await interaction.reply(msg);
	},
};