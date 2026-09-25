const STORAGE_KEY = "dailyTodoTasks";

let tasks = loadTasks();
let toastTimer;

const $ = (selector) => document.querySelector(selector);

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    return Array.isArray(parsed)
      ? parsed.filter(
          (task) =>
            task &&
            typeof task.text === "string" &&
            typeof task.done === "boolean"
        )
      : [];
  } catch (error) {
    console.error("Could not load tasks:", error);
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Could not save tasks:", error);
    showToast("Could not save changes");
  }
}

function render() {
  const list = $("#taskList");
  const emptyMsg = $("#emptyMsg");
  const countMsg = $("#countMsg");
  const clearBtn = $(".clear-btn");
  const progressRing = $(".progress-ring");
  const progressText = $(".progress-ring span");

  list.innerHTML = "";

  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  emptyMsg.hidden = total !== 0;
  clearBtn.disabled = completed === 0;

  countMsg.textContent = total
    ? `${completed} of ${total} done`
    : "No tasks yet";

  progressRing.style.setProperty("--progress", `${progress}%`);
  progressText.textContent = `${progress}%`;

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item${task.done ? " done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "task-check";
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute(
      "aria-label",
      `Mark "${task.text}" as complete`
    );
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "del-btn";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.title = "Delete task";
    deleteButton.setAttribute(
      "aria-label",
      `Delete "${task.text}"`
    );
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.append(checkbox, span, deleteButton);
    list.appendChild(li);
  });
}

function addTask() {
  const input = $("#taskInput");
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  tasks.push({
    text,
    done: false
  });

  saveTasks();
  input.value = "";
  render();
  input.focus();
  showToast("Task added");
}

function toggleTask(index) {
  if (!tasks[index]) return;

  tasks[index].done = !tasks[index].done;
  saveTasks();
  render();
}

function deleteTask(index) {
  if (!tasks[index]) return;

  const deletedTask = tasks[index].text;

  tasks.splice(index, 1);
  saveTasks();
  render();

  showToast(`Deleted "${deletedTask}"`);
}

function clearCompleted() {
  const completed = tasks.filter((task) => task.done).length;

  if (!completed) return;

  tasks = tasks.filter((task) => !task.done);

  saveTasks();
  render();

  showToast(
    `${completed} completed task${completed > 1 ? "s" : ""} cleared`
  );
}

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function updateDate() {
  const today = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date());

  $("#todayDate").textContent = today;
}

$("#taskInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

updateDate();
render();
