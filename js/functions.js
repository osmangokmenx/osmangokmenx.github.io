let history = [];
let activeHistoryIndex = null;
let typer = document.querySelector("#typer");
let input = document.querySelector("#terminal-input");
let output = document.querySelector("#terminal-output");
let cursor = document.querySelector("#cursor");
let commandTemplateItem = document.querySelector("#command-template");
let commandTemplate = "osmangokmenx@github.io: <span class='dir'>~</span> >";

output.innerHTML =
  "<div class='content-line' style='margin:0;'>For a list of commands, type '<span class='command'>help</span>'.</div> <br>";
commandTemplateItem.innerHTML = commandTemplate;

function newLine(command) {
  let content;
  switch (command.replace(/^\s+|\s+$/gm, "")) {
    case "about":
      content = about;
      break;
    case "cv":
      content = cv;
      break;
    case "social":
      content = social;
      break;
    case "contact":
      content = contact;
      break;
    case "projects":
      content = projects;
      break;
    case "vim":
      content = vim;
      redirect("https://github.com/osmangokmenx/init.vim");
      break;

    case "source":
      content = source;
      redirect("https://github.com/osmangokmenx/osmangokmenx.github.io");
      break;
    case "help":
      content = help;
      break;
    case "history":
      content = history;
      break;
    case "clear":
      output.innerHTML = "";
      return true;
    default:
      content = defaulCommand;
      break;
  }

  if (typeof content == "object") {
    let arrayToText = "";
    content?.map((item) => {
      arrayToText = `${arrayToText} <div class="command-list"> ${item} </div>`;
    });
    content = arrayToText;
  }

  output.innerHTML = `${output.innerHTML} <span class="command-template">${commandTemplate}</span> ${command}  <div class="content-line">${content}</div>`;
}

function resetCursor() {
  cursor.style.left = "0px";
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function setInputValue(value) {
  input.value = value;
  typer.innerHTML = value;
}

function redirect(url) {
  setTimeout(() => {
    window.open(url, "_blank").focus();
  }, 700);
}
