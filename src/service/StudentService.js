const BASE_URL =
    "http://localhost:8080";

export default class StudentService{
    constructor() {
    }


    addStudent = async (st) => {
        return fetch(BASE_URL+'/ogrenci/addStudent',{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(st)
        }).then(response => response.json())
    }
    getAllStudent = async () => {
        return fetch(BASE_URL+"/ogrenci/getall",{
            headers: {
                "Accept": "application/json"
            }
        }).then( res => res.json() );
    }
    deleteStudent = async (id) => {
        return fetch(`${BASE_URL+"/ogrenci/"}/${id}`,{
            method: "DELETE",
            headers: {
                "Accept": "application/json"
            }
        }).then(response => response.json())
    }
    updateStudent(st,id) {
        return fetch(`${BASE_URL+"/ogrenci/"}/${id}`,{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(st)
        }).then(response => response.json())
    }
}