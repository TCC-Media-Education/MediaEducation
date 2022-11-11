import "./CustomButton.css"
import { useNavigate } from "react-router-dom"

export default function CustomButton(props) {

    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo(String("/" + props.navigate))
    }

    return (
        <div className="custom-button-main-div">
            <button className="menu-button" onClick={handleClick} id={"button-" + props.color}>
                {props.title}
            </button>
        </div>
    )
}