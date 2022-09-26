function createServer(){
    const express = require('express');
    const app = express();
    const router = require('../routes/index')
    const cors = require('cors');
    app.use(cors());
    app.use('',router);

    return app;
}

export default createServer