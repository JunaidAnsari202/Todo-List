let add=document.querySelector("#btn");
let newTaskInput=document.querySelector("#wrapper");
let taskContainer=document.querySelector("#task");
let error=document.getElementById("error");
let countValue=document.querySelector(".count");
let taskCount=0;

let displayCount=(taskCount)=>{
    countValue.innerText=taskCount;
};

let addTask=()=>{
    let taskName=newTaskInput.ariaValueMax.trim();
    error.style.display="none";
    if(!taskName){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }
    let task=`<div class="task">
    <input type="checkbox" class="task-check">
    <span> class="taskName">${taskName}</span>
    
    <button class="edit">
    <i class="fa-regular fa-pen-to-square"></i>
    </button>
    
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    
    </button>
    </div>`;

    tasksContainer.insert
}
