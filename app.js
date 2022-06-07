console.log("hii its working");

const addButton = document.querySelector("#add_btn");
const comp_task = document.querySelector(".comp_task");
const pending_task = document.querySelector(".pending_task");
let task_title = document.querySelector("#task_title");
let task_desc = document.querySelector("#task_des");

const addtask = () => {
  if (task_title.value == "" ) {
    alert("Please add the Task Detail");
  } else {
    const task = document.createElement("div");
    task.classList.add("task");
    const htmlData = `
  <div class="title"> ${task_title.value}</div>
  <div class="desc">  ${task_desc.value}</div>
  <div class="option">
      <button class="comp_btn"> &check;</button>
      <button class="del_btn">&#x2613;</button>
  </div>
  `;

    task.insertAdjacentHTML("afterbegin", htmlData);

    //gettting the refrences
    const compbtn = task.querySelector(".comp_btn");
    const delbtn = task.querySelector(".del_btn");

    //deleting the node
    delbtn.addEventListener("click", () => {
      task.remove();
    });

    //completed task
    compbtn.addEventListener("click", () => {
      comp_task.prepend(task);
    });

    pending_task.prepend(task);
  }
};

addButton.addEventListener("click", () => {
  addtask();
  task_title.value = "";
  task_desc.value = "";
});