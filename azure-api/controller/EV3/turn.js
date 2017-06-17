'use strict';

const socketServer = require('../../socketServer');

class TurnController {
    init(restify) {
        restify.get('/turn/left', this._left.bind(this));
        restify.get('/turn/right', this._right.bind(this));
        restify.get('/turn/back', this._back.bind(this));
    }

    _left(req, res) {
        socketServer.send('turn', 'left');
        res.send(200);
    }

    _right(req, res) {
        socketServer.send('turn', 'right');
        res.send(200);
    }

    _back(req, res) {
        socketServer.send('turn', 'back');
        res.send(200);
    }
}

module.exports = new TurnController();