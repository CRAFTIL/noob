var url = "https://meme-api.com/gimme/shitposting"

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const axios = require("axios")

async function shitpost(interaction, client) {
    
    let memeobj = await axios.get(url)
    let title = memeobj.data.title
    let meme = memeobj.data.url
    let urle = memeobj.data.postLink

    let embed = new EmbedBuilder()
    .setTitle(title)
    .setColor("Random")
    .setImage(meme)
    .setFooter({text: urle})

    await interaction.reply({embeds: [embed]})

}

let rawData = {
    name: "shitpost",
    description: "random post from r/shitposting",
    execute: shitpost
}



module.exports = {
    data: new SlashCommandBuilder()
    .setName(rawData.name)
    .setDescription(rawData.description)
    ,
    execute: rawData.execute
}

