import React, {useState} from 'react';
import InputText from "../components/InputText";
import Button from "../components/button";
import StudentService from "../service/StudentService";
import Student from "../models/student";
import Input from "../components/Input";

function StudentSignUp(props) {
    let service= new StudentService();
    const [id,setId]=useState("");

    let [student, setStudent] =
        useState(new Student());
    let [students, setStudents] =
        useState(new Array());


    function handleInputChange(event){
        const {name, value} = event.target;
        let newStudent = {...student};
        newStudent[name] = value;
        setStudent(newStudent);
    }
    function addStudent(event){
        service.addStudent({...student})
            .then( response => {

                let stds = [...students];
                stds.push({...student});
                setStudents(stds);

            });
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="w-auto justify-content-center align-items-center">
                <Input id="email"
                       handleChange={handleInputChange}
                       value={student.email}
                       label="EMAIL"></Input>
                <Input id="faculty"
                       handleChange={handleInputChange}
                       value={student.faculty}
                       label="FACULTY"></Input>
                <Input id="name"
                       handleChange={handleInputChange}
                       value={student.name}
                       label="NAME"></Input>
                <Input id="password"
                       handleChange={handleInputChange}
                       value={student.password}
                       label="PASSWORD"></Input>
                <Input id="phone"
                       handleChange={handleInputChange}
                       value={student.phone}
                       label="PHONE"></Input>
                <Input id="pinCode"
                       handleChange={handleInputChange}
                       value={student.pinCode}
                       label="PINCODE"></Input>
                <Input id="surname"
                       handleChange={handleInputChange}
                       value={student.surname}
                       label="SURNAME"></Input>
                <Input id="username"
                       handleChange={handleInputChange}
                       value={student.username}
                       label="USERNAME"></Input>
                <Button onClick={addStudent} color="bg-warning" buttonTitle="Sign-Up"/>

            </div>
        </div>
    );
}

export default StudentSignUp;