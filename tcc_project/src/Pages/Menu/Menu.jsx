import CustomButton from "../../CustomComponents/CustomButton/CustomButton"

function Menu() {

    return(
        <div>
            <h1>Menu</h1>
            <CustomButton title="Jogar" navigate="jogo"/>
            <CustomButton title="Como Jogar" navigate="tutorial"/>
            <CustomButton title="História" navigate="historia"/>
            <CustomButton title="Créditos" navigate="creditos"/>
        </div>
    )
}

export default Menu