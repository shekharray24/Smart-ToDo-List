# 📝 Daily To-Do List

A modern, colorful and responsive **Daily To-Do List** built with **HTML, CSS and JavaScript**.

The app lets users add, complete, delete and clear tasks. Tasks are automatically stored in the browser using **LocalStorage**, so they remain available after refreshing the page.

## ✨ Features

- ➕ Add tasks
- ✅ Mark tasks as completed
- 🗑️ Delete individual tasks
- 🧹 Clear completed tasks
- 💾 LocalStorage persistence
- 📊 Completion percentage
- 📅 Current date display
- 🔔 Toast notifications
- 🎨 Purple, blue, cyan and pink color theme
- 🌈 Gradient background
- ✨ Smooth animations and hover effects
- 📱 Responsive mobile layout
- ⌨️ Press Enter to add a task
- ♿ Basic accessibility support
- 🛡️ Safe handling of invalid LocalStorage data

## 🛠️ Technologies

- **HTML5** — page structure
- **CSS3** — colors, gradients, responsive layout and animations
- **JavaScript (ES6+)** — application logic
- **LocalStorage API** — browser-based task persistence

## 📂 Project Structure

```text
Daily-To-Do-List/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

> The current version contains the CSS inside `index.html`. You can move the `<style>` section into `style.css` later if you want a completely separated HTML/CSS/JS structure.

## 🚀 How to Run

No installation is required.

### Option 1 — Open directly

Open `index.html` in Chrome, Edge, Firefox or another modern browser.

### Option 2 — VS Code

1. Open the project folder in VS Code.
2. Install/use **Live Server** if desired.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🧠 How JavaScript Works

The main JavaScript file is:

```text
script.js
```

### Add a task

`addTask()` reads the input, creates a task object and saves it:

```javascript
{
  text: "Complete project",
  done: false
}
```

### Complete a task

`toggleTask()` changes:

```javascript
done: false
```

to:

```javascript
done: true
```

### Delete a task

`deleteTask()` removes the selected task from the array.

### Clear completed tasks

`clearCompleted()` keeps only unfinished tasks.

### Save tasks

`saveTasks()` stores the task array in:

```javascript
localStorage
```

using:

```javascript
dailyTodoTasks
```

### Render the UI

`render()` rebuilds the task list and updates:

- Task count
- Completion percentage
- Progress ring
- Checkbox state
- Empty-state message
- Delete buttons

## 💾 LocalStorage Example

The browser stores data similar to:

```javascript
[
  {
    text: "Learn JavaScript",
    done: true
  },
  {
    text: "Build portfolio",
    done: false
  }
]
```

No database or backend is required.

## 🎨 UI

The design uses:

- Purple primary gradient
- Blue secondary accents
- Cyan and pink task borders
- Soft gradient background
- Glass-style card
- Rounded controls
- Animated progress ring
- Responsive layout

## 🔮 Future Improvements

Possible additions:

- 🌙 Dark mode
- 🔍 Search and filter
- 🏷️ Categories
- ⭐ Priority levels
- 📅 Due dates
- ⏰ Reminders
- ✏️ Edit tasks
- 🔄 Drag-and-drop ordering
- 📈 Productivity statistics
- ☁️ Cloud synchronization
- 👤 User authentication
- 📱 PWA support

## 👨‍💻 Author

**Shekhar Kumar Ray**

Built with ❤️ using **HTML + CSS + JavaScript**.
