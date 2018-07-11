(function(){
  function w() {
    var r = document.documentElement; //根元素html
    var a = r.getBoundingClientRect().width;
    if (a > 750 ){
      a = 750;
    }
    rem = a / 7.5;
    r.style.fontSize = rem + "px";
  }
  w();
  var t;
  window.addEventListener("resize", function() {
    clearTimeout(t);
    t = setTimeout(w, 1000/60);
  }, false);
})();