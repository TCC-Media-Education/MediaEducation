import CustomButton from "../../CustomComponents/CustomButton/CustomButton"
import "./Menu.css"
import bookCover from "../../assets/BookCover.png"
import schoolImage from "../../assets/BookSchool.png"
import studentImage from "../../assets/BookStudent1.png"
import worldImage from "../../assets/BookWorldDraw.png"

function Menu() {

    const handleImageClick = () => {
        window.open("https://www.editora.vecher.com.br/index.php/vel/catalog/book/16", "_blank")
    }

    return(
        <div className="main-div-menu">
            
            <div id="menu">
                <div id="menu-buttons">
                    <div id="game-name-div">
                        <p id="game-name">
                            Nem tudo que vejo e ouço é verdade!
                        </p>
                    </div>
                    <div id="buttons-images-container">
                        <div id="school-image-div">
                            <img id="school-image" src={studentImage}/>
                        </div>
                        <div id="school-world-draw"> 
                            <img id="world-image" src={worldImage}/>
                        </div>
                        <div id="menu-buttons-special">
                            <CustomButton title="História" navigate="historia" color="green"/>
                            <CustomButton title="Como Jogar" navigate="tutorial" color="green"/>
                            <CustomButton title="Jogar" navigate="jogo" color="blue"/>
                            <CustomButton title="Créditos" navigate="creditos" color="green"/>
                        </div>
                    </div>
                </div>
                <div id="bottom-info-container">
                    <div id="book-image-div">
                        <div id="book-image-label-div">
                            <p id="book-image-label">Conheça o livro que inspirou o jogo!</p>
                        </div>
                        <div id="book-image-flex-div">
                            <img src={bookCover} id="book-image" onClick={handleImageClick}/>
                    </div>
                    
                </div>
                <div id="extra-info" >
                        <p hidden={true}>extra</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Menu