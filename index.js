const addTaskElement = document.getElementById('add-task')
const addTaskBtn = document.getElementById('add-task-btn')
const openTaskWrapper = document.querySelector('.open')

const ul = document.getElementById('ul')

const openTasks = []

//TODO: use local storage!!!

addTaskBtn.addEventListener('click', () => {
  if (addTaskElement.value === '') {
    alert('Please enter a task')
  } else {
    openTasks.push(addTaskElement.value)
    addTaskElement.value = ''
    manageTasks()
  }
})

//TODO: convert into forEach
// adds and removes tasks from the DOM
const manageTasks = () => {
  const li = document.createElement('li')
  const xIcon = document.createElement('i')
  xIcon.setAttribute('class', 'fa-solid fa-xmark')
  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'delete-task')
  for (let i = 0; i < openTasks.length; i++) {
    li.setAttribute('id', i)
    deleteBtn.setAttribute('id', i)
    li.innerText = openTasks[i]
    deleteBtn.appendChild(xIcon)
    li.appendChild(deleteBtn)
    ul.appendChild(li)

    deleteBtn.addEventListener('click', (e) => {
      if (e.target.id == i) {
        openTasks.splice(i, 1)
        ul.removeChild(li)
      }
    })
  }
}
