let count
count = 0

function increment()
  {
    count = count + 1
    if (count == 1){
      document.getElementById("counter").innerHTML = "Atom: " + count
    }
    else{
      document.getElementById("counter").innerHTML = "Atoms: " + count
    }
  }