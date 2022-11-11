import { useEffect, useState } from "react"
import CustomReturnPageButton from "../../CustomComponents/CustomReturnPageButton/CustomReturnPageButton"
import "./Tutorial.css"
import gameExampleImage from "../../assets/gameExample.png"

function Tutorial() {

    
    

    const texts = {
        0: "Neste jogo sua hablidade de detectar fake news será colocada a prova! Na sua tela haverão diversas informações e você deve analiza-lás. Clique no botão escrito Próximo para saber mais.", 
        1: "Na parte superior do jogo temos as informações de fonte, data e um botão de dicas que também diz quantas vezes pode ser usado. Quando clicado ele abre uma notificação com a dica e para fazer ela sair basta clicar novamente no botão. Você deve remover a notificação para liberar os botões do jogo.",
        2: "Terceito texto..."
    }

    const [currentText, setCurrentText] = useState(texts[0])
    const [count, setCount] = useState(1)

    const getNextText = () => {
        const newText = texts[count]
        setCount(count + 1)
        setCurrentText(newText)
    }

    

    return (
        <div className="tutorial-main-div">
            <CustomReturnPageButton/>
            <div id="main-container">
                <p id="title-label">Como Jogar</p>
                <p id="main-text-label">
                    {currentText == "" || currentText == undefined ? "" : currentText} 
                </p>
                <div id="bottom-info-container">
                    <img id="game-example-image" src={gameExampleImage} /> 
                    <button id="main-button" onClick={getNextText}>
                        Próximo    
                    </button> 
                </div>
                
            </div>
            
        </div>
    )
}

export default Tutorial