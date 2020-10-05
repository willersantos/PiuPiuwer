import styled from 'styled-components';

export interface BodyProps{
    color:string;
    opacidade:number | null;
}

interface AsideProps{
}

interface SectionProps{
}

interface InferiorProps{
    tamanho:number;
}

interface RigthProps{
}

interface EspaçoCompartilhadoProps{
    posição:string;
}

interface EspaçoPiuProps{
    opacidade:number;
}

export const Body = styled.body<BodyProps>`
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:300px 600px 27.5vw;
    grid-template-areas:
        "left center right";
    justify-content:center;
    background-color:${props => props.color};
    *{
        opacity:${props => props.opacidade};
    }
`;

export const Aside = styled.aside<AsideProps>`
    height:100vh;
    float:right;
    grid-area:left;

    #Logo_PiuPiuwer{
        position:relative;
        left:7rem;
    }

    #menu{
        width: 155px;
        height: 450px;

        display:flexbox;
        flex-flow: column;

        margin:0 0 2rem 4rem;
        padding:0 0 0 0;
    }

    #menu ul li{
        list-style:none;
        padding-bottom:25px;
        width:150px;
    }

    #menu ul li a{
        width: 100px;
        height: 23px;
        padding-left:18px;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;
        color: #000000;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-decoration: none;
    }

    #menu ul button{
        width: 150px;
        height: 34px;
        background: #FFEA2D;
        border-radius: 40px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
        align-items:center;
        margin:0 0 0 0;

        position:relative;
    }

    #menu ul button:hover{
        cursor:pointer;
        background-color:#FFE600;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    #menu ul li:hover{
        background-color:rgba(0,0,0,0.1);
        cursor:pointer;
    }

    #user_identification{
        margin:1rem 0 0 6.5rem;
        height:50px;
    }

    #user_identification img{
        height:36px;
        width:36px;
        border-radius:100%;
        margin:0 0 0 0;
        padding:0 10px 0 0;
        float:left;
    }

    #user_identification ul{
        padding:0 0 0 0;
        margin:0 0 0 0;
        float:left;
    }
    #user_identification ul li{
        list-style:none;
    }

    #user_identification #user_name{
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 11px;
        color: #000000;
    }

    #user_identification #user_name:hover{
        cursor:pointer;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    }

    #user_identification #user_email{
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 13px;
        color: rgba(0, 0, 0, 0.51);
    }

    #user_identification #user_email:hover{
        cursor:pointer;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    }
`;

export const Section = styled.section<SectionProps>`
    height:100vh;
    width:533px;
    grid-area:center;

    #superior{
        border: 2px solid rgba(0, 0, 0, 0.3);
        height:25rem;
        width:533px;
        display:flex;
        flex-flow:column;
    }

    #profile_infos{
        width:250px;
        height:50px;
        margin-top:0.8rem;
        margin-left:0.2rem;
        display:flexbox;
    }

    #profile_infos ul{
        margin:-8px 0 0 5px;
        padding:0 0 0 0;
        justify-content:start;
    }

    #profile_infos ul li{
        list-style:none;
        padding-bottom:5px;
    }

    #profile_infos #user_name{
        font-family: Montserrat Alternates;
        font-weight: 800;
        font-size: 19px;
        color: #000000;
    }

    #profile_infos #user_email{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 11px;
        color: rgba(0, 0, 0, 0.6);
    }

    #general_infos #user_name:hover,#user_email:hover,
    #profile_infos #user_name:hover,#user_email:hover{
        cursor:pointer;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    }

    #perfil{
        position:relative;
        left:1rem;
        top:-4.5rem;
        width:120px;
        height:120px;
        border: 7px solid rgba(255, 255, 255);
        border-radius:120px;
    }

    #perfil:hover{
        cursor:pointer;
        opacity:70%;
    }

    #capa{
        justify-content:start;
        align-items:center;
        width:33.5rem;
        height:165px;
    }

    #general_infos {
        display:flex;
        flex-flow:column;
        height:20rem;
    }

    #general_infos button{
        float:right;
        
        width: 115px;
        height: 35px;
        
        border: 1px solid #FAE02B;
        background-color:white;
        box-sizing: border-box;
        border-radius: 20px;
        
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 35px;
        color: #FAE02B;
        margin:0 0 0 0;
    }

    #general_infos button:hover{
        background:#FAE02B;
        border-color:black;
        cursor:pointer;
        color:white;
    }

    #general_infos #lista{
        height:50px;
        position:relative;
        top:-4.2rem;
        margin:0 1rem;
    }

    #general_infos #lista ul{
        position:absolute;
        width:200px;
        float:left;
        padding:0 0 0 30px;
        margin:0 0 0 0;
    }

    #general_infos #lista ul li{
        list-style:none;
    }

    #general_infos #user_name{
        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 12px;
        color: #000000;
    }

    #general_infos #user_email{
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 9px;
        color: rgba(0, 0, 0, 0.51);
    }

    nav ul{
        height:25px;
        margin:0 0 0 0;
        padding:0 0 0 0;
        display:flexbox;
        justify-content:justify;
        align-items:center;
    }

    nav ul li{
        width:120px;
        list-style:none;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        color: #FAE02B;
        text-align:center;
    }

    nav ul li:hover{
        background-color:rgba(250, 224, 43,0.2);
        cursor:pointer;
    }

    nav ul li:hidden{
        background-color:rgba(250, 224, 43,0.5);
    }

    #barra_de_opção{
        position:relative;
        top:-0.1rem;
        margin-top:1px;
        width:115px;
        height:6px;
        background:#FAE02B;
    }
`;

export const Inferior = styled.article<InferiorProps>`
    border: 2px solid rgba(0, 0, 0, 0.3);
    height:${props => props.tamanho}rem;
    width:533px;
`;

export const Rigth = styled.section<RigthProps>`
    width:426px;
    display:flex;
    flex-direction:column;

    #barra_de_pesquisa{
        justify-content: space-between;
        align-items:top;
        width: 20rem;
        height: 30px;
        display:flexbox;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 30px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        
        margin-top:10px;
        color: rgba(0, 0, 0, 0.5);
        margin-left:0.2rem;
        text-align:left;
        justify-content:center;
        align-items:top;
    }

    #barra_de_pesquisa #search{
        width: 17rem;
        height: 30px;
        border:0px;
        margin-right:5px;
        background: rgba(0, 0, 0, 0);
        border-radius: 30px;
        
        align-items:center;
        justify-content:end;
    }

    #barra_de_pesquisa img{
        justify-content:start;
        height:1rem;
        width:auto;
    }
`;

export const EspaçoCompartilhado = styled.ul<EspaçoCompartilhadoProps>`
    width: 330px;
    float:left;
    background: rgba(250, 224, 43, 0.1);
    border-radius: 12px;
    justify-content: space-between;
    align-items:${props => props.posição};
    margin:1rem 0;
    padding:1rem 0;

    a{
        height:15px;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 11px;
        color: #FAE02B;
        padding-left:25px;
    }

    p{
        position:absolute;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 15px;
        padding-top:10px;
        color: #000000;
        margin:0 0 0 0;
        padding:0 0 0 0;
    }

    ul{
        padding:0 0 0 0;
        margin:5px 0 0 0;
    }

    ul li{
        list-style:none;
        height:50px;
        padding:10px 0 0 10px;
        border-bottom:2px solid rgba(0, 0, 0, 0.2);
        align-items:center;
        display:flex;
        flex-direction: column;
    }

    ul li h1{
        width:280px;
        font-family: Montserrat Alternates;
        font-style: normal;
        font-size: 16px;
        color: #000000;
        margin:0;
        justify-content:flex-start;
        align-items: start;
    }

    ul li h2{
        width:280px;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        margin:0;
        justify-content:flex-start;
        align-items: end;
    }

    ul li img{
        width:30px;
        height:30px;
        border-radius:30px;
        position:relative;
        top:-2rem;
        left:30px;
    }

    ul li button{
        width: 65px;
        height: 35px;
        
        border: 1px solid #FAE02B;
        box-sizing: border-box;
        border-radius: 20px;
        
        position:relative;
        top:-3.6rem;
        left:100px;

        background-color:rgba(250,224,43,0);
    }
    ul li button:hover{
        background-color:rgba(250,224,43,0.2);
    }
`;

export const EspaçoPiu = styled.table<EspaçoPiuProps>`
    background-color: white;
    width: 536px;
    height: 270px;

    position:absolute;
    top:10rem;
    left:52.5vh;
    right:20vh;

    justify-items:center;
    opacity:${props => props.opacidade};

    border-radius: 10px;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;

    #botão_fecha{
        color: rgb(255, 230, 0);
        width: 478px;
        height: 30px;
        background-color:white;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        position:relative;
        top:-6.5rem;
    }

    #campo_post{
        position:relative;
        left:-268px;
        top:-7.5rem;
        
        width: 20px;
        height: 20px;
    }

    #campo_post form{
        width: 536px;
        height: 160px;

        margin:2rem 50px;
    }

    #campo_post form input{
        width: 460px;
        height: 155px;
    }

    button{
        width: 120px;
        height: 34px;
        
        background: rgb(255, 230, 0);
        border-radius: 40px;
        
        font-family: "Roboto Slab";
        font-weight: bold;
        font-size: 18px;
        color: rgb(255, 255, 255);
        text-align: center;
        
        position:relative;
        align-items:end;
        aling-content:end;

        margin:0 10px;
    }

    button:hover{
        cursor:pointer;
        background-color:#FFE600;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h3{
        width:450px;
        margin:0;
        position:relative;
        text-align:right;
        font-size:1rem;
    }
`;