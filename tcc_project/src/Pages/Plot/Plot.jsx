import "./Plot.css"
import plotImage from "../../assets/Plot.jpg"
import CustomReturnPageButton from "../../CustomComponents/CustomReturnPageButton/CustomReturnPageButton"

export default function Plot() {

    return (
        <div className="plot-main-div">
            <CustomReturnPageButton/>
            <div id="text">
                <div id="text-style">
                    <p id="title">Enredo do jogo</p>
                    <p id="plot-text">
                        O jogo possui uma sequência de 10 desafios (notícias e/ou fatos) onde o/a jogador/a deve avaliar se estas informações são verdadeiras ou falsas. <br/>
                        À cada acerto são computados 10 pontos se o/a jogador/a acerta a etapa sem utilizar as dicas disponíveis. <br/> Caso as utilize a pontuação é de 5 pontos. <br/>
                        Ao final do jogo o/a jogador recebe um certificado de especialista no combate às fake news. <br/>  
                        Importante: o jogo necessita da leitura prévia do livro e as atividades devem ser avaliadas seguindo as dicas contidas na estória.
                    </p>
                </div>
            </div>
            <div id="image">
                    <img src={plotImage} id="plot-image"/>
                
            </div>
        </div>
    )
}