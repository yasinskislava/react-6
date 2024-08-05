import { Component } from "react";
import tasks from "../data.json";
import "./TaskList.css";

class TaskList extends Component {
  render() {
    return <>
      <div className="wrapper">
        <h2>Tasks</h2><input placeholder="Write a task" type="text" /><button className="add">Add Task +</button>
      </div>
        <ul>
          {tasks.map((it) => {
            return <li key={it.id}>
                <h3>Task {it.id}</h3>
                <p>{it.task}</p>
              <button onClick={() => { tasks.splice(it.id - 1, 1); arr[it.id - 1].remove(); update(); }}> Delete </button>
              </li>
            })}
        </ul>
      </>
  }
}

let arr;
setTimeout(() => {
  document.querySelector(".add").addEventListener("click" ,() => {
    const text = document.querySelector("input").value;
    document.querySelector("input").value = "";
    tasks.push({ task: text, id: tasks.length + 1 });
    document.querySelector("ul").insertAdjacentHTML(
      "beforeend",
      `<li key=${tasks[tasks.length - 1].id}>
                <h3>Task ${tasks[tasks.length - 1].id}</h3>
                <p>${text}</p>
              <button> Delete </button>
              </li>`
    );
    setTimeout(() => { 
      arr = document.querySelectorAll("li");
      arr[arr.length - 1].querySelector("button").addEventListener("click", (e) => {
        const num = parseInt(e.currentTarget.parentNode.querySelector("h3").textContent.slice(-1));
        console.log(num);
        console.log(tasks);
        tasks.splice(num - 1, 1);
        arr[num - 1].remove();
        update();
      });
    }, 700);
    
  });

  arr = document.querySelectorAll("li");
}, 200);

function update() {
  const secondArr = document.querySelectorAll("li h3");
  for (let i = 0; i < secondArr.length; i++) {
    secondArr[i].textContent = `Task ${i + 1}`;
  }
  arr = document.querySelectorAll("li");
}

export default TaskList;
