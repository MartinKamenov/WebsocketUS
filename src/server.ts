import SetupConfiguration from "./setup/setup.config";
import Route from "./routes/contracts/Route";
import WebsocketRoute from "./routes/websocket/websocket.route";

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const start = (configuration: SetupConfiguration) => {
    const app = express();
    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const routes: Route[] = [
        new WebsocketRoute(app)
    ];

    routes.forEach(route => {
        route.attach();
    });

    app.listen(configuration.port, configuration.host, configuration.listenCallback);
}

export default start;