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
    if(!taskname){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }
    let task=`<`
}
