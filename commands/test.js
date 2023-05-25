const { SlashCommandBuilder } = require('discord.js');

async function test(interaction, client) {
    
    await interaction.reply({ephemeral: true, content: `this a test`})

}

let rawData = {
    name: "test",
    description: "icles",
    execute: test
}



module.exports = {
    data: new SlashCommandBuilder()
    .setName(rawData.name)
    .setDescription(rawData.description)
    ,
    execute: rawData.execute
}

