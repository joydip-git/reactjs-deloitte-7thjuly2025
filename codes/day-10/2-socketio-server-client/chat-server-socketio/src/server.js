import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = createServer(app);

const socketServer = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    },
});

socketServer.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        console.log(`${socket.id} has joned room: ${data}`);
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
    });
});

server.listen(3000, () => {
    console.log("SERVER IS RUNNING");
});