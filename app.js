let health = 100
let name = 'Nancy'
let hits = -1


let target ={
    health: 100,
    buffs: []
}

let items = {
    shield : {name: 'Shield', mod: -10, description: "It's a shield."},
    armor: {name: 'Skull Polish', mod: -5, description: "A clean, protective shine."},
    paper: {name: 'Piece of Paper', mod: -1, description: "It's practically useless!"}
}

function giveShield(){
    let choice = items['shield']
    target['buffs'].push(choice)
}

function giveArmor(){
    let choice = items['armor']
    target['buffs'].push(choice)
}

function givePaper(){
    let choice = items['paper']
    target['buffs'].push(choice)
}

let totalMod = 0
function addMods(){
    for (let i = 0; i < target.buffs.length; i++) {
       totalMod += target['buffs'.mod]
    }
    return totalMod
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