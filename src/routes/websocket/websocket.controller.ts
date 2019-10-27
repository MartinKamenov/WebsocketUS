const connections = {};

const controller = {
    addConnection: (id: string, connection: any) => {
        if(connections[id]) {
            connections[id] = [];
        }

        connections[id].push(connection);
    },
    sendMessage: (id: string, message: string) => {
        const allConnections = connections[id];
        if(!allConnections) {
            return;
        }

        allConnections
            .forEach(connection => (
                connection.send(JSON.stringify(message)))
            );
    },
    removeConnection: (id: string) => {
        delete connections[id];
    }
};

export default controller;