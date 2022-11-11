import { useNavigate } from "react-router-dom"
import arrowLeft from "../../assets/ArrowLeft.png"
import "./CustomReturnPageButton.css"

export default function CustomReturnPageButton() {

    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo("/")
    }

    return (
        <div className="return-button-main-div">
            <button id="return-button" onClick={handleClick}>
                <img src={arrowLeft} id="image-arrow-left"/>
            </button>
        </div>
    )
}