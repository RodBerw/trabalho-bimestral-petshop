import React from 'react';
import Title from './../components/Title/index';
import Cadastro from "./cadastro";

export default function Cliente() {
    return (
        <div>
            <Title
                title={"Cliente"}
                text={"Cadastro de cliente"} />
            <Cadastro />
        </div>
    )
}