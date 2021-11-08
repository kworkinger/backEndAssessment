const userContainer = document.querySelector('#user-info')
const registerForm = document.querySelector('#register-form')
const addGoal = document.querySelector('#add-goal')
const goal = document.querySelector('#goal')
const goalsContainer = document.querySelector('#goalList')
const updateUsers = document.querySelector('#update')
const deleteUsers = document.querySelector('#delete')

const baseURL = `http://localhost:4000/api`

const register = body => axios.post(`${baseURL}/register`, body)
    .then(res => {createUserCard(res.data)
    }) .catch(err => {
        console.log(err)
        alert('Error, please try again.')
    })
    
const addGoals = body => axios.post(`${baseURL}/goals`, body)
    .then(res => {createGoals(res.data)
    })  .catch(err => {
        console.log(err)
        alert('Error transmitting goal.')
    })

const update = body => axios.put(`${baseURL}/${id}`, body)
    .then(res => {createUserCard(res.data)
    }) .catch(err => {
        console.log(err)
        alert('Error updating user.')
    })

const deleteUser = () => axios.put(`${baseURL}/${id}`)

function registerSubmitHandler(e) {
    e.preventDefault()
        
    let firstName = document.querySelector('#register-firstName')
    let lastName = document.querySelector('#register-lastName')
    let email = document.querySelector('#register-email')
        
    let bodyObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        }
    register(bodyObj)
        
    firstName.value = ''
    lastName.value = ''
    email.value = ''
}

function addGoalHandler(e){
    e.preventDefault()
    
    newGoal = {
        goal: goal.value
    }
    addGoals(newGoal)

    goal.value = ''
}

function updateUserHandler(e){
    e.preventDefault()

    let firstName = document.querySelector('#register-firstName')
    let lastName = document.querySelector('#register-lastName')
    let email = document.querySelector('#register-email')
        
    let bodyObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        }
    update(bodyObj)
        
    firstName.value = ''
    lastName.value = ''
    email.value = ''

}

function deleteUserHandler(e) {
    e.preventDefault()
    
    let firstName = document.querySelector('#register-firstName')
    let lastName = document.querySelector('#register-lastName')
    let email = document.querySelector('#register-email')
        
    let bodyObj = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        }

    deleteUser(bodyObj)
}

function createUserCard(data) {
    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = `<p class="email">Email: ${data.email}</p>
    <p class="first-name">First Name: ${data.firstName}</p>
    <p class="last-name">Last Name: ${data.lastName}</p>
    `

    userContainer.appendChild(userCard)
}

function createGoals(data) {
    goalsContainer.innerHTML = ''
    // for(let i = 0; i < res.data; i++){
    let postGoal = document.createElement('li')
    postGoal.classList.add('post-goal')
    // postGoal.textContent = res.data[i]
    postGoal.innerHTML = `${data.goals}`

    goalsContainer.appendChild(postGoal)

}
// }


registerForm.addEventListener('submit', registerSubmitHandler)
addGoal.addEventListener('click', addGoalHandler)    
updateUsers.addEventListener('click', updateUserHandler)
deleteUsers.addEventListener('click', deleteUserHandler)