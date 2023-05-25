const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

async function ping(interaction, client) {
    
    await interaction.reply(`*intresting info here*`)

}

let rawData = {
    name: "info",
    description: "sends info msg",
    execute: ping
}



module.exports = {
    data: new SlashCommandBuilder()
    .setName(rawData.name)
    .setDescription(rawData.description)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    ,
    execute: rawData.execute
}

