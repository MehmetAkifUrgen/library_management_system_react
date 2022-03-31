import {useNavigate} from "react-router-dom";
import Button from "./components/button";

function App() {
    let navigate=useNavigate()
    function loginHandle(event) {
        navigate(event)
    }

    return (
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <div class="card-header bg-secondary d-flex justify-content-center align-items-center">
          <p class="text-white">SahaBT Kütüphane Sistemi</p>
      </div>
        <div class="card-body d-flex w-25 flex-column justify-content-between ">
            <Button onClick={()=> loginHandle("/Teacher")} color="bg-primary" buttonTitle="Öğretim Üyesi" />
            <Button onClick={()=> loginHandle("/Student")} color="bg-secondary" buttonTitle="Öğrenci" />
            <Button onClick={()=> loginHandle("/Officer")} color="bg-warning" buttonTitle="Memur" />
            <Button onClick={()=> loginHandle("/Graduate")}color="bg-danger" buttonTitle="Mezun" />
        </div>
        <div className="card-body d-flex justify-content-center align-items-center">
            <Button onClick={()=> loginHandle("/AdminPageExample")}color="bg-success" buttonTitle="Admin Girişi" />
        </div>
    </div>
  );
}

export default App;
