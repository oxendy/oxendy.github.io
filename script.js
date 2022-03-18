//Scrolling title
(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 250);
}( document.title + " - " ));



//Declaration
let count = 0
let proton = 0
let neutron = 0
let electron = 0
const atoms = new Map([
  ["hydrogen", 0],
])



//Hide elements
toggleStuff('makeHydrogen','hide')

//Func
function updateAtom(){
  document.getElementById("hydrogenCount").innerHTML = atoms.get("hydrogen")
  document.getElementById("counter").innerHTML = 
        "Proton: " + proton +
        "\n" + "Neutron: " + neutron +
        "\n" + "Electron: " + electron  
    }

function compoundAtom(prot,neutr,electr){
  updateAtom()
  if ( prot == 1 && neutr == 0 && electr == 1 ) {
    proton -= prot
    neutron -= neutr
    electron -= electr
    let temp = atoms.get("hydrogen")
    temp += 1
    atoms.set("hydrogen",temp)
    
  }
  
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

function increment()
  {
    if (count < 50){
      count += 1
      if (count == 1){
        document.getElementById("counter").innerHTML = "Atom: " + count
      }
      else{
        document.getElementById("counter").innerHTML = "Atoms: " + count
      }
    }
    
    
    
    else{
      
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
      
      updateAtom()
    
      //Compounds
      if ( proton > 0 && electron > 0 ){
        toggleStuff('makeHydrogen','show')
      }
    
    }
    
    
    
  }