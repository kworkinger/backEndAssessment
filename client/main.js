const userContainer = document.querySelector('#user-info')
const registerForm = document.querySelector('#register-form')

const baseURL = `http://localhost:4000/api`

const register = body => axios.post(`${baseURL}/register`, body)
    .then(res => {createUserCard(res.data)
    }) .catch(err => {
        console.log(err)
        alert('Error, please try again.')
    })
    
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

registerForm.addEventListener('submit', registerSubmitHandler)
    
