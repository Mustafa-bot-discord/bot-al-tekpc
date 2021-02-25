const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "KRALBOT",
              icon_url: "https://www.technopat.net/sosyal/eklenti/asus-strix-gtx1060-o6g-gaming-aura-gif.653621/"
            },
			    "thumbnail": {
				 "url": "https://www.technopat.net/sosyal/eklenti/asus-strix-gtx1060-o6g-gaming-aura-gif.653621/"
			},
            title: "KRAL BOTU DAVET ET ?",
            url: "https://discord.com/oauth2/authorize?client_id=799365535825395743&scope=bot&permissions=8",
            description: "Daha yeni üretilmiş BETA sürümlü(0.0.1) kolay bottur .",
            fields: [
				{
                name: "DÜŞÜK PELFORMANS(UCUZA)",
                icon_url: "https://galeri7.uludagsozluk.com/234/ekran-karti_458028.gif",
				inline: true,
                value: "+**MSİ R7 240 2GB VRAM VEYA NVİDA GİGABYTE 650 Tİ 2GB**\n+**(1X4)4GB RAM**\n+**ANAKART GİGABYTE G41 COMBO**\n+****\n+**İŞEMCİ:İNTEL PENTİMİUM E6500**\n+**450WATT PSU**\n"
			  },
				{
                name: "VERİMLİLİK(OYUN İÇİN DEĞİLDİR MALİYETLİDİR)",
                icon_url:"https://www.teknotalk.com/wp-content/uploads/2017/09/02.gif",
				inline: true,
                value: "+**İŞLEMCİ İ3 10. NESİL 3.6GHz.**\n**EKRAN KARTI:GİGABYTE GEFORCE 4GB VRAM 1660 SUPER **\n**Anakart ASUS Prime H410M K 2933 MHz.**\n**RAM :Corsair Vengeance 8 GB 3000MHz RAM.**\n**depolama :240 GB SSD.**\n**güç kaynağı :600watt psu önerilir**\n**kasa sana kalmış**\n",
              },
			  {
                name: "ORTA SEVİYE OYUN BİLGİSAYARI (MALİYETLİDİR)",
				inline: true,
                value: "**RAM 16GB **\n***ANAKART GİGABYTE AUROS GIGABYTE · AORUS Gaming · ATX · LGA1151 Yuvası***\n+**İ5 9600K**\n+**700 WATT PSU**\n+**1TB HDD**\n+**320 M.2 SSD**\n+**sıvı soğutma önerisi**\n**KASA SANA KALMIŞ**\n"
              },
              {
                name: "AŞIRI YÜKSEK PELFORMANS (ANİMASYONCULUK VE OYUN İÇİN EN İYİSİ)",
				inline: true,
                value: "+** ANAKART :GIGABYTE · AORUS Gaming · ATX · LGA1151 Yuvası**\n+**İ9 9900K**\n+**(4X8) 32 GB RAM**\n+**NVİDA GİGABYTE GEFORCE RTX 3060 Tİ**\n+**1000WATT PSU (PARÇALAR AŞIRI GÜÇ TÜKETİMİ VARDIR)**\n+**(ÖNERİLEN : SPEC OMEGA RGB BLUİD)**\n"
              },
                name: "İLK Sürüm",
                value: "0.0.1 BETA"
              };
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/rOnDgM.png",
              text: "© KRALBOT"
            }
          }
        });
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgisayar','system','sistemöner', 'sistemyopla', 'sistem-yap'],
  permLevel: 0
};

exports.help = {
  name: 'bilgisayar toplama',
  description: 'PC TOPLAMAYA YADA ALMAYA YARDIM EDER.',
  usage: 'system'
};
