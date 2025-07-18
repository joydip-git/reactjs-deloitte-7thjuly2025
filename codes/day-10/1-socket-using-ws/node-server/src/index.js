const { Server } = require('ws')

const wsServer = new Server({ port: 8082 })

wsServer.on(
    'connection', ws => {
        console.log('client connected');

        ws.addEventListener(
            'message', (ev) => {
                console.log(`received data from client: ${ev.data}`);
                ws.send(`your message: ${ev.data}`)
            })

        ws
            .on('close', () => {
                console.log('client disconnected');
            })
    })
wsServer.addListener('listening', () => console.log('the WS Server is listening on port ' + wsServer.options.port))