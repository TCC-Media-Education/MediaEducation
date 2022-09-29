import "./Plot.css"
import plotImage from "../../assets/Plot.jpg"

export default function Plot() {

    return (
        <div className="plot-main-div">
            <p>Enredo do jogo</p>
            <img src={plotImage}/>
        </div>
    )
}