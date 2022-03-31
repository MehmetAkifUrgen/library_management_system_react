import React from 'react';
import Button from "../components/button";
import InputText from "../components/InputText";
import CardHeader from "../components/cardHeader";

function Graduate(props) {
    return (
        <div class="container  flex-column  justify-content-center align-items-center">
            <div class="d-flex flex-md-column  align-items-center">
                <CardHeader title="Mezun Girişi"/>
                <div class="card-body">
                    <InputText placeholder="E-Mail" />
                    <InputText placeholder="password"/>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <Button color="bg-warning" buttonTitle="Giriş Yap" />
                    <Button color="bg-success" buttonTitle="Kayıt Ol" />
                </div>
            </div>
        </div>
    );
}

export default Graduate;