//Creacioin de una funcion para que el btn la dispare
console.log("yty")
const enviar = (event) => {
    event.preventDefault();

    const tarea = document.getElementById("tareaID").value;
    const descripcion = document.getElementById("descripcionID").Value; 

  
   const isPending = true;
    const number = 1;
    //Declaracion de un objeto
    const tareaTodo = {
        tarea,
        descripcion,
   
    };


        //El objeto lo vamos a almacer en el localStorage
        localStorage. setItem("tareaToDo", JSON.stringify(tareaToDo))
        };