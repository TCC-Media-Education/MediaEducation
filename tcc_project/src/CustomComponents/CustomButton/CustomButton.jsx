import "./CustomButton.css"
import { useNavigate } from "react-router-dom"

export default function CustomButton(props) {

    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo(String("/" + props.navigate))
    }

    return (
        <div className="custom-button-main-div">
            <button className="menu-button" onClick={handleClick}>
                {props.title}
            </button>
        </div>
    )
}