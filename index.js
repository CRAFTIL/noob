const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
const { token, clientID, guildID } = require("./stuff.json");
const fs = require("node:fs");
const path = require("node:path");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
});
client.login(token);

const rest = new REST().setToken(token);

let eventsPath = path.join(__dirname, "events");
let events = fs.readdirSync(eventsPath);

let commandsPath = path.join(__dirname, "commands");
let commands = fs.readdirSync(commandsPath);

for (const eventFile of events) {
  let eventPath = path.join(eventsPath, eventFile);
  let event = require(eventPath);

  client.on(event.name, event.execute);
}

var slashCommandList = []

for (const commandFile of commands) {
  let commandPath = path.join(commandsPath, commandFile);
  let command = require(commandPath);

  slashCommandList.push(command.data)

}

(async() => {
  await rest.put(
    Routes.applicationGuildCommands(clientID, guildID),
    { body: slashCommandList },
  );
  console.log(`Loaded commands ${slashCommandList.map(c => c.name)} >//.//< :3`)
})()

