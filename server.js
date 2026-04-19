const socket = io();
const form = document.getElementById('form'); // اتأكد من الـ IDs عندك
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// 1. استقبال الرسايل (مرة واحدة بس بره)
socket.on('message_from_server', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight); // يخلي السكرول ينزل لتحت
});

// 2. إرسال الرسايل
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('message_from_client', input.value);
        input.value = ''; // فضي الخانة بعد الإرسال
    }
});
