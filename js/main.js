/*
  TODO:
  - fix cursor movement on command+a and backspace
  - fix utf-8 font (ş İ ö ç ü...)
*/
document.addEventListener("keydown", (e) => {
  input.focus();
  switch (e.keyCode) {
    case 13:
      newLine(input.value);
      history.push(input.value);
      setInputValue("");
      resetCursor();
      break;
    case 38:
      if (
        activeHistoryIndex - 1 >= 0 ||
        (activeHistoryIndex === null && history.length > 0)
      ) {
        setInputValue(
          history[
            activeHistoryIndex !== null
              ? activeHistoryIndex - 1
              : history.length - 1
          ]
        );
        activeHistoryIndex =
          activeHistoryIndex !== null
            ? activeHistoryIndex - 1
            : history.length - 1;
      }
      break;

    case 40:
      if (
        activeHistoryIndex !== null &&
        activeHistoryIndex + 1 === history.length
      ) {
        activeHistoryIndex = null;
        setInputValue("");
        return true;
      }
      if (
        activeHistoryIndex + 1 <= history.length &&
        activeHistoryIndex !== null &&
        history.length > 0
      ) {
        setInputValue(
          history[activeHistoryIndex !== null ? activeHistoryIndex + 1 : 0]
        );
        activeHistoryIndex =
          activeHistoryIndex !== null ? activeHistoryIndex + 1 : 0;
      }
      break;
    default:
      break;
  }
});

input.addEventListener("keypress", (e) => {
  typer.innerHTML = e.target.value;
});

input.addEventListener("keydown", (e) => {
  moveIt(e.target.value.length, e);
  typer.innerHTML = e.target.value;
});

input.addEventListener("keyup", (e) => {
  typer.innerHTML = e.target.value;
});
