import {app} from "./firebase.js";
import {getDatabase} from "firebase/database";

const database = getDatabase(app);


const savedTask = localStorage.getItem("loadedTasks");
const loadedTasks = savedTask === null ? [] : JSON.parse(savedTask);

const task = document.getElementById("task");
const priority = document.getElementById("priority");
const saveBut = document.querySelector("#save");
const tableBody = document.querySelector("#data-table tbody");


saveBut.addEventListener("click", () => {
    push();
});


