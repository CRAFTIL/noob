const path = require("node:path")

let commandsPath = path.join(__dirname, "../", "commands");

function interactionCreate(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    let commandFile = require(path.join(commandsPath, interaction.commandName))
    if(!commandFile) return console.log(`[WARNING] the command ${interaction.commandName} has no file!! (wtf how did this happen)`)

    commandFile.execute(interaction, client)
}

module.exports = {
    name: "interactionCreate",
    execute: interactionCreate
}