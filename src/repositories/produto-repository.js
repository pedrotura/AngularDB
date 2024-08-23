const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

//fazer o acesso à base de dados
exports.get = async() => {
    const result = await Produto.find({});
    return result;
}

//inserir novo produto na base de dados
exports.create = async(data) => {
    const produto = Produto(data);
    await produto.save();
}

//alterar valores do produto na base de dados
exports.update = async(id, data) => {
    await Produto.findByIdAndUpdate(id, {
        $set: {
            titulo: data.titulo,
            preco: data.preco
        }
    })
}