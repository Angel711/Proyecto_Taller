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

function buscar(){
    var idu = document.getElementById('input-id').value;

    axios({
        method: 'get',
        url: 'http://localhost:3000/empleado/buscar',
        data: {
            id: idu
        }
    }).then(function(res){
        console.log(res);
        alert("Empleado encontrado");
    }).catch(function(err){
        console.log(err);
        alert("Ocurrio un error");
    })
}