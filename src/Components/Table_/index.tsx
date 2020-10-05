import React, { TableHTMLAttributes, useState, useEffect, useCallback } from 'react';
import {Tr, Li, Img} from './styles';
import useAuth from '../.././Routes/auth';
import api from '../.././Services/api';

import message_coment from '../../Images/Coment.png';
import circle_coment from '../../Images/Circle.png';
import love_coment from '../../Images/Love.png';
import up_coment from '../../Images/Up.png';
import options from '../../Images/Options.png';

interface TableProps extends TableHTMLAttributes<HTMLTableElement>{
    piuId:number;
    foto:string;
    username:string;
    firstName:string;
    lastName:string;
    ano:Array<{
        value:string;
    }>;
    mes:Array<{
        value:string;
    }>;
    dia:Array<{
        value:string;
    }>;
    hora:Array<{
        value:string;
    }>;
    message:string;
    idCode:number | undefined;
    contador1:number | null;
    contador2:number | null;
}

const Table: React.FC<TableProps> =({piuId, idCode, foto, username, firstName, lastName, ano, mes, dia, hora, message, contador1, contador2, ...rest}) =>{
    const [corLike,setCorLike] = useState('white');
    const [corFavorito,setCorFavorito] = useState('white');
    const [ativa,setAtiva] = useState(['']);
    const [dados,setDados] = useState(['']);

    const { user } = useAuth();
    const token = localStorage.getItem('@Project:token');

    const [idUser,setIdUser] = useState(user['id']);

    async function like(){
        if(corLike=='white'){
            setCorLike('rgba(255,229,0,0.6)');
        }
        else{
            setCorLike('white');
        }

        const data = {
            usuario: idUser,
            piu: piuId
        }

        const response = await api.post('pius/dar-like/', data,
            {headers:{
                Authorization:`JWT ${token}`
            }})
    }

    async function favoritar(){
        if(corLike=='white'){
            setCorFavorito('rgba(255,0,0,0.6)');
        }
        else{
            setCorFavorito('white');
        }

        const data = {
            usuario: idUser,
            piu: piuId
        }

        const response = await api.post('pius/favoritar/', data,
        {headers:{
            Authorization:`JWT ${token}`
        }})
    }

    function botão_fechar(){
        if(ativa[0]==''){
            setAtiva(['ativo']);
        }
        else{
            setAtiva(['']);
        }
    }

    async function deleta(){
        setAtiva(['']);
        const response = await api.delete('pius/'+piuId+'/',
        {headers:{
            Authorization:`JWT ${token}`
        }}).then()
    }

    return(
        <div className="Table-block">
            <Tr>
            <table id="piu"{...rest}>
                <ul className="info-superior">
                        <img src={foto} className="foto"/>
                        <li className="user_name">{firstName} {lastName}</li>
                        <li className="user_ident">{username}</li>
                        <li className="user_ident">{dia} {mes} {ano} - {hora}</li>
                        <div id='opções'>
                            <img src={options} onClick={botão_fechar}/>
                            {ativa.map ((ativa) =>{
                                if (ativa=='ativo'){
                                    return(
                                        <div>
                                            <button onClick={deleta}>X</button>
                                        </div>
                            )}})}
                        </div>
                    <div id="opções"></div>
                </ul>
                <h1>{message}</h1>
                <div className="info-inferior">
                    <ul>
                        <Li backgroundColorReaction='rgba(255,229,0,0.3)'> <Img cor={corLike} src={message_coment} onClick={like} /><p>{contador1}</p></Li>
                        <Li backgroundColorReaction='rgba(0,0,0,0.3)'> <img src={circle_coment}/></Li>
                        <Li backgroundColorReaction='rgba(255,0,0,0.3)'> <Img cor={corFavorito} src={love_coment} onClick={favoritar} /><p>{contador2}</p></Li>
                        <Li backgroundColorReaction='rgba(255,229,0,0.3)'> <img src={up_coment}/></Li>
                    </ul>
                </div>
            </table>
            </Tr>
        </div>
    )
}

export default Table;