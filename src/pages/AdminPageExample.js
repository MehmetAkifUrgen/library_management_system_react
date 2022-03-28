import React from 'react';
import InputText from "../components/inputText";
import Button from "../components/button";

function AdminPageExample(props) {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
           <div className="w-auto justify-content-center align-items-center">
               <InputText placeholder="isbn" />
               <InputText placeholder="author" />
               <InputText placeholder="title" />
               <InputText placeholder="category" />
               <InputText placeholder="pressDate" />
               <InputText placeholder="publisher" />
               <InputText placeholder="bookType" />
               <Button color="bg-warning" buttonTitle="Add" />
           </div>
        </div>
    );
}

export default AdminPageExample;