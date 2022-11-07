import { useEffect, useRef, useState } from "react"
import { Article } from "../../../Models/Article"
import FileReader from "../../../noticias/FileReader"
import { StorageContext } from "../../../Services/StorageService"
import "./Tablet.css"


export default function Tablet() {
    const [articles, setArtciles] = useState([])
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleHasImage, setArticleHasImage] = useState(false)
    const [image, setImage] = useState()

    const [hintCounter, setHintCounter] = useState(2)
    const [score, setSCore] = useState(0)
    const [roundCount, setRoundCount] = useState(1)
    const [isMenuOn, setIsMenuOn] = useState(false)

    const storageService = new StorageContext()

    const navRef = useRef()

    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    useEffect(() => {
        const reader = new FileReader()
        let allArticles = reader.readFile()
                
        const randomIndex = randomIntFromInterval(0, allArticles.length - 1)

        var newCurrentArticle = allArticles[randomIndex]
        setCurrentArticle(newCurrentArticle)

        allArticles.splice(randomIndex, 1)
        setArtciles(allArticles)

        if(allArticles[randomIndex].image == "") {
            setArticleHasImage(false)
        } else {
            
            setArticleHasImage(true)
        }
    }, [])


    function pickNewArticle() {
        if(articles.length > 0) {
            const randomIndex = randomIntFromInterval(0, articles.length - 1)
            setCurrentArticle(articles[randomIndex])
            if(articles[randomIndex].image != "") {
                console.log("entrouuuu")
                setArticleHasImage(true)
            } else {
                setArticleHasImage(false)
            }
            var newArticles = articles
            newArticles.splice(randomIndex, 1)
            setArtciles(newArticles)
        }
    }

    function nextRound() {
        if(roundCount % 3 == 0) {
            setHintCounter(hintCounter + 2)
            setRoundCount(1)
            // aparece card com pontuacao final , premio e botao para jogar novamente
        } else {
            pickNewArticle()
            setRoundCount(roundCount + 1)
        }
    }

    const handleFalseClick = () => {
        if(!isMenuOn) {
            if(currentArticle.fakeNews) {
                setSCore(score + 10)
            } 
            nextRound()
        }
    }

    const handleTrueClick = () => {
        if(!isMenuOn) {
            if(!currentArticle.fakeNews) {
                setSCore(score + 10)
            }
            nextRound()
        }
        
    }

    const showNavBar = () => {
        if(hintCounter > 0 || isMenuOn) {
            if(!isMenuOn) {
                setIsMenuOn(true)
                setHintCounter(hintCounter - 1)
            } else {
                setIsMenuOn(false)
            }
            navRef.current.classList.toggle("responsive")
        }
      }

    return (
        <div className="all-screen-div">
            <h2 id="points-label">Pontuação: {score}</h2>
            <div className="main-tablet-div">
                <div id="tablet-elements">
                
                    <div id="screen">
                    <div ref={navRef} id="nav-view">
                        <h2 id="hint-title">Dicas:</h2>
                        <div id="hints-div">
                            <h3 id="hint-label">{currentArticle.reason}</h3>
                        </div>
                    </div>
                        <div id="source-date-infos">
                            <p className="upper-infos">{currentArticle.source}</p>
                            <p className="upper-infos">{currentArticle.date}</p>
                            <button id="hint-button" onClick={showNavBar}>
                                <p id="hint-button-text">quantidade de informações disponiveis: {hintCounter}</p>
                            </button>
                        </div>
                        <div id="image-article-infos">
                            <img src={""} hidden={!articleHasImage}/>
                            <p id="main-text">{currentArticle.text}</p>
                        </div>
                        <div id="true-false-buttons">
                        <button className="buttons" id="false-button" onClick={handleFalseClick}>
                            Falso
                        </button>
                        <button className="buttons" id="true-button" onClick={handleTrueClick}>
                            Verdadeiro
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