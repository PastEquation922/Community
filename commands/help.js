const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get some help my friend.'),
    async execute(interaction) {
        interaction.reply({ content: 'check bac laetr' })
    }
};