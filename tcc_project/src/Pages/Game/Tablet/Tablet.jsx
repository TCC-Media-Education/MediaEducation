import "./Tablet.css"

export default function Tablet() {



    return (
        <div className="all-screen-div">
            <div className="main-tablet-div">
                <div id="tablet-elements">
                    <div id="screen">
                        <div id="source-date-infos">
                            <p>fonte</p>
                            <p>data</p>
                            <p>informações disponiveis</p>
                        </div>
                        <div id="image-article-infos">
                            <p>imagem</p>
                            <p>noticia principal</p>
                        </div>
                        <div id="true-false-buttons">
                        <button className="buttons" id="false-button" onClick={() => {console.log("test")}}>
                            falso
                        </button>
                        <button className="buttons" id="true-button">
                            verdadeiro
                        </button>
                    </div>
                    </div>
                    <div id="tablet-button">
                        
                    </div>
                    
                </div>
            </div>
        </div> 
    )
}