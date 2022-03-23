
//Scrolling title
(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 250);
}( document.title + " - " ));

window.onload = availAtom()

//Declaration

const compoundList = {
  hydrogen : [1,0,1],
  helium   : [2,2,2],
  oxygen   : [8,8,8],
}
var proton = 0
var neutron = 0
var electron = 0
const atoms = new Map([
  ["hydrogen", 0],
  ["helium", 0],
  ["oxygen", 0],
])
var navbars = ["COMPOUNDDIV","UPGRADEDIV"]


if ( localStorage.length > 0 ){
  loadGame()
  document.getElementById("logger").innerHTML = "Welcome back"
}


function saveGame(){
  localStorage.setItem("proton", proton)
  localStorage.setItem("neutron", neutron)
  localStorage.setItem("electron", electron)

  for (const [key, value] of atoms.entries()) {
    localStorage.setItem(key,value)
    console.log(localStorage.getItem(key))
  }
  
  savedSuccessfully()
}

function loadGame(){
  proton = parseInt(localStorage.getItem("proton"))
  neutron = parseInt(localStorage.getItem("neutron"))
  electron = parseInt(localStorage.getItem("electron"))
  
  for (let i = 0; i < atoms.size; i++) {
    atoms.set(Array.from(atoms.keys())[i], parseInt(localStorage.getItem(Array.from(atoms.keys())[i])))
  }
  
  updateAtom()
  
}
  
  
//Proton, Neutron, Electron



//Hide elements

for (const [key, value] of Object.entries(compoundList)) {
  let temp = key
  toggleStuff(temp + 'make','hide')
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

//Func
function updateAtom(){
  availAtom()
  for (const [key, value] of Object.entries(compoundList)) {
  document.getElementById(key + "Count").innerHTML = atoms.get(key)
  }
  
  document.getElementById("counter").innerHTML = 
        "Proton: " + proton +
        "\n" + "Neutron: " + neutron +
        "\n" + "Electron: " + electron
}

function compoundAtom(atom){
  let particle = compoundList[atom]
  if ( proton >= particle[0] && neutron >= particle[1] && electron >= particle[2] ){
    proton -= particle[0]
    neutron -= particle [1]
    electron -= particle [2]
    let temp = atoms.get(atom)
    temp += 1
    atoms.set(atom, temp)
  }
  updateAtom()
  
}

function toggleStuff(id,cur){
  let temp = document.getElementById(id)
  if (cur == "show") {
    temp.style.display = "block";
  } else {
    temp.style.display = "none";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function increment(){
      
      //Particle Increment
      if (getRandomInt(3) == 0){
        proton += 1
      }
      if (getRandomInt(3) == 1){
        neutron += 1
      }
      if (getRandomInt(3) == 2){
        electron += 1
      }
      
      document.getElementById("counter").innerHTML = 
        "Proton: " + proton +
        "\n" + "Neutron: " + neutron +
        "\n" + "Electron: " + electron  
    
      //Compounds
     availAtom()

    
    }
    
    
function availAtom(){
  for (const [key, value] of Object.entries(compoundList)) {
        let arrayVal = value
        if ( proton >= arrayVal[0] && electron >= arrayVal[1] && neutron >= arrayVal[2] ){
          toggleStuff(key + 'make','show')
          
        }
        else if ( document.getElementById(key + 'make').style.display == "show" ){
          
        }
      } 
}  
  

function navBar(dir){
  for (var i = 0; i < navbars.length; i++) {
    toggleStuff(navbars[i],'hide')
  }
  toggleStuff(dir,'show')
}