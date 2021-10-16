window.onload = init;

function init(){
    if(localStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "inicio.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', eliminar);
    }
    else{
        window.location.href = "inicio.html"
    }
}

function eliminar(){
    var idu = document.getElementById('input-id').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/empleado/delete',
        data: {
            id: idu
        }
    }).then(function(res){
        console.log(res);
        alert("Eliminación exitosa");
        window.location.href = "inicio.html"
    }).catch(function(err){
        console.log(err);
        alert("Ocurrio un error");
    })
}