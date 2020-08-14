const Discord = require("discord.js");
const config = require("./config.json");
const fetch = require("@v0id/fetch");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message){
if(message.author.bot)return;
if(message.content.startsWith(prefix))return;

const commandBody = message.content.slice(prefix.length);
const args = commandBody.split(' ');
const command = args.shift().toLowerCase();

if(command === "ping"){
    const timeTaken = Date.now() - message.createdTimestamp;
    message.channel.send(`kontol! cuma ${timeTaken}ms.`);
}

if(command === "corona"){
    const covid = fetch.get(`https://data.covid19.go.id/public/api/update.json`)
    message.channel
    .send(`jumlah positif = ${covid.jumlah_positif}`)
    .send(`jumlah sembuh = ${covid.jumlah_sembuh}`)
    .send(`jumlah meninggal = ${covid.jumlah_meninggal}`)
}

const nhen = args[0]
const hentai = fetch.get(`https://nhentai.net/api/gallery/${nhen}`)

if(command === `${nhen}`){
    const embed = new Discord.RichEmbed()
    .setTitle(`${hentai.title.pretty}`)
    .setImage(`https://t.nhentai.net/galleries/${n.media_id}/cover.jpg`)

    message.channel.send(embed);
}
});

client.login(config.BOT_TOKEN);