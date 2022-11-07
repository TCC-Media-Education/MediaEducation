import app from "../firebase"
import { getStorage, ref, getBlob } from "firebase/storage"

const storage = getStorage(app)

export class StorageContext {

    constructor() {}

    async getArticleImage(name) {
        const pathRef = ref(storage, "Articles/" + name)
        const blob = await getBlob(pathRef)
        return blob
    }
}