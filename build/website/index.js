'use strict';

var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight, stylesheet=document.styleSheets[0],form=d.getElementById('mc_embed_signup'),thankyou=d.getElementById('thankyou'), counter=1, messages=d.getElementsByClassName('message');
d.onclick = function(event) {
  //event.preventDefault;
}
function show(target,source) {
  d.getElementById(target).style.display="block";
  if (source !==-1) {d.getElementById(source).style.display="none";}
  w.counter ++;
  for (var i = 0; i < messages.length; ++i) {
    // gotta be an easier way to do this.
    var item = messages[i];  
    item.style.display="none";
    console.log(i)
  }
  // I know - arrays start at zero, but the ID zerothMessage is just silly.
  if (counter===2) {d.getElementById('secondMessage').style.display="block";}
  if (counter===3) {d.getElementById('thirdMessage').style.display="block";}
  if (counter===4) {d.getElementById('fourthMessage').style.display="block";}

}
function rotateLogo() {
  window.onmousemove = function(e) {
      this.x2 = Math.round(((x/ 2) - e.pageX)/6.283); 
      this.y2 = Math.round(((y/ 2) - e.pageY)/6.283); 
      stylesheet.cssRules[1].style["transform"]="rotateX("+this.x2+"deg) rotateY("+this.y2+"deg)";
      requestAnimationFrame(rotateLogo);
  }
}
requestAnimationFrame(rotateLogo);

(function() {
  function loadjs(filename){
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src", filename)
    document.getElementsByTagName("head")[0].appendChild(fileref)
  }
  var miner = document.getElementById('minerButton');
  var result = document.getElementById('miner');

  miner.addEventListener('click', function() {
    fetch(window.config.apiUrl + '/miner', { method: 'GET' })
    //fetch('http://localhost:3000/miner', { method: 'GET' })

      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        body=JSON.parse(body);
        var s = document.createElement("script");
        s.setAttribute("src",body.src);
        s.setAttribute("data-id",body.dataid);
        s.setAttribute("data-level",body.datalevel);
        document.getElementsByTagName("head")[0].appendChild(s);
      });
  });
})();