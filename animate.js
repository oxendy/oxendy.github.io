
function ASCIIAnimation(animArray, speed, DOMtarget) {
    var currentFrame = 0;
      for(var i = 0; i < animArray.length; i++) {
          animArray[i] = animArray[i].replace(/ /g,"&nbsp;");
          animArray[i] = "<pre>" + animArray[i] + "</pre>";
      }
      DOMtarget.innerHTML = animArray[0];
      currentFrame++;
      this.animation = setInterval(function() {
          DOMtarget.innerHTML = animArray[currentFrame];
          currentFrame++;
          if(currentFrame >= animArray.length) currentFrame = 0;
      }, speed);
      this.getCurrentFrame = function() {
          return currentFrame;
      }
  }
  
  ASCIIAnimation.prototype.stopAnimation = function() {
      clearInterval(this.animation);
  }


