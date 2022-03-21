



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
  ["helium", 0],
  ["oxygen", 0],
])
//Proton, Neutron, Electron

const compoundList = {
  hydrogen : [1,0,1],
  helium   : [2,2,2],
  oxygen   : [8,8,8],
}



//Hide elements

for (const [key, value] of Object.entries(compoundList)) {
  let temp = key
  toggleStuff(temp + 'make','hide')
  console.log(temp)
}


//Func
function mouseOver(atom){
  document.getElementById(atom).innerHTML = compoundList[atom]
}
function mouseOut(atom){
  document.getElementById(atom).innerHTML = "Make " + atom
}
function updateAtom(){
  for (const [key, value] of Object.entries(compoundList)) {
  document.getElementById(key + "Count").innerHTML = atoms.get(key)
  }
  
  document.getElementById("counter").innerHTML = 
        "Proton: " + proton +
        "\n" + "Neutron: " + neutron +
        "\n" + "Electron: " + electron  
}

function compoundAtom(atom){
  console.log(atom)
  let particle = compoundList[atom]
  if ( proton >= particle[0] && neutron >= particle[1] && electron >= particle[2] ){
    proton -= particle[0]
    neutron -= particle [1]
    electron -= particle [2]
    let temp = atoms.get(atom)
    temp += 1
    atoms.set(atom, temp)
    updateAtom()
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
    if (count < 20){
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
      
      document.getElementById("counter").innerHTML = 
        "Proton: " + proton +
        "\n" + "Neutron: " + neutron +
        "\n" + "Electron: " + electron  
    
      //Compounds
     for (const [key, value] of Object.entries(compoundList)) {
        let arrayVal = value
        console.log(arrayVal)
        if ( proton >= arrayVal[0] && electron >= arrayVal[1] && neutron >= arrayVal[2] ){
          toggleStuff(key + 'make','show')
        }
      } 

    
    }
    
    
    
  }