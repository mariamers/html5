function makeElementDraggable(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  const roupa1 = document.getElementById("roupa1");
  const roupa2 = document.getElementById("roupa2");

  makeElementDraggable(roupa1);
  makeElementDraggable(roupa2);

  // Frases aleatórias

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}
var quotes = [
    "sei lá, achei meio horroroso",
    "até que não é tão ruim",
    "tá, você pode ter razão",
    "você me odeia? está horroroso!!!",
    "ai, se fosse para vestir essa monstruosidade, eu escolheria sozinha!"    
  ];

document.getElementById("random-phrase").addEventListener("click", function() {
  var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
  document.getElementById("random-phrase").innerHTML = q;     
});