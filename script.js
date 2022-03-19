window.addEventListener('load', function()
{
    var xhr = null;

    getXmlHttpRequestObject = function()
    {
        if(!xhr)
        {               
            // Create a new XMLHttpRequest object 
            xhr = new XMLHttpRequest();
        }
        return xhr;
    };

    updateLiveData = function()
    {
        var now = new Date();
        // Date string is appended as a query with live data 
        // for not to use the cached version 
        var url = 'livefeed.txt?' + now.getTime();
        xhr = getXmlHttpRequestObject();
        xhr.onreadystatechange = evenHandler;
        // asynchronous requests
        xhr.open("GET", url, true);
        // Send the request over the network
        xhr.send(null);
    };

    updateLiveData();

    function evenHandler()
    {
        // Check response is ready or not
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            dataDiv = document.getElementById('liveData');
            // Set current data text
            dataDiv.innerHTML = xhr.responseText;
            // Update the live data every 1 sec
            setTimeout(updateLiveData(), 1000);
        }
    }
});




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
var compoundList = {
  hydrogen : [1,0,1]
}



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

function compoundAtom(atom){
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
      if ( proton > 0 && electron > 0 ){
        toggleStuff('makeHydrogen','show')
      }
    
    }
    
    
    
  }