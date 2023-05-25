const { SlashCommandBuilder } = require('discord.js');

async function ping(interaction, client) {
    
    await interaction.reply(`Pong! ${interaction.user.username}`)

}

let rawData = {
    name: "ping",
    description: "Plays ping pong :3",
    execute: ping
}



module.exports = {
    data: new SlashCommandBuilder()
    .setName(rawData.name)
    .setDescription(rawData.description)
    ,
    execute: rawData.execute
}

