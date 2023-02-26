//////////////////////////////////////////
//    RANDOM FUNCTIONS                //
////////////////////////////////////////

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

function cText(msg,r,g,b,style = "n"){
    const cTextStyles = new Map([
        ["b", "\u001b[1m"],
        ["i", "\u001b[3m"],
        ["u", "\u001b[4m"],
        ["n", ""]

      ]);
    return "${cTextStyles.get(msg)}\u001b[38;2;${r};${g};${b}m${msg}\u001b[0m"
}