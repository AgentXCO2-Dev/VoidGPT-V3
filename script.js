function sendMessage(){
const input=document.getElementById('message');
const chat=document.getElementById('chat');

if(!input.value.trim()) return;

chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
chat.innerHTML += `<p><b>VoidGPT:</b> Hello! VoidGPT V3 is online. AI connection coming soon 🚀</p>`;

input.value='';
chat.scrollTop=chat.scrollHeight;
}