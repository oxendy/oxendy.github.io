(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 250);
}( document.title + " - " ));



let count = 0

let proton = 0
let neutron = 0
let electron = 0

function toggleStuff(id){
    let temp = document.getElementById(id)
  if (temp.style.display === "none") {
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
      
    }
  }