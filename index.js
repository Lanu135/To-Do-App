const addTaskElement = document.getElementById('add-task')
const addTaskBtn = document.getElementById('add-task-btn')

const openTasks = []

addTaskBtn.addEventListener('click', () => {
  if (addTaskElement.value === '') {
    alert('Please enter a task')
  } else {
    openTasks.push(addTaskElement.value)
    addTaskElement.value = ''
  }
})
