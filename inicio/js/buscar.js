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
    var nom = document.getElementById('input-name').value;
    console.log(nom);
    axios({
        method: 'get',
        url: 'http://localhost:3000/empleado/' + nom,
    }).then(function(res) {
        console.log(res);
        displayEmp(res.data.message);
        alert("Empleado encontrado");
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrio un error");
    })
}

function displayEmp(emp) {
    var info = document.querySelector("#info");
    for (var i = 0; i < emp.length; i++) {
        info.innerHTML += `<h3>${emp[i].nombre}</h3>`
        info.innerHTML += `<h3>${emp[i].apellido}</h3>`
        info.innerHTML += `<h3>${emp[i].telefono}</h3>`
        info.innerHTML += `<h3>${emp[i].correo}</h3>`
        info.innerHTML += `<h3>${emp[i].direccion}</h3>`
    }
}