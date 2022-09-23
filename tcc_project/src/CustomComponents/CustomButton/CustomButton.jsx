
import { useNavigate } from "react-router-dom"

export default function CustomButton(props) {

    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo(String("/" + props.navigate))
    }


    return (
        <div>
            <button onClick={handleClick}>
                {props.title}
            </button>
        </div>
    )
}