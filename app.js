let health = 100
let name = 'Nancy'
let hits = -1


let target ={
    health: 100,
    items: []
}

let items = {
    sword : {name: 'Sword', mod: 5, description: "That's sharp!"},
    magic: {name: 'Fireball', mod: 10, description: "Light it up!"},
    fist: {name: 'Fists', mod: 2, description: "The weapon on the end of your arms!"}
}

function giveSword(){
    let choices = Object.keys(items)
    target.items.push(choices.items)

function slap(){
    health --
    update()
}

function punch(){
 health -=5
 update()
}

function kick(){
    health -=10
    update()
}

function update(){
    document.getElementById('health').innerText= health
    hits ++
    document.getElementById('hits').innerText= hits
}

document.getElementById('name').innerText = name
update()