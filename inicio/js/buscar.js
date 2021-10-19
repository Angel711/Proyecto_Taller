window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function() {
            window.location.href = "inicio.html"
        });

        document.querySelector('.btn-primary').addEventListener('click', buscar);
    } else {
        window.location.href = "inicio.html"
    }
}

function loadEmpleado() {
    axios.get(url + "/empleado", headers)
        .then(function(res) {
            console.log(res);
            displayEmpleado(res.data.message);
        }).catch(function(err) {
            console.log(err);
        })
}

function displayEmpleado(empleado) {
    var body = document.querySelector("body");
    for (var i = 0; i < empleado.length; i++) {
        body.innerHTML += `<h3>${empleado[i].nombre}</h3>`;
    }
}

function buscar() {
    var nom = document.getElementById('username').value;
    console.log(nom);
    axios({
        method: 'get',
        url: 'http://localhost:3000/empleado/' + nom,
    }).then(function(res) {
        console.log(res);
        displayEmp(res.data.message);
        alert("Empleado encontrado");
        init();
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrio un error");
    })
}

function displayEmp(emp) {
    var info = document.querySelector(".card");
    for (var i = 0; i < emp.length; i++) {

        info.innerHTML += `<div class="card-content">
                            <span class="card-title center">Empleado</span>
                            <h4 class="flow-text" >Nombre: ${emp[i].nombre}</h4>
                            <h4 class="flow-text" >Apellido: ${emp[i].apellido}</h4>
                            <h4 class="flow-text" >Telefono: ${emp[i].telefono}</h4>
                            <h4 class="flow-text" >Correo: ${emp[i].correo}</h4>
                            <h4 class="flow-text" >Dirección: ${emp[i].direccion}</h4>
                        </div>`
    }
}