import CustomButton from "../../CustomComponents/CustomButton/CustomButton"
import "./Menu.css"
import menuImage from "../../assets/Menu.jpg"

function Menu() {

    return(
        <div className="main-div-menu">
            <div id="left-side-menu">
                <h1>Nome do Jogo</h1>
                <CustomButton title="Jogar" navigate="jogo"/>
                <CustomButton title="Como Jogar" navigate="tutorial"/>
                <CustomButton title="História" navigate="historia"/>
                <CustomButton title="Créditos" navigate="creditos"/>
            </div>
            
            
            

            <img src={menuImage} />
        </div>
    )
}

export default Menu