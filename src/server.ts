import SetupConfiguration from "./setup/setup.config";

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const start = (configuration: SetupConfiguration) => {
    const app = express();
    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.listen(configuration.port, configuration.host, configuration.listenCallback);
}

export default start;