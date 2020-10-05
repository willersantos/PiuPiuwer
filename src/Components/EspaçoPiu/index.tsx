import React, { FormHTMLAttributes } from 'react';

//import './styles.css'

import fechar from "../.././Images/Group 107.png";

interface EspaçoPiuProps extends FormHTMLAttributes<HTMLFormElement>{
}

const EspaçoPiu: React.FunctionComponent<EspaçoPiuProps> =() =>{
    
    return(
        <div id="espaço_de_piu" >
            <div id="botão_fecha">
                <img src={fechar}/>
            </div>
            <div id="campo_post">
                <form>
                    <input type="textarea" placeholder="What's happening?" className="post" /> 
                </form>
                <button id="Piu_button">Piu</button>
            </div>
        </div>
    )
}

export default EspaçoPiu;