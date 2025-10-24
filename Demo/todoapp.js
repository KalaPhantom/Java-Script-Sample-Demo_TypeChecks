const fs = require("fs");
const readline = require("readline");

// File to store tasks
const FILE = "todos.txt";

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos = loadTodos();

function menu() {
  console.log("\n=== Simple JS To-Do App ===");
  console.log("1. Add task");
  console.log("2. List tasks");
  console.log("3. Mark task as done");
  console.log("4. Save & exit");

  rl.question("Choose an option: ", (choice) => {
    switch (choice.trim()) {
      case "1":
        rl.question("Enter a new task: ", (task) => {
          todos.push({ task, done: false });
          console.log("/ Task added!");
          menu();
        });
        break;

      case "2":
        console.log("\nYour tasks:");
        if (todos.length === 0) console.log("(no tasks yet)");
        todos.forEach((t, i) => {
          console.log(`${i + 1}. ${t.done ? "[✔]" : "[ ]"} ${t.task}`);
        });
        menu();
        break;

      case "3":
        rl.question("Enter task number to mark as done: ", (num) => {
          const index = parseInt(num.trim()) - 1;
          if (index >= 0 && index < todos.length) {
            todos[index].done = true;
            console.log("/ Task marked as done!");
          } else {
            console.log("!! Invalid task number.");
          }
          menu();
        });
        break;

      case "4":
        saveTodos();
        console.log("💾 Tasks saved. Goodbye!");
        rl.close();
        break;

      default:
        console.log("⚠️ Invalid option, try again.");
        menu();
    }
  });
}

function loadTodos() {
  if (!fs.existsSync(FILE)) return [];
  const data = fs.readFileSync(FILE, "utf8").trim();
  if (!data) return [];
  return data.split("\n").map((line) => {
    const [task, done] = line.split("|");
    return { task, done: done === "1" };
  });
}

function saveTodos() {
  const data = todos.map((t) => `${t.task}|${t.done ? "1" : "0"}`).join("\n");
  fs.writeFileSync(FILE, data, "utf8");
}

// Start the app
menu();
