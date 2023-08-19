let lastName = document.querySelector('#lname');
let firstName = document.querySelector('#fname')
let password = document.querySelector('#password')
let submit = document.querySelector('#submit')

let users = {};

function User(lastName, firstName, password) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = lastName.value;
    const firstNameUser = firstName.value;
    const passwordUser = password; 

    const user = new User(nameUser, firstNameUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

});