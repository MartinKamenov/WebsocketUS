import controller from './websocket.controller';
import Route from '../contracts/Route';
const { Router } = require('express');

export default class WebsocketRoute implements Route {
    constructor(private app) {}

    attach = () => {
        const router = new Router();

        router.get('/', (req, res) => {
            res.send('WebsocketUS');
        });

        this.app.use('/', router);
    }
}