const filename = './data/users.json'
let users = require('../data/users.json')
const helper = require('../helpers/helper.js')

// Returns all users
function getUsers() {
    return new Promise((resolve, reject) => {
        if(users.length == 0){
            reject({
                message: 'Não há usuários cadastrados.',
                status: 202
            })
        }

        resolve(users);
    })
}


// Returns an user given an id
function getUser(id) {
    return new Promise((resolve, reject) => {
        helper.findById(users, id)
        .then(user => resolve(user))
        .catch(err => reject(err));
    })
}


// Insert a new user
function insertUser(newUser) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getCurrentId(users) };
        newUser = { ...id, ...newUser };
        users.push(newUser);
        helper.writeJSON(filename, users);
        resolve(newUser);
    })
}


// Update a given user
function updateUser (id, newUser) {
    return new Promise((resolve, reject) => {
        helper.findById(users, id).then( user => {
            const index = users.findIndex(p => p.id == user.id);
            id = { id: user.id};
            users[index] = { ...id, ...newUser};
            helper.writeJSON(filename, users);
            resolve(users[index]);
        })
        .catch(err => reject(err));
    })
}


// Delete a given user
function deleteUser(id) {
    return new Promise((resolve, reject) =>{
            helper.findById(users, id).then(user => {
                users = users.filter(p => p.id != id);
                helper.writeJSON(filename, users);
                resolve();
            })
            .catch(err => reject(err));
        }
    )
}


module.exports = {
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser
}