import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`${htka} *𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚* ${htki}

╔══════···═════⟕
┃ ${nickname} 
╚════···════⟕

╔══════···═════⟕
┃ *Dᴇsᴄʀɪᴘᴛɪᴏɴ:* 
┃
┃ ${description}
╚════···════⟕

*𝐆𝐫𝐨𝐮𝐩 𝐖𝐚𝐧𝐧𝐁𝐨𝐭𝐳-𝐌𝐃* : _https://chat.whatsapp.com/Bbh5bDDQsWQBxQTaY5tHBJ_
`.trim(), m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i

export default handler