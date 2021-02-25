const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (client, message, args) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    var Jimp = require("jimp");
    const Discord = require('discord.js');
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://cdn.starlist.pro/brawler/Crow.png?v=1");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
        img    = imgs[0];
    moldura.resize(400,400);
    img.resize(720, 615)
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (!err)
        message.channel.send(new Discord.Attachment(buffer));
    });
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cr','crow','küçükkafalı'],
  permLevel: 0
};

exports.help = {
  name: 'CROWW wow ',
  description: 'size crow yapar',
  usage: 'balıkkafa'
};
