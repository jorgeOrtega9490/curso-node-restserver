const { query } = require('express');
const { response } = require('express');
const { request } = require('http');


const getUsers = ( req, res = response ) => {

    const { q, nombre = 'No name' , apiKey, page, limit } = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apiKey,
        page,
        limit
    });
}

const putUsers = ( req, res = response ) => {

    const id = req.params.id

    res.json({
        msg: "put API - controlador",
        id
    });
}

const postUsers = ( req, res = response ) => {
    
    const body = req.body;
    const { nombre, edad } = body;

    res.json({
        msg: "post API - controlador",
        nombre,
        edad
    });
}

const deleteUsers = ( req, res = response ) => {
    res.json({
        msg: "delete API - controlador"
    });
}

const patchUsers = ( req, res = response ) => {
    res.json({
        msg: "patch API - controlador"
    });
}


  module.exports = {
      getUsers,
      putUsers,
      postUsers,
      deleteUsers,
      patchUsers
  }