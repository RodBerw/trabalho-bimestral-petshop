import React from 'react';
import Title from './../components/Title/index';
import Autenticacao from '../components/Autenticacao/index';

export default function Login() {
    return (
        <div>
            <Title
                title={"Login"}
                text={"Faça seu login para concluir a compra"} />
            <Autenticacao />
        </div>
    )
}