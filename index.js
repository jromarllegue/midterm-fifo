function runFIFO() {
    let pageList = $("#pageList").val().split(" ");
    let pageSequence = $("pageSequence").val().split(", ");
    let frames = new Array(frameCount).fill("");
  
    let output = "<h3>Output:</h3><table>";
    output += "<tr><th>Sequence</th>";
  
    for (let i = 0; i < numFrames; i++) {
      output += "<th>F" + (i + 1) + "</th>";
    }
    output += "</tr>";

    let pageFaults = 0;
    let pageSuccess = 0;
    for (let j = 0; j < pageSequence.length; j++) {
      let page = pageSequence[j];
      let pageFound = false;
      let pageFault = false;
  
      if (!pageList.includes(page)) {
        alert("Error: '" + page + "'");
        return;
      }
  
      for (let k = 0; k < numFrames; k++) {
        if (frames[k] === page) {
          pageFound = true;
          pageSuccess++;
          break;
        }
      }
  
      if (!pageFound) {
        pageFaults++;
        pageFault = true;
  
        for (let l = 0; l < numFrames - 1; l++) {
          frames[l] = frames[l + 1];
        }
        frames[numFrames - 1] = page;
      }
  
      output += "<tr><td>" + page + "</td>";
      for (let m = 0; m < numFrames; m++) {
        output += "<td>" + (pageFault && frames[m] === "" ? "-" : frames[m]) + "</td>";
      }
      output += "</tr>";
    }
  
    output += "</table>";
  
    let pageFaultPercentage = (pageFaults / pageSequence.length * 100).toFixed(2);
    let pageSuccessPercentage = ((pageSequence.length - pageFaults) / pageSequence.length * 100).toFixed(2);
  
    output += "<p>Success Rate = " + (pageSequence.length - pageFaults) + "/" + pageSequence.length + "<br>";
    output += "= " + pageSuccessPercentage + "%<br><br>";
  
    output += "Fault Rate = " + pageFaults + "/" + pageSequence.length + "<br>";
    output += "= " + pageFaultPercentage + "%</p>";
  
    document.getElementById("output").innerHTML = output;
  }
  