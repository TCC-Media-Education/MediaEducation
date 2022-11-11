export class Article {
    name
    source
    date
    text
    image
    fakeNews
    reason


    constructor(name, source, date, text, image, fakeNews, reason) {
        this.name = name
        this.source = source
        this.date = date
        this.text = text
        this.image = image
        this.fakeNews = fakeNews
        this.reason = reason
    }
}