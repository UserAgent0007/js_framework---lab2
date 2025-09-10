const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

const input_task = document.getElementById('to_do_info');

let recount = function () {

  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + 1;
}

let recount_delete = function () {

  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) - 1;
}

let delete_functionality = function () {

  recount_delete();

  let check = this.parentElement.firstElementChild;
  if (!check.checked) {

    uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) - 1;
  }

  let element_to_delete = this.parentElement;

  list.removeChild(element_to_delete);
}

let check_function = function () {

  if (this.checked) {

    uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) - 1;
  }
  else {

    uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + 1;
  }
}

function newTodo() {

  let text;

  if (input_task.value == '') {

    text = document.createTextNode('you entered nothing');
    return;
  }
  else {

    text = document.createTextNode(input_task.value);
  }

  recount();

  uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + 1;
  let element = document.createElement('li');

  let check = document.createElement('input');
  let delete_button = document.createElement('input');


  // let span1 = document.createElement('span');
  // span1.appendChild (text);
  // span1.classList.add (classNames.TODO_TEXT);


  // element.classList.add (classNames['TODO_ITEM'])

  check.setAttribute('type', 'checkbox');
  // check.classList.add(classNames.TODO_CHECKBOX);

  delete_button.type = 'submit';
  delete_button.value = 'Delete';
  // delete_button.classList.add (classNames.TODO_DELETE);

  delete_button.addEventListener('click', delete_functionality);
  check.addEventListener('click', check_function);

  element.appendChild(check)
  // element.appendChild(span1);
  element.appendChild(text);
  element.appendChild(delete_button)

  list.appendChild(element);
}


