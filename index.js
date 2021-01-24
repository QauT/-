var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "حياكم الله بسيرفري بالدسكورد",
assets : {
large_image : "discord",
large_text : "Discord" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Youtube" , url : "https://www.youtube.com/channel/UCd96jhKZLyKqX-GO0A4FVOw"},{label : "Discord",url : "https://discord.gg/WeHBqKP2ax"}]
}
})
})
client.login({ clientId : "801217913850691614" }).catch(console.error);