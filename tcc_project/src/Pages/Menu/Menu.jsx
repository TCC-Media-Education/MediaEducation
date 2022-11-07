import CustomButton from "../../CustomComponents/CustomButton/CustomButton"
import "./Menu.css"
import menuImage from "../../assets/Menu.jpg"

function Menu() {

    return(
        <div className="main-div-menu">
            <div id="menu">
                <p id="game-name">Nome do Jogo</p>
                <CustomButton title="Jogar" navigate="jogo"/>
                <CustomButton title="Como Jogar" navigate="tutorial"/>
                <CustomButton title="História" navigate="historia"/>
                <CustomButton title="Créditos" navigate="creditos"/>
            </div>
            
            
            

            {/* <img id="image" src={menuImage} /> */}
        </div>
    )
}

export default Menu