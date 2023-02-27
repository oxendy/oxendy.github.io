//////////////////////////////////////////
//    RANDOM FUNCTIONS                //
////////////////////////////////////////

var ansi_up = new AnsiUp;

function toggleStuff(id, cur) {
    let temp = document.getElementById(id);
    if (cur == "show") {
      temp.style.display = "block";
    } else {
      temp.style.display = "none";
    }
  }
  
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function displayMessage(msg){
    readout5.innerHTML=readout4.innerHTML;
    readout4.innerHTML=readout3.innerHTML;
    readout3.innerHTML=readout2.innerHTML;
    readout2.innerHTML=readout1.innerHTML;
    readout1.innerHTML=msg;
  }

