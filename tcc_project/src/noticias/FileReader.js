import { Article } from "../Models/Article"
import file from "./noticias.json"

export default class FileReader {

    constructor() {}


    readFile() {
        var articles = []

        file.map((fileArtcile) => {
            const article = new Article(fileArtcile.name, fileArtcile.source, fileArtcile.date, fileArtcile.text, fileArtcile.image, fileArtcile.fakeNews, fileArtcile.reason)
            articles.push(article)
        })
        
        return articles
    }
}