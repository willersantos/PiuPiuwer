import styled from 'styled-components';

interface TrProps{ 
}

interface LiProps{ 
    backgroundColorReaction:string;
}

interface ImgProps{ 
    cor:string;
}

export const Tr = styled.tr<TrProps>`
    width:530px;
    height:9rem;
    position:relative;
    display:flex;
    flex-flow:column;
    margin-bottom:2rem;

    ul{
        padding:0 0 0 0;
        margin:0 1.5rem 0 0;
        align-items:top;
        display:flexbox;
        flex-flow:inline;
    }

    ul li{
        list-style: none;
        width:145px;
        margin-top:20px;
    }

    .foto{
        width:40px;
        height:40px;
        border-radius:100%;
        margin:0 10px 0 0;
    }

    .info-superior img{
        margin-left:5px;
    }

    .info-inferior{
        display:flex-inline;
        width:530px;
        margin:0 0 0 2.4rem;
    }

    .info-inferior ul li{
        list-style: none;
        width:120px;
        padding:0 0 0 0;
    }

    .info-inferior img{
        height:18px;
        width:auto;
    }

    .user_name{
        font-family: Montserrat Alternates;
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 10px;
        color: #000000;
    }

    .user_name:hover{
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        cursor:pointer;
    }

    .user_ident{
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 9px;
        color: rgba(0, 0, 0, 0.51);
    }

    .user_ident:hover{
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        cursor:pointer;
    }

    h1{
        height:3rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: justify;
        color: #000000;
        justify-content:center;
        margin:0.5rem 2.4rem;
    }

    p{
        font-size:15px;
        font-family: Roboto Slab;
        font-weight: bold;
        float:left;
        margin:-5px 5px 0 0;
        background-color:#FFFFFF;
        padding:5px;
        align-items:center;
    }

    p:hover{
        background-color:#FCEC80;
        cursor:pointer;
    }

    .img_ident img{
        width:25px;
        height:25px;
        border-radius:25px;
    }

    button{
        width:20px;
        height:20px;
        border-radius:20px;
        background:rgba(0,0,0,0.5);
        font-size:10px;
        color:white;
        font-weigth:bold;
    }

    button:hover{
        background:rgba(0,0,0,0.9);
    }

    #opções{
        diplay:flex;
        flex-flow:column;
    }
`;

export const Li = styled.li<LiProps>`
    img:hover{
        background:${props => props.backgroundColorReaction};
        height:21px;
    }
`;

export const Img = styled.img<ImgProps>`
    background:${props=>props.cor};
`;