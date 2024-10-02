import back1 from "./img/01.jpg";
import back2 from "./img/02.jpg";
import back3 from "./img/03.jpg";
import back4 from "./img/04.jpg";

//globals
const API_KEY = "7a1682296fec91ab348277beb96bbeb6";
const BASE_URL = "https://api.weatherstack.com/";
const WEATHER_ENDPOINT = "current?access_key=";
let nextId = 1;
let todos = [];
let longitude = 38.9745706;
let latitude = 45.036035;

const city = document.querySelector("#weather-city");
const temp = document.querySelector("#weather-temp");
const icon = document.querySelector("#weather-icon img");
const app = document.querySelector("#app");
const form = document.querySelector("form");
const todoList = document.querySelector("#todos-list");

const clockEl = document.querySelector("#clock");
const dateEl = document.querySelector("#date");

//attach events
form.addEventListener("submit", handleSubmit);
addEventListener("DOMContentLoaded", initApp);

//init app
function initApp() {
  setDate();
  setBackground();
//   getCoords().then(({ longitude, latitude }) => fetchWeather(latitude, longitude));
  setInterval(renderTime, 1000);
}

//weather

function saveLocalCoords(coords) {
  localStorage.setItem("coords", JSON.stringify(coords));
}

function getLocalCoords() {
  const localCoords = localStorage.getItem("coords");
  return JSON.parse(localCoords);
}

async function getCoords() {
  try {
    if (!getLocalCoords()) {
      console.log("do findLocation");
      const geoInfo = await findLocation();
      ({ longitude, latitude } = geoInfo.coords);
      saveLocalCoords({ longitude, latitude });
      return { longitude, latitude };
    } else {
      console.log("local");
      ({ longitude, latitude } = getLocalCoords());
      return { longitude, latitude };
    }
  } catch (error) {
    alert("Не получается определить вашу геолокацию");
  }
}

function findLocation() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

const fetchWeather = async (lat, lon) => {
  const response = await fetch(BASE_URL + WEATHER_ENDPOINT + API_KEY + `&query=${lat},${lon}`);
  const data = await response.json();
  const {
    location: { name: city },
    current: {
      temperature: temp,
      weather_icons: [icon],
      weather_descriptions: [description],
    },
  } = data;

  setInfo(city, temp, icon, description);
};

function setInfo(city, temp, icon, description) {
  setCity(city);
  setTemp(temp);
  setIcon(icon);
  setDescription(description);
}

function setCity(newCity) {
  if (city) {
    city.innerText = newCity;
  }
}
function setTemp(newTemp) {
  if (temp) {
    temp.innerText = newTemp;
  }
}

function setIcon(newIcon) {
  if (icon) {
    icon.setAttribute("src", newIcon);
  }
}

function setDescription(description) {
  if (icon) {
    icon.setAttribute("alt", description);
  }
}

//background

function selectBackground() {
  const hour = new Date().getHours();
  if (hour > 0 && hour <= 6) return back1;
  if (hour >= 6 && hour <= 12) return back2;
  if (hour >= 12 && hour <= 18) return back3;
  return back4;
}

function setBackground() {
  if (app) {
    app.style.backgroundImage = `url(${selectBackground()})`;
  }
}

//set time and date

function renderTime() {
  if (clockEl) {
    clockEl.innerText = new Date().toLocaleTimeString("ru-RU");
  }
}

function setDate() {
  if (dateEl) {
    dateEl.innerText = new Date().toLocaleDateString("ru-RU", {
      dateStyle: "full",
    });
  }
}

//todos
function handleSubmit(e) {
  e.preventDefault();
  const newTodo = {
    id: nextId++,
    title: e.target.todo.value,
    completed: false,
  };
  if (e.target.todo.value.trim()) {
    todos = [...todos, newTodo];
    e.target.todo.value = "";
    renderAllTodos();
  } else alert("Input field is empty");
}

function renderAllTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => printTodo(todo));
  renderClearBtn();
}

function printTodo({ id, title, completed }) {
  const li = document.createElement("li");
  li.classList.add("item-todo", "todo-item");
  li.dataset.id = id;
  li.name = "todo";
  li.innerHTML = `<span class="item-todo__text">${title}</span>`;

  const status = document.createElement("input");
  status.type = "checkbox";
  status.checked = completed;
  status.className = "item-todo__completed";
  status.name = "todo-completed";
  status.addEventListener("change", handleTodoChange);

  const remove = document.createElement("span");
  remove.className = "item-todo__delete";
  remove.innerHTML = "&times;";
  remove.addEventListener("click", handleRemoveTodo);

  li.append(remove);
  li.prepend(status);

  todoList.prepend(li);
}

function handleTodoChange() {
  const todoId = Number(this.parentElement.dataset.id);
  const index = todos.findIndex((todo) => todo.id === todoId);
  todos[index].completed = !todos[index].completed;
}

function handleRemoveTodo() {
  const todoId = Number(this.parentElement.dataset.id);
  todos = todos.filter((todo) => todo.id !== todoId);
  renderAllTodos();
}

function clearCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  renderAllTodos();
}

function renderClearBtn() {
  const clearBtn = document.querySelector("#clear-completed-todos");
  if (todos.length && !clearBtn) {
    const btn = document.createElement("button");
    btn.className = "todos__button";
    btn.id = "clear-completed-todos";
    btn.innerText = "Clear completed todos";
    btn.addEventListener("click", clearCompletedTodos);
    document.querySelector(".todos__footer").prepend(btn);
  }
  if (!todos.length) {
    clearBtn?.remove();
  }
}
