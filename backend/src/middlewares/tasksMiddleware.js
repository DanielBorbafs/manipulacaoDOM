const validateBody = (req, res, next) => {
    const { body } = req;
    if (body.title === undefined) {
        res.status(400).json({message: 'o campo título é obrigatório'});
    };

    if( body.title === "") {
        res.status(400).json({message: 'O campo título não pode ser vazio'});
    }
    next();
}

module.exports = {
    validateBody
}