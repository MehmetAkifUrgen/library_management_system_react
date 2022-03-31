const BASE_URL =
    "http://localhost:8080";

export default class BookService{
    constructor() {
    }


    addBook = async (bk) => {
        return fetch(BASE_URL+'/book',{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bk)
        }).then(response => response.json())
    }
    getAllBooks = async () => {
        return fetch(BASE_URL+"/book/getall",{
            headers: {
                "Accept": "application/json"
            }
        }).then( res => res.json() );
    }
    deleteBook = async (id) => {
        return fetch(`${BASE_URL+"/book/"}/${id}`,{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        }).then(response => response.json())
    }
    updateEmployee(bk,id) {
        return fetch(`${BASE_URL+"/book/"}/${id}`,{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bk)
        }).then(response => response.json())
    }
}