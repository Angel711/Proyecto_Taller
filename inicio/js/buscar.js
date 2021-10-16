window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "inicio.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', buscar);
    }
    else{
        window.location.href = "inicio.html"
    }
}

function loadEmpleado() {
    axios.get(url + "/empleado", headers)
    .then(function(res){
        console.log(res);
        displayEmpleado(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayEmpleado(empleado){
    var body = document.querySelector("body");
    for(var i = 0; i < empleado.length; i++){
        body.innerHTML += `<h3>${empleado[i].nombre}</h3>`;
    }
}

function buscar(){
    var nom = document.getElementById('input-name').value;

    axios({
        method: 'get',
        url: 'http://localhost:3000/empleado/buscar',
        data: {
            nombre: nom
        }
    }).then(function(res){
        console.log(res);
        alert("Empleado encontrado");
    }).catch(function(err){
        console.log(err);
        alert("Ocurrio un error");
    })
}