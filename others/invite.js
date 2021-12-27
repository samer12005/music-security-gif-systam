const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "invite",
  aliases: ["Invite","i","I","Inv","inv","addbot","add"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage("") 
    .setTitle(`Invite`)
    .setDescription(`
[click here]()
`)

  
   .setColor("RANDOM");
   message.react("")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
