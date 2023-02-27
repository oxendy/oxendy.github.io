//////////////////////////////////////////
//     VARIABLE DECLARATION            //
////////////////////////////////////////

var readout1 = document.getElementById('readout1');
var readout2 = document.getElementById('readout2');
var readout3 = document.getElementById('readout3');
var readout4 = document.getElementById('readout4');
var readout5 = document.getElementById('readout5')

const compoundList = {
  hydrogen: [1, 0, 1],
  helium: [2, 2, 2],
  oxygen: [8, 8, 8],
  carbon: [6, 6, 6],
};
var proton = 0;
var neutron = 0;
var electron = 0;
const atoms = new Map([
  ["hydrogen", 0],
  ["helium", 0],
  ["oxygen", 0],
  ["carbon", 0],
]);
var navbars = ["COMPOUNDDIV", "UPGRADEDIV"];

var unlockedAtoms = [];
var unlockedDivs = ['COMPOUNDDIV'];



//////////////////////////////////////////
//       SAVE/LOAD FUNCTIONS           //
////////////////////////////////////////



if (localStorage.length > 0) {
  loadGame();
  displayMessage(`${cText("Welcome back!",255,0,0)}`);
}


function saveGame() {
  localStorage.setItem("proton", proton);
  localStorage.setItem("neutron", neutron);
  localStorage.setItem("electron", electron);

  for (const [key, value] of atoms.entries()) {
    localStorage.setItem("player" + key, value);
  }

  for (let i = 0; i < unlockedAtoms.length; i++) {
    console.log(unlockedAtoms[i])
    if (unlockedAtoms[i] !== null) {
      localStorage.setItem("unlockedAtom" + i, unlockedAtoms[i]);
    }
  }
  
  for (let j = 0; j < unlockedDivs.length; j++) {
    localStorage.setItem("unlockedDiv" + j, unlockedDivs[j]);
  }

  
  if (document.getElementById("enableAutosave").checked) {
  } else {
    savedSuccessfully();
  }
}


function loadGame() {
  unlockedAtoms = [];
  unlockedDivs  = ['COMPOUNDDIV'];
  proton = parseInt(localStorage.getItem("proton"));
  neutron = parseInt(localStorage.getItem("neutron"));
  electron = parseInt(localStorage.getItem("electron"));

  for (let i = 0; i < atoms.size; i++) {
    atoms.set(
      Array.from(atoms.keys())[i],
      parseInt(localStorage.getItem("player" + Array.from(atoms.keys())[i]) || 0)
    );
  }
  for (let j = 0; j < atoms.size; j++) {
    if (localStorage.getItem("unlockedAtom" + j) !== null){
      unlockedAtoms.push(localStorage.getItem("unlockedAtom" + j));
    } else { continue };
  }
  for (let k = 0; k < navbars.length; k++) {
    unlockedDivs.push(localStorage.getItem("unlockedDiv" + k));
    
  }
  updateElement();
}


function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}



//////////////////////////////////////////
//    IN-GAME FUNCTIONS                //
////////////////////////////////////////

function compoundAtom(atom) {
  let particle = compoundList[atom];
  if (
    proton >= particle[0] &&
    neutron >= particle[1] &&
    electron >= particle[2]
  ) {
    
    proton -= particle[0];
    neutron -= particle[1];
    electron -= particle[2];
    let temp = atoms.get(atom);
    temp += 1;
    atoms.set(atom, temp);
    
  }
  updateElement();
}

function increment() {
  //Particle Increment
  if (getRandomInt(3) == 0) {
    proton += 1;
  }
  if (getRandomInt(3) == 1) {
    neutron += 1;
  }
  if (getRandomInt(3) == 2) {
    electron += 1;
  }

  document.getElementById("counter").innerHTML =
    "Proton: " +
    proton +
    "\n" +
    "Neutron: " +
    neutron +
    "\n" +
    "Electron: " +
    electron;

  //Compounds
  updateElement();
}

function requestUpgrade(){
  unlockedDivs.push('UPGRADEDIV');
  
  toggleStuff('requestAnUpdate','hide');
  atoms.set('hydrogen', atoms.get('hydrogen')-10);
  updateElement();
}