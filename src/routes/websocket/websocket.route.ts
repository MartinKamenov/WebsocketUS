import controller from './websocket.controller';
import Route from '../contracts/Route';
const { Router } = require('express');
const enableWs = require('express-ws');

export default class WebsocketRoute implements Route {
    constructor(private app) {}

    attach = () => {
        const router = new Router();

        enableWs(this.app);

        this.app.ws('/:id', async (ws, req) => {
            const id = req.params.id;

            controller.addConnection(id, ws);
            ws.on('message', async (msg) => {
                controller.sendMessage(id, msg);
            });

            ws.on('close', () => {
                controller.removeConnection(id);
            });
        });

        router.get('/', (req, res) => {
            res.send('WebsocketUS');
        });

        this.app.use('/websockets', router);
    }
}