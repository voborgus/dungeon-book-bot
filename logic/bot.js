const path = require('path')
const fs = require('fs')
const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.bot_token)
const gameFile = path.resolve(__dirname, 'dungeonbook.json')
const json = JSON.parse(fs.readFileSync(gameFile, 'UTF-8').replace(/^\uFEFF/, ''))

bot.start(async (ctx) => {
    console.log("Starting the new story for chat:", ctx.chat.id)
    await ctx.replyWithMarkdown("**Добро пожаловать в подземелье 🏰**")
    return ctx.replyWithMarkdown("Пришли букву или число следующего шага и я расскажу что там.")
});

bot.on('text', (ctx) => {
    let scene = transliterate(ctx.message.text.trim().toUpperCase())
    console.log(scene)
    console.log(json[scene])

    if (json[scene] != null) {
        return ctx.reply(json[scene])
    } else {
        return ctx.reply("Сцена не найдена 😕. Попробуй другую.")
    }
})
function transliterate(letter) {
    if (/\d/.test(letter)) return letter
    if (/[A-Z]+/.test(letter)) return letter

    const A = {}

    A["Ё"]="YO";A["Й"]="I";A["Ц"]="TS";A["У"]="U";A["К"]="K";A["Е"]="E";A["Н"]="N";A["Г"]="G";A["Ш"]="SH";A["Щ"]="SCH";A["З"]="Z";A["Х"]="H";A["Ъ"]="'";
    A["ё"]="yo";A["й"]="i";A["ц"]="ts";A["у"]="u";A["к"]="k";A["е"]="e";A["н"]="n";A["г"]="g";A["ш"]="sh";A["щ"]="sch";A["з"]="z";A["х"]="h";A["ъ"]="'";
    A["Ф"]="F";A["Ы"]="I";A["В"]="V";A["А"]="A";A["П"]="P";A["Р"]="R";A["О"]="O";A["Л"]="L";A["Д"]="D";A["Ж"]="ZH";A["Э"]="E";

    return A[letter]
}
module.exports = {
    bot
}