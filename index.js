const container = document.getElementById('container');

const span = document.createElement('span');

// span.textContent = "texto do span";
span.appendChild(document.createTextNode("texto do span"));

container.appendChild(span);
container.appendChild(h1);
