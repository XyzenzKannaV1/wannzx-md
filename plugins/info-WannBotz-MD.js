/*import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  
    
    conn.sendButtonDoc(text, wm, 'ᴡᴇʟᴄᴏᴍᴇ', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: '≪ ᴄʟɪᴄᴋ ʜᴇʀᴇ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/52866b574c930d17f0c1c.jpg")).buffer(),
    sourceUrl: sgc
     }}
  })*/
  
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


let str = `
${wm2}
`

conn.sendButtonDoc(m.chat, str, botdate,'⫷ ʙᴀᴄᴋ ⫸','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: '≪ ᴄʟɪᴄᴋ ʜᴇʀᴇ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/7d08ae6675cce5dc71734.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['group-wannbotz-md-official']

handler.tags = ['info']

handler.command = /^wannbotz-md|gcwann$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 3

export default handler