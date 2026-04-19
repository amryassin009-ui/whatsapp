io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('message_from_client', (msg) => {
        // io.emit بتبعت للكل بما فيهم اللي بعت
        // وده صح في حالة لو الـ client مش بيعرض الرسالة غير لما تجيله من السيرفر
        io.emit('message_from_server', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
