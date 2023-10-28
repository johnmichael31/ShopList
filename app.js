// const form = document.getElementById('task-form');
// const taskInput = document.getElementById('task');
// const filter = document.querySelector('#filter');
// const clearBtn = document.querySelector('.clear-tasks');
// const taskList = document.querySelector('.collection');

// //Load all event listener
// loadEventlistener();


// //Load all event listener
// function loadEventlistener(){
//     //add task
//     form.addEventListener('submit', addTask)
//     //Delete item
//     taskList.addEventListener('click', deleteItem)
//     //clear items
//     clearBtn.addEventListener('click', clearTask)
//     //Filter
//     filter.addEventListener('keyup', filterTask)
// }
//     function addTask(e){
//         if(taskInput.value === ''){
//             alert('Add a Task')
//         }

//         //create element
//             const li = document.createElement('li');
//             const list = document.querySelector('.collection');
//             const link = document.createElement('a')

//             //add className
//             li.className = 'collection-item'
//             // Create text node and append
//             li.append(document.createTextNode(taskInput.value))
//             //add color red
//             li.style.color = 'red'
//             //add className into the link
//             link.className = 'delete-item secondary-content'
//             //add icon in link
//             link.innerHTML = '<i class = "fa fa-remove"></i>'
//             li.append(link)
//             list.append(li)


//             //Store in Local Storage
//             // storeTaskInLocalStorage()

//             taskInput.value = ''

            

//         e.preventDefault()
//     }


// // //Store in Local storage
// // function storeTaskInLocalStorage(task){
// //     let tasks;

// //     if(localStorage.getItem('tasks') === null){
// //         tasks = [];
// //     }else{
// //         tasks = JSON.parse(localStorage.getItem('tasks'))
// //     }

// //     tasks.push(task);

// //     localStorage.setItem('tasks', JSON.stringify(task))
// // }



// // DeleteItem
// function deleteItem(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
//         if(confirm('Are you sure to delete this?')){
//             e.target.parentElement.parentElement.remove()
//         }
//     }
// }

// //Clear task
// function clearTask(e){
//     //using innerhtml+
//     taskList.innerHTML = '';

//     //using while
//     // while(taskList.firstChild){
//     //     taskList.removeChild(taskList.firstChild)
//     // }
// }

// //Filter
// function filterTask(e){
//     const text = e.target.value.toLowerCase();
//     const lis = document.querySelectorAll('.collection-item')
    
//     lis.forEach((task) => {
//         const item = task.firstChild.textContent;

//         if(item.toLowerCase().indexOf(text) != -1){
//             task.style.display = 'block'
//         } else{
//             task.style.display = 'none'
//         }
//     })
// }

const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task')
const filterTask = document.getElementById('filter')
const clearBtn = document.querySelector('.clear-tasks')
const list = document.querySelector('.collection')

//loadallevent
loadAllEvent()

function loadAllEvent(){
    taskForm.addEventListener('submit', addTask)
    clearBtn.addEventListener('click', clearTask)   
    list.addEventListener('click', deleteItem)
    filterTask.addEventListener('keyup', taskFilter)
}
    function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task')
        rhyuj  
    }

    const listItem = document.createElement('li')
    const link = document.createElement('a')
    listItem.className = 'collection-item'
    listItem.appendChild(document.createTextNode(taskInput.value))
    list.appendChild(listItem)
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    listItem.appendChild(link)

    taskInput.value = ''

    e.preventDefault()
}

//clear task
    function clearTask(){
        list.innerHTML = ''
    }

//delete 
    function deleteItem(e){
        if(e.target.parentElement.classList.contains('delete-item')) {
            if(confirm('Are you sure to delete this?')){
                e.target.parentElement.parentElement.remove()
            }
        }
    }

//filter
    function taskFilter(){
        const search = e.target.value.toLowerCase()
        const lis = document.querySelectorAll('.collection-item')

        lis.forEach((li)=>{
            const item = li.firstChild.textContent

            if(item.toLocaleLowerCase().indexOf() !=-1){
                li.style.display = 'block'
            }else{
                li.style.display = 'none'
            }
        })
    }

