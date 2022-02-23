const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        //Levantamineto de server
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();

    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parse del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static( 'public' ));
    }

    routes() {
        
        this.app.use( this.usuariosPath, require('../routes/user'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log( 'Servidor corriendo en el puerto ', this.port );
        });
    }

}



module.exports = Server;