
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Bot Commands`)
    .setDescription(`
*** | Prefix bot*** 
***__!__***

 ***| User Commands***
> invite ・ support(supp)・ uptime ・ prefix
> ping ・ invites・avatar ・ se ・ 
> listEmoji ・ user

 ***|Moderation Commands***
> topinvites(tinvites) ・ setnick
> lock ・ unlock ・ ban ・ unban
> clear ・ kick ・ channelinfo
> vkick ・ addrole ・ roleremove
> slowmode ・ invites ・ createchannel
> deletechannel ・ benner ・ count
> deafend ・ undeafend ・ rolebc
> hightRole ・ rooms ・

***| Gif Commands***
> boy gif ・ love gif・girl gif ・ sad gif ・ meme ・ 
> anime

 ***| photo Commnads ***
> pboy ・ pgirl ・ panime 

 ***| Game Commands***
> stone ・ scissors ・ slots ・ rps

 ***| Funny Commands***
> boom ・ hug ・ paper ・ kiss ・ slap

 ***| Music Commands***
> play ・ skip ・ lyrics
> nowplaying ・ skipto ・ stop
> volume ・ nowplaying ・ resume
> shuffle ・ search ・ remove
> queue ・ filter ・ radio ・ loob

 **Links**
[SUPPORT]()  •  [INVITE]()  •  [VOTE]()
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#ff0000")
   message.react("")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};

