import { useEffect, useRef, useState } from "react"
import { Article } from "../../../Models/Article"
import FileReader from "../../../noticias/FileReader"
import "./Tablet.css"

export default function Tablet() {

    const [articles, setArtciles] = useState([])
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleHasImage, setArticleHasImage] = useState(false)

    const [hintCounter, setHintCounter] = useState(2)
    const [score, setSCore] = useState(0)
    const [roundCount, setRoundCount] = useState(1)



    const navRef = useRef()

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    useEffect(() => {
        // read articles file
        const reader = new FileReader()
        let allArticles = reader.readFile()

        
        // choose a random firts article
        const randomIndex = randomIntFromInterval(0, allArticles.length)

        setCurrentArticle(allArticles[randomIndex])


        if(allArticles[randomIndex].image == "") {
            setArticleHasImage(false)
        } else {
            setArticleHasImage(true)
        }

        // remove article that was picked first and set remaining articles
        allArticles.splice(randomIndex, 1)
        setArtciles(allArticles)
        
       
    }, [])


    function pickNewArticle() {
        if(articles.length > 0) {
            const randomIndex = randomIntFromInterval(0, articles.length)
            setCurrentArticle(articles[randomIndex])
            if(articles[randomIndex].image != "") {
                setArticleHasImage(true)
            } else {
                setArticleHasImage(false)
            }
            var newArticles = articles
            newArticles.splice(randomIndex, 1)
            setArtciles(newArticles)
        }
        
    }


    const handleFalseClick = () => {
        if(currentArticle.fakeNews) {
            setSCore(score + 10)
        } 
        pickNewArticle()

    }

    const handleTrueClick = () => {
        if(!currentArticle.fakeNews) {
            setSCore(score + 10)
        }
        pickNewArticle()
    }

    const showNavBar = () => {
        if(hintCounter > 0) {
            setHintCounter(hintCounter - 1)
            navRef.current.classList.toggle("responsive")
        }
        
      }

    return (
        <div className="all-screen-div">
            <div className="main-tablet-div">
                <div id="tablet-elements">
                
                    <div id="screen">
                    <div ref={navRef} id="nav-view">
                        <p>testeeee</p>
                    </div>
                        <div id="source-date-infos">
                            <p className="upper-infos">{currentArticle.source}</p>
                            <p className="upper-infos">{currentArticle.date}</p>
                            <button id="hint-button" onClick={showNavBar}>
                                quantidade de informações disponiveis: {hintCounter}
                            </button>
                        </div>
                        <div id="image-article-infos">
                            <img hidden={!articleHasImage}/>
                            <p id="main-text">{currentArticle.text}</p>
                        </div>
                        <div id="true-false-buttons">
                        <button className="buttons" id="false-button" onClick={handleFalseClick}>
                            falso
                        </button>
                        <button className="buttons" id="true-button" onClick={handleTrueClick}>
                            verdadeiro
                        </button>
                    </div>
                    </div>
                    <div id="tablet-button">
                        
                    </div>
                </div>
            </div>
        </div> 
    )
}