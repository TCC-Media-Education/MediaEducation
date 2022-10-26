import { useEffect, useRef, useState } from "react"
import { Article } from "../../../Models/Article"
import FileReader from "../../../noticias/FileReader"
import "./Tablet.css"

export default function Tablet() {

    const [articles, setArtciles] = useState()
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleHasImage, setArticleHasImage] = useState(false)

    const [hintCounter, setHintCounter] = useState(2)
    const [score, setSCore] = useState()

    const navRef = useRef()

    useEffect(() => {
        // read articles file
        const reader = new FileReader()
        let allArticles = reader.readFile()
        // choose a random article and remove it from allArtciles then set state
        setArtciles(allArticles) 

        // choose a random firts article
        let mockArticle = new Article("name", "source", "11/11/11", "this is the article's main text", "", true, "lalala")

        setCurrentArticle(mockArticle)
        // if has image set the image
       
    }, [])

    

    const handleFalseClick = () => {
        console.log("false")
        // change score 
        // change article

    }

    const handleTrueClick = () => {
        console.log("true")
        // change score 
        // change article
    }

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive")
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
                            <button onClick={showNavBar}>
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