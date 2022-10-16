import "./Plot.css"
import plotImage from "../../assets/Plot.jpg"

export default function Plot() {

    return (
        <div className="plot-main-div">
            <p><h1>Enredo do jogo</h1>
            <h2>Depois de ensinar os alunos a identificar as fake news através da aplicação de uma série de perguntas, a professora dá mais uma atividade:
                analisar e classificar as notícias entregues como verdadeiras ou falsas.</h2>
            </p>
            <img src={plotImage}/>
        </div>
    )
}