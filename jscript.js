var dataSet = [];
var labelSet = [];
var labelSize;
var dataSize;
var hintSwitch = 0;

// call function to set values when button is pressed
function addVals () {
//   reset values and type a blank to effectively clear screen
  dataSet = [];
  document.getElementById("special").innerHTML="";
  // var chartName = prompt("Please enter a chart name")
    datasize = prompt("How many bars?")
//   create loop to append array to user specified size
  var m = 0
  for (i=0; i < datasize; i++) {
    m++
  var a = prompt("Enter a value for bar # " + m)
//   add custom user defined value to array
    dataSet.push(a);
//     for debug purposes only
  console.log("Numbers:" +dataSet.join(","));
  }
}

// an event listener that will effectively apply the user inputs to visuals using d3 any time the screen is clicked
window.addEventListener("click", function addGraphs () {
//   an efficient way to determine the largest value within an array
    var sizing = Math.max(...dataSet);
d3.select(".chart")
  .selectAll("div")
  .data(dataSet)
    .enter()
    .append("div")
    .style("width", function(b) { return b + "px"; })
        .text(function(b) { return b; });
    d3.select(".contain").style("border", "3px solid grey")
  
      // this is a way of sizing the box around the graph to be proportional to the largest array value plus a little extra
  d3.select(".contain").style("width", (sizing + 35) +"px");
} )


  function addLabs() {
    labelSet = [];
  document.getElementById("specialLabel").innerHTML="";
 
    var n = 0
    for (i=0; i < datasize; i++) {
      n++
      var a = prompt("Enter Label for bar " + n)
      labelSet.push(a);
    }
    
  }

  window.addEventListener("click", function addNames () {
    d3.selectAll(".labels")
    .selectAll("div")
    .data(labelSet)
    .enter()
    .append("div")
      .text(function (c) {return c});
    // d3.select(".labels").style("margin", "10px"; "padding", "5px");
  })

var field, theDiv, zoomLevel, field2, subtitle;

function init() {
  field = document.querySelector("#inputField");
  theDiv = document.querySelector("#theDiv");
  subtitle = document.querySelector("#subtitle");
  field2 = document.querySelector("#subField");
}
// The next function is called each type a key has been
// typed in the input field
function showWhatWeTyped() {
  // fill the div with the content of the input field
  theDiv.innerHTML = field.value;
  subtitle.innerHTML = field2.value; 
}

function zoomSet() {
  zoomLevel = document.querySelector("#zoomer").value;
//   Grab current Slider value
   document.getElementsByTagName("body")[0].style.zoom = zoomLevel;
//   assign Body element zoomlevel to be = to current slider value
}

function hideFunc () {
    hintSwitch += 1;
    if (hintSwitch%2 == 0) 
      //simple logic to simulate an on/off switch
    {
     document.querySelector('#customTitle').style.display= "";
    document.querySelector('#zoomer').style.display= "";
    document.querySelector('#firstB').style.display= "";
    document.querySelector('#secondB').style.display= "";
    document.querySelector('#thirdB').style.opacity= "1";
      document.querySelector('#snap').style.opacity= "1";
      //values set for ON position
    }
    else {
      document.querySelector('#customTitle').style.display= "none";
       document.querySelector('#zoomer').style.display= "none";
    document.querySelector('#firstB').style.display= "none";
    document.querySelector('#secondB').style.display= "none";
      document.querySelector('#thirdB').style.opacity= "0.2";    
       document.querySelector('#snap').style.opacity= "0.2"; 
      // Values to be set for OFF position
  }
}


var takeScreenShot = function() {
  html2canvas(document.body, {
    onrendered: function(canvas) {
      $('#test').attr('href', canvas.toDataURL("image/png"));
      $('#test').attr('download', 'Simple Bar Graph.png');
      $('#test')[0].click();
      //       use html2canvas to grab the body content after it has been 
      // rendered, and use jquery to save the body content as a png.
    }
  });
}