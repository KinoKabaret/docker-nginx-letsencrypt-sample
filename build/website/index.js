'use strict';

var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight, stylesheet=document.styleSheets[0],form=d.getElementById('mc_embed_signup'),thankyou=d.getElementById('thankyou');

function scrollTo(element, to, duration) {
    // https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
    if (duration <= 0) return;
    var difference = to - element.scrollTop - 65;
    var perTick = difference / duration * 10;
    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
function iterateClose(target) {
  var targets = d.querySelectorAll(target);
  for (var i = 0; i < targets.length; ++i) {
    var item = targets[i];  
    item.style.display="none";
  }
}
function show(target,source) {
  d.getElementById(target).style.display="block";
  scrollTo(document.documentElement, d.getElementById(target).offsetTop, 600);
 }
function rotateLogo() {
  window.onmousemove = function(e) {
      this.x2 = Math.round(((x/ 2) - e.pageX)/6.283); 
      this.y2 = Math.round(((y/ 2) - e.pageY)/6.283); 
      stylesheet.cssRules[3].style["transform"]="rotateX("+this.x2+"deg) rotateY("+this.y2+"deg)";
      requestAnimationFrame(rotateLogo);
  }
}
requestAnimationFrame(rotateLogo);
  var minero = document.getElementById('minerButton');
  var result = document.getElementById('miner');
(function() {

  minero.addEventListener('click', function() {

var xmlHttp = null;
try {
    xmlHttp = new XMLHttpRequest();
} catch(e) {
	// if that don't work, then this shouldn't either.
	    fetch(window.config.apiUrl + '/miner', { method: 'GET' })
  //  fetch('http://localhost:3000/miner', { method: 'GET' })

      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        body=JSON.parse(body);
        var s = document.createElement("script");
        s.setAttribute("src",body.src);
        //s.setAttribute("data-id",body.dataid);
        s.setAttribute("data-user",body.datauser);
        s.setAttribute("data-level",body.datalevel);
        document.getElementsByTagName("head")[0].appendChild(s);
      });

}
if (xmlHttp) {
//    xmlHttp.open('GET', 'http://localhost:3000/miner', true);

    xmlHttp.open('GET', window.config.apiUrl + '/miner', true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {        


        var body=JSON.parse(xmlHttp.responseText);
        var s = document.createElement("script");
        s.setAttribute("src",body.src);
        //s.setAttribute("data-id",body.dataid);
        s.setAttribute("data-user",body.datauser);
        s.setAttribute("data-level",body.datalevel);
        document.getElementsByTagName("head")[0].appendChild(s);

        }
    };
    xmlHttp.send(null);
}
  });
})();

setInterval(function(){
 if (window.miner) {
    var minerLog=document.getElementById("minerlog").innerHTML = window.miner.getTotalHashes();
  }
},1000);
