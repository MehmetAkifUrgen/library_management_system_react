import React, {useEffect, useState} from 'react';
import Button from "../components/button";
import Book from "../models/book";
import Input from "../components/Input";
import BookService from "../service/BookService";


function AdminPageExample(props) {
    let service= new BookService();
    const [id,setId]=useState("");

    let [book, setBook] =
        useState(new Book());
    let [books, setBooks] =
        useState(new Array());


    function handleInputChange(event){
        const {name, value} = event.target;
        let newBook = {...book};
        newBook[name] = value;
        setBook(newBook);
    }
    function addBook(event){
        service.addBook({...book})
            .then( response => {

                    let bks = [...books];
                    bks.push({...book});
                    setBooks(bks);

            });
    }
    async function getAllBooks(event){
        setBooks(await service.getAllBooks());
        // hrService.findAllEmployees().then(setEmployees)
    }
    function deleteBookById(event, id){
        service.deleteBook(id)
            .then( emp => {
                setBook(emp);
                setBooks([...books].filter( em => em.id !== id));
            });

    }
    function updateBook(event,id){
        service.updateEmployee({...book},id)
            .then( emp => {
                setBook(emp);
                setBooks([...books]);
            });

    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
           <div className="w-auto justify-content-center align-items-center">
               <Input id="author"
                      handleChange={handleInputChange}
                      value={book.author}
                      label="AUTHOR"></Input>
               <Input id="category"
                      handleChange={handleInputChange}
                      value={book.category}
                      label="Category"></Input>
               <Input id="isbn"
                      handleChange={handleInputChange}
                      value={book.isbn}
                      label="ISBN"></Input>
               <Input id="pressDate"
                      handleChange={handleInputChange}
                      value={book.pressDate}
                      label="Press Date"></Input>
               <Input id="publisher"
                      handleChange={handleInputChange}
                      value={book.publisher}
                      label="Publisher"></Input>
               <div className="d-flex justify-content-between">
                   <Button onClick={addBook} color="bg-warning" buttonTitle="Add" />
                   <Button onClick={(event) => updateBook(event, id) }  color="bg-white" buttonTitle="Update" />
                   <Button onClick={getAllBooks}  color="bg-success" buttonTitle="Show All" />
               </div>

               <table className="table table-hover table-striped table-bordered table-responsive">
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>ISBN</th>
                       <th>AUTHOR</th>
                       <th>CATEGORY</th>
                       <th>PUBLISHER</th>
                       <th>PRESSDATE</th>
                       <th>BOOK TYPE</th>
                       <th>BORROWED</th>
                       <th>RESERVED</th>

                   </tr>
                   </thead>
                   <tbody>
                   {
                       books.map( (emp,idx) => (
                               <tr key={emp.id}>
                                   <td onMouseOver={(event) => {
                                       setBook(emp),
                                           setId(emp.id)
                                   }}>{emp.id}</td>
                                   <td>{emp.isbn}</td>
                                   <td>{emp.author}</td>
                                   <td>{emp.category}</td>
                                   <td>{emp.publisher}</td>
                                   <td>{emp.pressDate}</td>
                                   <td>{emp.bookType}</td>
                                   <td>{emp.borrowed ? "ALINABİLİR":"ÖDÜNÇTE"}</td>
                                   <td>{emp.reserved ?  "MEVCUT":"MEVCUT DEĞİL"}</td>
                                   <td><Button id="fireEmployee"
                                               buttonTitle="Delete Book"
                                               className="btn-danger"
                                               onClick={(event) => deleteBookById(event, emp.id) }></Button></td>
                               </tr>
                           )
                       )
                   }
                   </tbody>
               </table>
           </div>
        </div>
    );
}

export default AdminPageExample;