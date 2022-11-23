const http = new XMLHttpRequest();

//abrir http (metodo, url)

//CRUD (Create Read Update Delete)
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE

http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () =>{
    const data = http.response;
}