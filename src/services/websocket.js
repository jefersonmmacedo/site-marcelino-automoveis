import { io } from "socket.io-client";

const socket = io('https://suachaveauto-api-private-c50ca254ab3a.herokuapp.com/');
// const socket = io('http://localhost:3333/');

export {socket}