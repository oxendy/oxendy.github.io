
//Scrolling title
  (function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 250);
}( document.title + " - " ));


window.onload = function(){
  updateElement()
  navBar('COMPOUNDDIV')
}


//////////////////////////////////////////
//     UPDATE ELEMENTS                 //
////////////////////////////////////////

function updateElement(){
  updateAtom()
  updateButton()
  updateDiv()
}    

function updateDiv(){
  for ( let i = 0; i < navbars.length; i++) {
    let temp = navbars[i].toLowerCase()
    if ( unlockedDivs.includes(navbars[i]) ){
      toggleStuff(temp.substring(0, temp.length - 3) + "Bar","show")
    }else{
      toggleStuff(temp.substring(0, temp.length - 3) + "Bar","hide")
    }
  
  }
}

function updateButton(){
  if ( atoms.get('hydrogen') >= 10 && !unlockedDivs.includes('UPGRADEDIV')){
    toggleStuff('requestAnUpdate','show')
  }else{
    toggleStuff('requestAnUpdate','hide')
  }
}

function updateAtom(){
  
  for (const [key, value] of Object.entries(compoundList)) {
        let arrayVal = value
        if ( proton >= arrayVal[0] && electron >= arrayVal[1] && neutron >= arrayVal[2] ){
          toggleStuff(key + 'make','show')
          document.getElementById(key).disabled = false;
          if (!unlockedAtoms.includes(key)){
            unlockedAtoms.push(key)
          }
          
          
        }
        else if ( unlockedAtoms.includes(key) ){
          document.getElementById(key).disabled = true;
        }
        else{
          toggleStuff(key + 'make','hide')
        }
      } 
  
  
  
  for (const [key, value] of Object.entries(compoundList)) {
  document.getElementById(key + "Count").innerHTML = atoms.get(key)
  }
  
  
  document.getElementById("counter").innerHTML = 
        "Proton: " + proton +
        "\n" + "Neutron: " + neutron +
        "\n" + "Electron: " + electron
}


function navBar(dir){
  for (var i = 0; i < navbars.length; i++) {
    toggleStuff(navbars[i],'hide')
  }
  toggleStuff(dir,'show')
}

function autoSave(){
  if (document.getElementById('enableAutosave').checked) {
            saveGame();
            setInterval(function(){
                saveGame()
            }, 3000)
        } 
}