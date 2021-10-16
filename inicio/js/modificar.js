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
    var idu = document.getElementById('input-id').value;
    var nom = document.getElementById('input-nombre').value;
    var ape = document.getElementById('input-apellido').value;
    var tel = document.getElementById('input-telefono').value;
    var cor = document.getElementById('input-correo').value;
    var dir = document.getElementById('input-direccion').value;

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