import { getDatabase, ref, DataSnapshot, child, get, set } from "firebase/database"


import app from "../firebase"
import { Article } from "../Models/Article"

const database = getDatabase(app)

const dbRef = ref(getDatabase())

export class ArticleService {

    constructor() {}

    async getArticles() {
        var articles = Article
        await get(child(dbRef, "Articles")).then((allArticles) => {
            articles = allArticles.val()
            return articles
        })
        return articles
    }
}