const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/',ProductCtrl.index) 
      .post('/',ProductCtrl.create)   
      .get('/:key/:value',ProductCtrl.find,ProductCtrl.show)    
      .put('/:key/:value',ProductCtrl.find,ProductCtrl.update)    
      .delete('/:key/:value',ProductCtrl.find,ProductCtrl.remove)
      .get('/tags', ProductCtrl.getTags);

module.exports = Router;