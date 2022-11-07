import "./Plot.css"
import plotImage from "../../assets/Plot.jpg"

export default function Plot() {

    return (
        <div className="plot-main-div">
            <div id="text">
                <div id="text-style">
                    <h1 id="title">Enredo do jogo</h1>
                    <h2>Depois de ensinar os alunos a identificar as fake news através da aplicação de uma série de perguntas, a professora dá mais uma atividade:
                    analisar e classificar as notícias entregues como verdadeiras ou falsas.</h2>
                </div>
            </div>
            <div id="image">
                <img src={plotImage}/>
            </div>
        </div>
    )
}