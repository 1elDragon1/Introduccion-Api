const pool = require('../data/config');

const router =app=>{

    app.get('/',(request,response)=>{

        response.send({
        menssage:'Bienvenido a Node.js Express REST API!'

        });
    });
}