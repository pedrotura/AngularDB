const mongoose = require('mongoose');

//criando o esquema do banco de dados
const Schema = mongoose.Schema;

const scheme = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true
    }

});

//exportando o esquema para o MongoDB
module.exports = mongoose.model('Produto', scheme);