const mysql =require('mysql');

const config ={

    host: 'localhost',
    user:'root',
    password:'123456',
    database:'api',

};

const pool = mysql.createPool(config);



module.erports=pool;