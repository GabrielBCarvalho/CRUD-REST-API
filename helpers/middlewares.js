// Check if the given ID is an integer value
function checkIdIsInteger(req, res, callback){
    const id = req.params.id;

    if(!Number.isInteger(parseInt(id)))
        res.status(400).json({message: 'ID deve ser um número inteiro.'});
    else
        callback();
}


// Check if all attributes are given as parameters of the request
function checkUserAttributes(req, res, callback){
    const {name, email} = req.body;

    if(name && email)
        callback();
    else
        res.status(400).json({message: 'São necessários o nome e e-mail do usuário.'})
}


module.exports = {
    checkIdIsInteger,
    checkUserAttributes
}