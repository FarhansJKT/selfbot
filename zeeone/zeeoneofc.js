const petik = '```'
const help = (prefix,hari, Wita, Wit, ucapannya, Wib, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, tampilTanggall)=> {
	return`┏━━⬣ *INDONESIA TIME*
┃
${petik}┃ ⬡ WIB : ${Wib}
┃ ⬡ WITA : ${Wita}
┃ ⬡ WIT : ${Wit}${petik}
┗⬣
                       
┏━━⬣ *TODAY*
┃
${petik}┃ ⬡ ${ucapannya}
┃ ⬡ Jam : ${Wib}
┃ ⬡ Hari : ${hari}
┃ ⬡ Tanggal : ${tampilTanggall}${petik}
┗⬣

╭──「 📖  *Command* 」
│
├ • *Virus & Bug Command*
│
${petik}│ ⤷ ${prefix}troli 
│ ⤷ ${prefix}bugpc
│ ⤷ ${prefix}bugpc2 [ jumlah ]
│ ⤷ ${prefix}bugtroli2 [ jumlah ]
│ ⤷ ${prefix}bugcombine
│ ⤷ ${prefix}bugtroli
│ ⤷ ${prefix}buglokasi
│ ⤷ ${prefix}virus1 [Katalog]
│ ⤷ ${prefix}virus2 [Katalog]
│ ⤷ ${prefix}virus3 [Katalog] 
│ ⤷ ${prefix}virus4 [Audio]${petik}
│
├ • *Owner Command*
│
${petik}│ ⤷ ${prefix}setprefix <query>
│ ⤷ ${prefix}setmenu <query>
│ ⤷ ${prefix}setlink <query>
│ ⤷ ${prefix}leave <id>
│ ⤷ ${prefix}self 
│ ⤷ ${prefix}public 
│ ⤷ ${prefix}off <query>
│ ⤷ ${prefix}on [alasan]
│ ⤷ ${prefix}status 
│ ⤷ ${prefix}antibug <on/off>
│ ⤷ ${prefix}antitag <on/off>
│ ⤷ ${prefix}autoread <query>
│ ⤷ ${prefix}anticall <on/off>
│ ⤷ ${prefix}antidelete <on/off>
│ ⤷ ${prefix}join <link>
│ ⤷ ${prefix}restart ${petik}
│
├ • *Group Command*
│
${petik}│ ⤷ ${prefix}antilink <1/0>
│ ⤷ ${prefix}setname <query>
│ ⤷ ${prefix}setdesc <query>
│ ⤷ ${prefix}groupinfo 
│ ⤷ ${prefix}revoke 
│ ⤷ ${prefix}linkgc 
│ ⤷ ${prefix}group <open/close>
│ ⤷ ${prefix}add <62xxxx>
│ ⤷ ${prefix}kick <reply>
│ ⤷ ${prefix}sider <reply>
│ ⤷ ${prefix}promote <reply>
│ ⤷ ${prefix}demote <reply>${petik}
│
├ • *Maker Command*
│
${petik}│ ⤷ ${prefix}sticker <image/video>
│ ⤷ ${prefix}swm <author|packname>
│ ⤷ ${prefix}take <author|packname>
│ ⤷ ${prefix}fdeface 
│ ⤷ ${prefix}emoji <emoji>${petik}
│
├ • *Convert Command*
│
${petik}│ ⤷ ${prefix}toimg <reply>
│ ⤷ ${prefix}tomp3 <reply>
│ ⤷ ${prefix}tomp4 <reply>
│ ⤷ ${prefix}slow <reply>
│ ⤷ ${prefix}fast <reply>
│ ⤷ ${prefix}reverse <reply>
│ ⤷ ${prefix}tourl <reply>${petik}
│
├ • *Convert Command*
│
${petik}│ ⤷ ${prefix}upswteks <query>
│ ⤷ ${prefix}upswimage <image>
│ ⤷ ${prefix}upswvideo <video>${petik}
│
├ • *Game Command*
│
${petik}│ ⤷ ${prefix}tictactoe <@tag>
│ ⤷ ${prefix}voting <@tag>
│ ⤷ ${prefix}cekhistory 
│ ⤷ ${prefix}delsesi <game>${petik}
│
├ • *Fun Command*
│
${petik}│ ⤷ ${prefix}hbd <date>
│ ⤷ ${prefix}slander <query>
│ ⤷ ${prefix}slanderpm <query>
│ ⤷ ${prefix}kontak <62xxxx>
│ ⤷ ${prefix}styletext <query>
│ ⤷ ${prefix}photoxy <query>${petik}
│
├ • *Tag Command*
│
${petik}│ ⤷ ${prefix}tag 
│ ⤷ ${prefix}tagall <query>
│ ⤷ ${prefix}hidetag <query>
│ ⤷ ${prefix}kontag 
│ ⤷ ${prefix}sticktag <reply>
│ ⤷ ${prefix}totag <reply>${petik}
│
├ • *Download Command*
│
${petik}│ ⤷ ${prefix}ytsearch <query>
│ ⤷ ${prefix}playstore <query>
│ ⤷ ${prefix}igstalk <query>
│ ⤷ ${prefix}play <query>
│ ⤷ ${prefix}video <query>
│ ⤷ ${prefix}ytmp3 <link>
│ ⤷ ${prefix}ytmp4 <link>
│ ⤷ ${prefix}ig <link>
│ ⤷ ${prefix}twmp4 <link>
│ ⤷ ${prefix}twmp3 <link>
│ ⤷ ${prefix}ttmp4 <link>
│ ⤷ ${prefix}ttmp3 <link>
│ ⤷ ${prefix}fbmp4 <link>
│ ⤷ ${prefix}fbmp3 <link>
│ ⤷ ${prefix}brainly <query>
│ ⤷ ${prefix}image <query>
│ ⤷ ${prefix}anime${petik}
│
├ • *Setting Command*
│
${petik}│ ⤷ ${prefix}setthumb <reply>
│ ⤷ ${prefix}settarget <62xxxx>
│ ⤷ ${prefix}setfakeimg <reply>
│ ⤷ ${prefix}setreply <query>${petik}
│
├ • *Tools Command*
│
${petik}│ ⤷ ${prefix}getname <reply>
│ ⤷ ${prefix}getbio <reply>
│ ⤷ ${prefix}getpic 
│ ⤷ ${prefix}getp 
│ ⤷ ${prefix}get <link>
│ ⤷ ${prefix}q 
│ ⤷ ${prefix}inspect <link>
│ ⤷ ${prefix}searchtext <query>
│ ⤷ ${prefix}searchgc <query>
│ ⤷ ${prefix}detikvn <query>
│ ⤷ ${prefix}detikvideo <query>
│ ⤷ ${prefix}fliptext <query>
│ ⤷ ${prefix}volume <query>${petik}
│
├ • *Other Command*
│
${petik}│ ⤷ ${prefix}blocklist [List]
│ ⤷ ${prefix}setcmd <query>
│ ⤷ ${prefix}delcmd [Delete]
│ ⤷ ${prefix}listcmd [List]
│ ⤷ ${prefix}spam <query>
│ ⤷ ${prefix}listgroup [List]
│ ⤷ ${prefix}size <query>
│ ⤷ ${prefix}ping [Ping]
│ ⤷ ${prefix}term <code>
│ ⤷ ${prefix}owner [Owner]
│ ⤷ ${prefix}deletepc${petik}
│
├ • *Eval Command*
│
${petik}│ ⤷ ${prefix}=> [eval async]
│ ⤷ ${prefix}> [eval]
│ ⤷ ${prefix}$ <termux cmd>${petik}
│
╰──「 *Alphabot* 」
`
}

exports.helpmenu = help