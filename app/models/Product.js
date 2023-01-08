const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    seBusca: {
        type: Boolean,
        required: true
    },
    precio: {
        type: Number,
        default: 10
    },
    tags: {
        type: Array,
        default: []
    },  
    Foto: {
        type: Array,
        default: []
    },   
    date: {
        type: Date,
        default: Date.now()
    },
    
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;