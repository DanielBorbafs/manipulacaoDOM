const validateBody = (req, res, next) => {
    const { body } = req;
   
    if (body.nome === undefined) { 
      res.status(400).json({ message: 'o campo nome é obrigatório'});
   
     };
     if (body.nome === "") { 
      res.status(400).json({ message: 'o campo nome é obrigatório'});
   
     };
     next();
   
}
   
module.exports= {
validateBody
};