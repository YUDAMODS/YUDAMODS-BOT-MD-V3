let handler = async (m, { text, usedPrefix, command }) => {

    if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)

    m.reply(`Saved ${path} to file!`)
}

handler.help = ['savefile2', 'sf2'].map(v => v + ' *[path]*')
handler.tags = ['owner']
handler.command = ['savefile2', 'sf2']

handler.owner = true
module.exports = handler