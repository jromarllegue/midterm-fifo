function runFIFO() {
    var numPages = parseInt(document.getElementById("numPages").value);
    var pageList = document.getElementById("pageList").value.split(" ");
    var pageSequence = document.getElementById("pageSequence").value.split(", ");
    var numFrames = parseInt(document.getElementById("numFrames").value);
  
    var frames = new Array(numFrames).fill("");
    var pageFaults = 0;
    var pageSuccess = 0;
  
    var output = "<h3>Output:</h3><table id='table'>";
    output += "<tr><th>Sequence</th>";
  
    for (var i = 0; i < numFrames; i++) {
      output += "<th>F" + (i + 1) + "</th>";
    }
    output += "</tr>";
  
    for (var j = 0; j < pageSequence.length; j++) {
      var page = pageSequence[j];
      var pageFound = false;
      var pageFault = false;
  
      if (!pageList.includes(page)) {
        alert("Error: '" + page + "'");
        return;
      }
  
      for (var k = 0; k < numFrames; k++) {
        if (frames[k] === page) {
          pageFound = true;
          pageSuccess++;
          break;
        }
      }
  
      if (!pageFound) {
        pageFaults++;
        pageFault = true;
  
        for (var l = 0; l < numFrames - 1; l++) {
          frames[l] = frames[l + 1];
        }
        frames[numFrames - 1] = page;
      }
  
      output += "<tr><td>" + page + "</td>";
      for (var m = 0; m < numFrames; m++) {
        output += "<td>" + (pageFault && frames[m] === "" ? "-" : frames[m]) + "</td>";
      }
      output += "</tr>";
    }
  
    output += "</table>";
  
    var pageFaultPercentage = (pageFaults / pageSequence.length * 100).toFixed(2);
    var pageSuccessPercentage = ((pageSequence.length - pageFaults) / pageSequence.length * 100).toFixed(2);
  
    output += "<p>Success Rate = " + (pageSequence.length - pageFaults) + "/" + pageSequence.length + " = " + pageSuccessPercentage + "%<br><br>";
    output += "Fault Rate = " + pageFaults + "/" + pageSequence.length + " = " + pageFaultPercentage + "%</p>";
  
    document.getElementById("output").innerHTML = output;
  }
  