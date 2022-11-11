import "./RewardCard.css"
import labelsFile from "../../../noticias/GameRewardLabels/RewardLabels.json"
import diamondImage from "../../../assets/PurpleDiamond.png"
import { useNavigate } from "react-router-dom"

export default function RewardCard(props) {

    const labels = labelsFile.labels
    const navigateTo = useNavigate()

    function getLabel(string) {
        console.log(string)
        if(string == "" || string == undefined) {
            return "test"
        } else {
            return labels[string]
        }
    }

    const mainLabel = getLabel(props.rewardText)

    const handlePlayAgainClick = () => {
        window.location.reload();
    }

    const handleMenuClick = () => {
        navigateTo("/")
    }

    return (
        <div className="main-card-div" hidden={props.rewardText == "" ? true : false}>
            <div id="main-container">
                <div id="card-info">
                    <div id="prize-image-div">
                        <img id="prize-image" src={diamondImage}/>
                    </div>
                    <div id="score-div">
                        <p id="score-label">
                            Sua pontuação foi:  {props.score}
                        </p>
                    </div>
                    <div id="reward-text">
                        <p>{mainLabel}</p>
                    </div>
                    <div id="buttons-div">
                    <button className="button-class" id="return-button" onClick={handleMenuClick}>
                        <p>
                            Voltar para o menu
                        </p>
                    </button>
                    <button className="button-class" id="play-again-button" onClick={handlePlayAgainClick}>
                        <p>
                            Quero jogar de novo!
                        </p>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}