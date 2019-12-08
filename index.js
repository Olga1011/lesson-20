console.log('displayPhrase')
function displayPhrase() {
    document.getElementById("demo").innerHTML = 'You clicked the First button';
}

button2.onclick = function() {
    document.getElementById("demo").innerHTML = 'You clicked the Second button';
}

function handler() {
    document.getElementById('demo').innerHTML = 'You clicked the Fird button';
}

document.getElementById('button3').addEventListener("click", handler);