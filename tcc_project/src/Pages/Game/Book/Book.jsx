import { useEffect, useRef, useState } from "react"
import CustomReturnPageButton from "../../../CustomComponents/CustomReturnPageButton/CustomReturnPageButton"
import FileReader from "../../../noticias/FileReader"
import "./Book.css"
import tempImage from "../../../assets/BookKids.jpg"
import RewardCard from "../RewardCard/RewardCard"


export default function Book() {
    const [articles, setArtciles] = useState([])
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleHasImage, setArticleHasImage] = useState(false)
    const [image, setImage] = useState()
    const [rewardText, setRewardText] = useState("")

    const [hintCounter, setHintCounter] = useState(2)
    const [score, setSCore] = useState(0)
    const [roundCount, setRoundCount] = useState(1)
    const [isMenuOn, setIsMenuOn] = useState(false)
    const [correctStreak, setCorrectStreak] = useState(0)
    const [correctCounter, setCorrectCounter] = useState(0)
    const [usedMenuInCurrentRound, setUsedMenuInCurrentRound] = useState(false)
    
    

    const navRef = useRef()

    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function getRewardText(numRightAnswers) {
        console.log(numRightAnswers)
        if(numRightAnswers == 10) {
            return "amazing"
        } else if(numRightAnswers >= 6) {
            return "great"
        }else if(numRightAnswers >=3) {
            return "medium"
        } else {
            return "needPractice"
        }
    }

    useEffect(() => {
        const reader = new FileReader()
        let allArticles = reader.readFile()
                
        const randomIndex = randomIntFromInterval(0, allArticles.length - 1)

        var newCurrentArticle = allArticles[randomIndex]
        
        setCurrentArticle(newCurrentArticle)

        allArticles.splice(randomIndex, 1)
        setArtciles(allArticles)

        if(newCurrentArticle.image == "" || newCurrentArticle.image == undefined) {
            setArticleHasImage(false)
        } else {
            setArticleHasImage(true)
        }
    }, [])


    function pickNewArticle() {
        if(articles.length > 0) {
            const randomIndex = randomIntFromInterval(0, articles.length - 1)
            const newCurrentArticle = articles[randomIndex]
            setCurrentArticle(newCurrentArticle)
            if(newCurrentArticle.image != "") {
                setArticleHasImage(true)
            } else {
                setArticleHasImage(false)
            }
            var newArticles = articles
            newArticles.splice(randomIndex, 1)
            setArtciles(newArticles)
        }
    }

    function nextRound(missed) {
        const thisStreak = missed ? correctStreak : correctStreak + 1
        console.log(roundCount)
        if(roundCount == 10) {
            if(missed) {
                setRewardText(getRewardText(correctCounter))
            } else {
                setRewardText(getRewardText(correctCounter + 1))
            }
        } else {
            if(thisStreak % 3 == 0 && correctStreak != 0 && !missed) {
                setHintCounter(hintCounter + 2)
            }
            pickNewArticle()
            setRoundCount(roundCount + 1)
        }
        
    }

    const handleFalseClick = () => {
        if(!isMenuOn) {
            var miss = false
            if(currentArticle.fakeNews) {
                setCorrectStreak(correctStreak + 1)
                setCorrectCounter(correctCounter + 1)
                if(usedMenuInCurrentRound) {
                    setSCore(score + 5)
                } else {
                    setSCore(score + 10)
                }
            } else {
                miss = true
            }
            nextRound(miss)
        }
    }

    const handleTrueClick = () => {
        if(!isMenuOn) {
            var miss = false
            if(!currentArticle.fakeNews) {
                setCorrectStreak(correctStreak + 1)
                setCorrectCounter(correctCounter + 1)
                if(usedMenuInCurrentRound) {
                    setSCore(score + 5)
                } else {
                    setSCore(score + 10)
                }
            } else {
                miss = true
            }
            nextRound(miss)
        }
    }

    const showNavBar = () => {
        if(hintCounter > 0 || isMenuOn) {
            if(!isMenuOn) {
                setIsMenuOn(true)
                setUsedMenuInCurrentRound(true)
                setHintCounter(hintCounter - 1)
            } else {
                setIsMenuOn(false)
            }
            navRef.current.classList.toggle("responsive")
        }
      }

    return (
        <div className="all-screen-div">
            <RewardCard rewardText={rewardText} score={score}/>
            <CustomReturnPageButton/>
            <div id="infos">
                <div ref={navRef} id="nav-view">
                    <h2 id="hint-title">Dica:</h2>
                    <div id="hints-div">
                        <h3 id="hint-label">{currentArticle == undefined ? "" : currentArticle.reason}</h3>
                    </div>
                </div>
                <div id="upper-info">
                    <p id="source-label">Fonte: {currentArticle == undefined ? "" : currentArticle.source}</p>
                    <p id="date-label">Data: {currentArticle == undefined ? "" : currentArticle.date}</p>
                    <button id="hints-button" onClick={showNavBar}>
                        <p>Dicas: {hintCounter}</p>
                    </button>
                </div>
                <div id="main-info">
                    <img id="article-image" src={tempImage}/>
                    <p id="article-text">{currentArticle == undefined ? "" : currentArticle.text}</p>
                </div>
                <div id="buttons-div">
                    <button className="buttons" id="false-button" onClick={handleFalseClick}>
                        Falso
                    </button>
                    <button className="buttons" id="true-button" onClick={handleTrueClick}>
                        Verdadeiro
                    </button>
                </div>
            </div>
            
        </div> 
    )
}