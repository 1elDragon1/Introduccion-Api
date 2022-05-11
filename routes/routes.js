const pool = require('../data/config');

const router =app=>{

    app.get('/',(request,response)=>{

        response.send({
        menssage:'Bienvenido a Node.js Express REST API!'

        });
    });


    app.get('/users',(request,response)=>{

    pool.query('SELECT*FROM users',(error,result)=>{
        if(error) throw error;

        response.send(result);
    });
    
});

}