import fs from "fs"
import { join } from "path"

const BASEDIR = __dirname

export const getAllContent = () => {

    const languages = fs.readdirSync(BASEDIR)

    console.log(BASEDIR)

    console.log(languages)

    const snippets = []

    languages.map((lang) => fs.readdirSync(join(BASEDIR, lang), {withFileTypes:true}).map((name) => {
        if (!name.isDirectory()) snippets.push(`${lang} / ${name.name}`)
        else snippets.push(`${lang} / ${name.name} ISDIR`)
    }))

    return snippets

}

export const getFile = (lang, name) => {
    const file = () => {
        try {
            return fs.readFileSync(join(BASEDIR, lang, name), 'utf-8')
        }
        catch (e) {
            return null
        }
    }

    return file()
}