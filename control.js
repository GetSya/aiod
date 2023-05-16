/**
 * Very Thanks To Dika Ardnt.
 * Amirul
 * Contact Me on wa.me/6285849261085
 * Original https://github.com/DikaArdnt
 * Remake : Pebri
 */
 
require('@fnc')
require('module-alias/register')
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')

const fs = require('fs')
const util = require('util')
const path = require('path')
const yts = require("yt-search");
const dl = require('@bochilteam/scraper');
const JoApi = require('@phaticusthiccy/open-apis')
const axios = require('axios')
const cheerio = require('cheerio')
const rmvbg = require('removebg-wrapper')
const ms = require("ms")
const moment = require("moment-timezone");
const { color } = require('./lib/color.js')
const { pinterest } = require("./lib/pinterest.js")
const { webp2mp4File } = require("./lib/cv.js")
const { upload } = require("./lib/uploads.js")
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game.js");
const { TiktokDownloader } = require("./lib/scraper/tiktokdl.js")
const { twitter } = require("./lib/scraper/twitter.js")
const { yta } = require('./lib/yta.js')
const { exec, spawn, execSync } = require("child_process")
const _prem = require("./lib/premium");


// Game
let tebakgambar = []
let tebakkata = []
let siapakahaku = []

/*const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
	apiKey: `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`,
});
const openai = new OpenAIApi(configuration);*/
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, otpkode, makeid, getRandom, getGroupAdmins } = require('./lib/function')
const { fromStream } = require('file-type')


/// DATABASE
let antilink = JSON.parse(fs.readFileSync('./assets/db/antilink.json'));
let premium = JSON.parse(fs.readFileSync('./assets/db/premium.json'));

module.exports = bob = async (bob, m, chatUpdate, store) => {
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const content = JSON.stringify(m.message)
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const CmD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bob.decodeJid(bob.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        const isMedia = /image|video|sticker|audio/.test(mime)

        const chats = m.type === "conversation" && m.message.conversation ? m.message.conversation : m.type === "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : m.type === "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : m.type === "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : m.type === "buttonsResponseMessage" && quotedMsg.fromMe && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : 
        m.type === "templateButtonReplyMessage" && quotedMsg.fromMe && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.type === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId : m.type === "listResponseMessage" && quotedMsg.fromMe && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : "";

        // Group
        const groupMetadata = m.isGroup ? await bob.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = groupAdmins.includes(m.sender)
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false

        //Extensi Media Message
        const isImage = (m.mtype == 'imageMessage')
		const isVideo = (m.mtype == 'videoMessage')
		const isSticker = (m.mtype == 'stickerMessage')
		const isAudio = (m.mtype == 'audioMessage')
		const isDocument = (m.mtype == 'documentMessage')
		const isQuotedMsg = (m.mtype == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
    
        //Lain Lain
        const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)


        // Public & Self
        if (!bob.public) {
            if (!m.key.fromMe) return
        }

        //** cmd
        const CmDPlugins = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null

        //** plugins
        for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.CmD && plugin.CmD.includes(CmDPlugins)) {
                let turn = plugin.CmD instanceof Array ?
                    plugin.CmD.includes(CmDPlugins) :
                    plugin.CmD instanceof String ?
                    plugin.CmD == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, bob, quoted, pushname, {
                    args,
                    CmD,
                    text,
                    prefix,
                    command
                })
                } catch (e) {
                   reply(util.format(`*(⁠☉⁠｡⁠☉⁠)!* Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                }
                console.log('pesan melalui plugins sistem')
            }
        }

        // function
        async function instagram(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }
          
        const reply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: m})
		}
        const sendbut = (jid, text, pref, textbut, footer) => {
			let buttons = [{ buttonId: pref, buttonText: { displayText: textbut }, type: 1 }]
            let buttonMessage = {text: text, footer: footer, buttons: buttons, headerType: 2 }
            bob.sendMessage(jid, buttonMessage, { quoted: m })
        }
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function ngetag(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = bob.sendMessage(m.chat, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = bob.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}
        const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return bob.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}

        async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
        //Akhir
        const cheerio = require("cheerio")
        const axios = require("axios")

        async function capcut() {
        var $ = await cheerio.load(await (await axios(arguments[0])).data);
        return {
            nama: $("img").attr("alt"),
            used: $("b").text().replace($("img").attr("alt"), ""),
            thumbnail: $("img").attr("src"),
            video: $("video").attr("src"),
        };
        }



        const jimp_1 = require('jimp')
        async function pepe(media) {
        const jimp = await jimp_1.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
        }
        }


        // Premium
        _prem.expiredCheck(bob, premium)
        
         if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))


let yutu = `https://youtu${m.text.slice(13)}`

if (m.text.includes(yutu)) {
    var url = yutu
    var yt = await dl.youtubedl(url).catch(async () => await  dl.youtubedl(url))
    var dl_url = await yt.audio['128kbps'].download()
    bob.sendMessage(m.chat, {document: {url: dl_url}, fileName: yt.title + `.mp3`, mimetype: 'audio/mp4', caption: yt.title}, {quoted: m})
}
let tt = `https://vt.tiktok${m.text.slice(17)}`

if (m.text.includes(tt)) {
    var url = tt
    dl.savefrom(url).then ( data => {
        reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
        bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
    })
}
let tt2 = `https://www.tiktok.com/${m.text.slice(23)}`

if (m.text.includes(tt2)) {
    var url = tt2
    dl.savefrom(url).then ( data => {
    reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
        bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
    })
}
let tt3 = `https://vm.tiktok${m.text.slice(17)}`

if (m.text.includes(tt3)) {
    var url = tt3
    dl.savefrom(url).then ( data => {
    reply(`*[ TIKTOK ]*\n\nTitle : ${data[0].meta.title}\nDurasi : ${data[0].meta.duration}\n\n_Wait A Minute._`)
        bob.sendMessage(m.chat, {video: {url: data[0].url[0].url}, caption: data[0].meta.title})
    })
}
let fbdl = `https://www.facebook.com/${m.text.slice(25)}`

if (m.text.includes(fbdl)) {
    var url = fbdl
    dl.savefrom(url).then ( data => {
        reply(`*[ FACEBOOK ]*\n\nTitle : ${ data[0].meta.title}\nSize : HD\n\n_Wait A Minute._`)
        bob.sendMessage(m.chat, {video: {url: data[0].hd.url}, caption: data[0].meta.title})
    })
}
let igdl = `https://www.instagram.com/${m.text.slice(26)}`

if (m.text.includes(igdl)) {
    var url = igdl
    reply(`*[ INSTAGRAM ]*\n\n_Wait A Minute._`)
    instagram(url).then( data => {
        for ( let i of data ) {
        if (i.type === "video") {
        bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
        } else if (i.type === "image") {
        bob.sendMessage(m.chat, { caption: `Sukses, Follow Instagram : @arsrfii`, image: { url: i.url }})
        }
        }
        }).catch(() => reply(`Eror mas. P in owner coba`))
    }

let twt = `https://twitter.com/${m.text.slice(20)}`

if (m.text.includes(twt)) {
    var url = twt
    dl.savefrom(url).then( data => {
        reply(`*[ TWITTER ]*\n\nTitle : ${data[0].meta.title}\n\n_Wait A Minute._`)
        if (data[0].url[1].type === "mp4") {
        bob.sendMessage(m.chat, {video: {url: data[0].url[1].url}})
        } else if (data[0].url[1].type === "jpg") {
        bob.sendMessage(m.chat, {image: { url: data[0].url[1].url }})
        }
        }).catch(() => reply(`Eror mas. P in owner coba`))
    }

let cp = `https://www.capcut.com/${m.text.slice(23)}`

if (m.text.includes(cp)) {
    var url = cp
   capcut(url).then ( data => {
    reply(`*[ CAPCUT ]*\n\nUsername : ${data.nama}\nUsed : ${data.used} Pemakai\n\n_Wait A Minute._`)
    bob.sendMessage(m.chat, {video: {url: data.video}, caption: `${data.used} Telah Di Pakai`})
   } )
    }

let mediafired = `https://www.mediafire.com/${m.text.slice(26)}`

if (m.text.includes(mediafired)) {
    var url = mediafired
   dl.mediafiredl(url).then ( data => {
    reply(`*[ MEDIAFIRE ]*\n\nName : ${data.filename}\nSize : ${data.filesizeH}\nFormat : ${data.ext}\nFileType :  ${data.filetype}\n\n_Wait A Minute._`)
    bob.sendMessage(m.chat, {document: {url: data.url}, fileName: data.filename, mimetype: 'zip', caption: data.filename}, {quoted: m})
} )
    }

if (isImage) {
    if (/image/.test(mime)) {
        let media = await bob.downloadMediaMessage(qmsg)
        let encmedia = await bob.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
    reply(global.mess.wait)
        if (qmsg.seconds > 11) return reply('Maksimal 10 detik!')
        let media = await bob.downloadMediaMessage(qmsg)
        let encmedia = await bob.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
        await fs.unlinkSync(encmedia)
    } 
}


        switch (command) {
            case 'menu': case 'command': case 'help': {
                bob.sendMessage(m.chat, {sticker: fs.readFileSync(`./media/setmenu.webp`)}, {quoted: m})
            }
            break
            case 'setsticker': case 'setstik': {
            if (!isCreator) return reply(global.mess.owner)
            if (isQuotedSticker) {
            var todi = await downloadAndSaveMediaMessage("sticker", "media/setmenu.webp")
            reply(`Sukses`)
            }
            }
            break
            case 'tutor': case 'tutorial': case 'tutordek': case 'cara': {
            bob.sendMessage(m.chat, {caption: `Berikut adalah cara cara bagaimana cara menggunakannya`, image: fs.readFileSync(`./media/tutordek.jpeg`)})
            }
            break
            default:
                if (budy.startsWith('x')) {
                    if (!isCreator) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(2)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})