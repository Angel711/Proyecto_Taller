const { response } = require('express');
const jwt = require('jsonwebtoken');
const express = require('express');
const user = express.Router();
const db = require('../config/database');

user.post("/login", async (req, res, next) => {
    const { user, user_password} = req.body;
    const query = `SELECT * FROM user WHERE user = '${user}' AND user_password = '${user_password}';`;
    const rows = await db.query(query);
    
    if(user && user_password){
        if(rows.length == 1){
            const token = jwt.sign({
                id : rows[0].id,
                user: rows[0].user
            }, "debugkey");
            return res.status(200).json({code: 200, message: token});
        }
        else{
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrectos"});
        }
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

module.exports = user;