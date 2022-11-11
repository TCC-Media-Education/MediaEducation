import CustomReturnPageButton from "../../CustomComponents/CustomReturnPageButton/CustomReturnPageButton"
import "./Credits.css"
import studentImage from "../../assets/BookStudent2.png"
import educationImage from "../../assets/EduMidiatica.png"

function Credits() {

    return (
        <div className="credits-main-div">
            <CustomReturnPageButton/>
            <div id="main-flex-container">
                <div id="credits-container-div">
                    <p id="credits-label">Créditos</p>
                    <div id="content">
                        <div>
                            <p className="credits-text">
                                Este jogo, vinculado ao ebook intitulado  “Nem tudo que vejo e ouço é verdade! “de autoria de Raiza Roznieski e Lucia Giraffa, abordando o tema da Educação Midiática, usando como exemplo a questão fake news.
                                O jogo foi desenvolvido na disciplina de Trabalho de Conclusão de Curso (TCC), Bacharelado em Ciência da Computação da Escola Politécnica – PUCRS, por:
                            </p>
                            <p className="credits-text">
                            Igor Giusti Cardona Alves
                            </p>
                            <p className="credits-text">
                            Lucca Eduardo Sperb Molon
                            </p>
                            <p className="credits-text">
                            Orientaçao: Profa. Dra. Lucia Giraffa
                            </p>
                            <p className="credits-text">
                            Novembro de 2022
                            </p>
                            <div id="special-thanks">
                                <p className="credits-text" id="text-center">
                                    Agradecimentos:
                                </p>
                                <p className="credits-text" id="text-center">
                                    Profa. Margarete Fialho do Santos (consultora do projeto)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="images-container">
                    <img id="education-image" src={educationImage}/>
                    <img id="student-image" src={studentImage}/>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Credits