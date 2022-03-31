import React from 'react';
import Button from "../components/button";
import InputText from "../components/InputText";
import CardHeader from "../components/cardHeader";
import {useNavigate} from "react-router-dom";

function Student(props) {
    let navigate=useNavigate()
    function loginHandle(event) {
        navigate(event)
    }
    return (
        <div class="container  flex-column  justify-content-center align-items-center">
            <div class="d-flex flex-md-column  align-items-center">
                <CardHeader title="Öğrenci Girişi"/>
                <div class="card-body">
                    <InputText placeholder="E-Mail" />
                    <InputText placeholder="password"/>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <Button color="bg-warning" buttonTitle="Giriş Yap" />
                    <Button onClick={()=> loginHandle("/StudentSignup")} color="bg-success" buttonTitle="Kayıt Ol" />
                </div>
            </div>
        </div>
    );
}

export default Student;