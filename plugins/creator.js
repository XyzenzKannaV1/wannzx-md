let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let tag = `@${m.sender.split('@')[0]}`
 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ใ ๐๐๐ง๐ง๐ณ๐ฑ-๐๐ ใ;;;\nใ ๐๐๐ง๐ง๐ณ๐ฑ-๐๐ ใ\nORG:ใ ๐๐๐ง๐ง๐ณ๐ฑ-๐๐ ใ\nTITLE:\nitem1.TEL;waid=6281265970249:+628 12-6597-0249\nitem1.X-ABLabel:ใ ๐๐๐ง๐ง๐ณ๐ฑ-๐๐ ใ\nX-WA-BIZ-DESCRIPTION:${htjava} ๐ผ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐ ๐ข๐ ๐๐๐๐๐"๐ฟ\nX-WA-BIZ-NAME:ใ ๐๐๐ง๐ง๐ณ๐ฑ-๐๐ ใ\nEND:VCARD`
//------- NOMOR
 const pp = fs.readFileSync('./media/own.jpg')
  let nowner1 = `${nomorown1.split`@`[0]}@s.whatsapp.net`
  let nowner2 = `${nomorown2.split`@`[0]}@s.whatsapp.net`
let teksnomor = (
`${htka} *Mส Oแดกษดแดส* ${htki}

โฃโฎ *${nameown1}* โฏโข
โฌ @${nomorown1.split`@`[0]} โญ
โ
โฃโฎ *${nameown2}* โฏโข
โฌ @${nomorown2.split`@`[0]} โญ
โ`
)
//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `โโง  Nama : Swift Developer
โโง  Nama RL : Swift
โโง  Gender : Pria
โโง  Agama : Islam
โโง  Tanggal lahir : 00 - 00 - 0000
โโง  Umur : 0000000000000
โโง  Kelas : 00
โโง  Hobby : ๐ผ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐
โโง  Sifat : ASIK,BAIK,RAMAH
โโง  Tinggal : Indonesia, Sumatera Utara
โโโโโโโโโโโโโยทโข
`
let ppown2 = await conn.profilePictureUrl(nomorown2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio2 = `โโง  Nama : Siesta
โโง  Nama RL : Siesta
โโง  Gender : Wanita
โโง  Agama : YTTA
โโง  Tanggal lahir : 00 - 00 - 0000
โโง  Umur : 00
โโง  Kelas : 00
โโง  Hobby : Banyak
โโง  Sifat : ASIK,BAIK,RAMAH
โโง  Tinggal : Indonesia, Bengkulu
โโโโโโโโโโโโโยทโข
`

  let tek = `${htka} *Nแดแดแด* ${htki}

๐ ๐พ๐?๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐
๐ ๐พ๐?๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐
๐ ๐บ๐๐๐ ๐๐๐๐๐ ๐๐,๐๐๐๐๐
๐ ๐ด๐๐๐๐๐๐ข๐ ๐๐๐๐๐๐ ๐ข๐๐
๐ ๐ฒ๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐/๐๐๐๐๐
`
const sections = 
[{
title: `โง Oแดสแดส โง`,
rows: [
{title: " Kontak", rowId: ".owner kontak"},
{title: " Nomor", rowId: ".owner nomor"},
{title: " Biodata Owner1", rowId: ".owner bio"},
{title: " Biodata Owner2", rowId: ".owner bio2"},
{title: " Script", rowId: ".sc"},
]}, {
title: `โฌ Sแดแดแดแดสแด Mแด โฌ`,
rows: [
{title: " Donasi", rowId: ".owner nomor"},
{title: " Sewa", rowId: ".sewa"},
{title: " Buy Premium", rowId: ".premium"},
]},]
const listMessage = {
  text: tek,
  footer: wm,
  title: null,
  buttonText: "โซท แดสษชแดแด โซธ",
  sections
}
  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {


        case 'kontak': 
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        break
          case 'nomor':
         /conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nomorown1] }})*/
 / conn.sendButton(m.chat, teksnomor, null, pp, [
                ['โซท sแดแดกแด สแดแด โซธ', `${usedPrefix}sewa`],
                ['โซท แดแดษดแด โซธ', `${usedPrefix}menu`]
            ], m, { contextInfo: { mentionedJid: [nomorown1] }})
 conn.send2ButtonImg(m.chat, fs.readFileSync('./media/own.jpg').buffer, teksnomor, `Halo ${tag}\nIแดแด Oแดกษดแดส Kแด\n` + botdate, `โซท sแดแดกแด สแดแด โซธ`, `.sewa`, 'โซท แดแดษดแด โซธ', `.menu`, ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/wannzx_133',
    mediaType: 2, 
    description: sgc,
    title: "Join Sini Juga Cuy!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

   conn.sendButton(m.chat, 'โโเผบ *๐ฑ๐๐๐๐๐๐ ๐พ๐?๐๐๐1* เผป', teksbio, ppown, [
                ['โซท sแดแดกแด สแดแด โซธ', `${usedPrefix}sewa`],
                ['โซท แดแดษดแด โซธ', `${usedPrefix}menu`]
            ], m)
            break
                        case 'bio2':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "๐ท Instagram", nomorown, '๐น Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, 'โโเผบ *๐ฑ๐๐๐ณ๐๐๐ ๐พ๐?๐๐๐2* เผป', teksbio2, ppown2, [
                ['โซท sแดแดกแด สแดแด โซธ', `${usedPrefix}sewa`],
                ['โซท แดแดษดแด โซธ', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
           return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โซท แดแดษดแด โซธ`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler
