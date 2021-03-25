let health = 100
let name = 'Nancy'
let hits = -1


let target ={
    health: 100,
    items: []
}

let items = {
    shield : {name: 'Shield', mod: -10, description: "It's a shield."},
    armor: {name: 'Skull Polish', mod: -5, description: "A clean, protective shine."},
    paper: {name: 'Piece of Paper', mod: -1, description: "It's practically useless!"}
}

function addMods(){
    let totalMod = 0
    for (let i = 0; i < array.length; i++) {
       Object.keys(items) += totalMod
       console.log(Object.keys(items))
    }
}

function giveShield(type){
    let choice = items['shield']
    target.push(choice)
}

function giveArmor(){
    let choices = Object.keys(items)
    target.items.push(choices)
}

function givePaper(paper){
    let choices = Object.keys(items)
    target.items.push(choices)
}

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