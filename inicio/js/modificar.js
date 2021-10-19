window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "inicio.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', modificar);
    }
    else{
        window.location.href = "inicio.html"
    }
}

function modificar(){
    var idu = document.getElementById('idU').value;
    var nom = document.getElementById('username').value;
    var ape = document.getElementById('lastname').value;
    var tel = document.getElementById('phone').value;
    var cor = document.getElementById('email').value;
    var dir = document.getElementById('address').value;

    axios({
        method: 'put',
        url: 'http://localhost:3000/empleado/modificar',
        data: {
            id: idu,
            nombre: nom,
            apellido: ape,
            telefono: tel,
            correo: cor,
            direccion: dir
        }
    }).then(function(res){
        console.log(res);
        alert("Modificación exitosa");
        window.location.href = "inicio.html"
    }).catch(function(err){
        console.log(err);
        alert("Ocurrio un error");
    })
}