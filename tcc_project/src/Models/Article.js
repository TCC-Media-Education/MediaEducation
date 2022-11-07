export class Article {
    name
    source
    date
    text
    image
    fakeNews
    reason
    difficulty


    constructor(name, source, date, text, image, fakeNews, reason, difficulty) {
        this.name = name
        this.source = source
        this.date = date
        this.text = text
        this.image = image
        this.fakeNews = fakeNews
        this.reason = reason
        this.difficulty = difficulty
    }
}