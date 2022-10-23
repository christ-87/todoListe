const form = document.querySelector('form');
const liste = document.querySelector('ul');
const input = document.querySelector('form input');

let allSpots = [];

form.addEventListener('submit', e => {
e.preventDefault()

const text = input.value.trim()
if(text !== '')
addOneTache(text)
input.value = '';
})

function addOneTache(text){
    const todo = {
        text,
        //
        id: Date.now()
    }
    displayListe(todo)
}

function displayListe(todo){
    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', spotDone );
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
     btn.addEventListener('click', deleteSpot);
    const img = document.createElement('img');
    img.setAttribute('src', 'image/close.png');
    btn.appendChild(img);
    item.appendChild(btn)

    liste.appendChild(item);
    allSpots.push(item)
}

function spotDone(e){
    e.target.parentNode.classList.toggle('endSpot')
}

function deleteSpot(e){
    allSpots.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove()
            allSpots = allSpots.filter(li => li.dataset.key !== el.dataset.key)
        }
        
    });
}