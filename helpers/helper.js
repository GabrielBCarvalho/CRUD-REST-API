const fs = require('fs')

// Returns the current id to be inserted
const getCurrentId = (array) => {
    if(array.length > 0)
        return array[array.length - 1].id + 1;
    else
        return 1;
}

// Check if the given array contains the given id. If true, returns the register
function findById(array, id){
    return new Promise((resolve, reject) => {
        const register = array.find(p => p.id == id);
        
        if(!register){
            reject({
                message: 'ID not found',
                status: 404
            })
        }

        resolve(register);
    })
}

// Write the content-array on the JSON file
function writeJSON(filename, content){
    fs.writeFileSync(filename, JSON.stringify(content), 'utf-8', (err) => {
        if(err)
            console.log(err);
    });
}

module.exports = {
    getCurrentId,
    findById,
    writeJSON
}