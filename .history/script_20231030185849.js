let addBtn=document.querySelector("#add-btn");
let newTaskInput=document.querySelector("#wrapper input");
let taskContainer=document.querySelector("#tasks");
let error=document.getElementById("error");
let countValue=document.querySelector(".count-value");
let taskCount=0;

let displayCount=(taskCount)=>{
    countValue.innerText=taskCount;
};

let addTask=()=>{
    let taskName=newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }
    let task=`<div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskName">${taskName}</span>
    
    <button class="edit">
    <i class="fa-regular fa-pen-to-square"></i>
    </button>
    
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    
    </button>
    </div>`;

    taskContainer.insertAdjacentHTML("beforeend",task);

    let deleteButtons=document.querySelectorAll(".delete");
    deleteButtons.forEach((button)=>{
        button.onClick=()=>{
        button.par
        }
    })
};

addBtn.addEventListener("click",addTask);
