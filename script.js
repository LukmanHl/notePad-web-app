const btnEl = document.getElimentById("btn");
const appEl = document.getElimentById("apps");

let notes = [];

function createNoteEl(id, content){

  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  return element;
}



function addNote(){
  //  id, content

  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: ""
  };

  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);
}

btnEl.addEventListeners("click", addNote);

