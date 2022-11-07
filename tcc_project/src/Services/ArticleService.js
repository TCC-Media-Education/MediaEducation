import { getDatabase, ref, DataSnapshot, child, get, set } from "firebase/database"


import app from "../firebase"

const database = getDatabase(app)

const dbRef = ref(getDatabase())

export class ArticleService {

    constructor() {}

    

    async getArticles() {
        await get(child(dbRef, "Articles")).then((allArticles) => {
            console.log(allArticles.val())
        })
    }
}