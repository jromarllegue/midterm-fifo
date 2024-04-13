function createResult() {
    let pageCount = parseInt($("#pageCount").val());
    let frameCount = parseInt($("#frameCount").val());

    let pageList = $("#pageList").val().split(" ");
    let pageSequence = $("#pageSequence").val().split(", ");
    
    let frames = new Array(frameCount).fill("");
    let pages = "";
    let table = "<table>" + 
                    "<tr>" +
                        "<th> </th>";
  
    for (let i = 0; i < frameCount; i++) {
      table += "<th>F"+ (i+1) +"</th>";

    }
    table += "</tr>";

    let faults = 0;
    let successes = 0;
    
    let exists = false;
    let change = false;
    
    for (let i = 0; i < pageSequence.length; i++) {
        pages = pageSequence[j];

        for (let j = 0; j < frameCount; j++) {
            if (frames[j] === pages) {
                exists = true;
                successes++;

                break;
            }
        }
    
        if (!exists) {
            faults++;
            change = true;
    
            for (let k = 0; k < frameCount - 1; k++) {
                frames[k] = frames[k + 1];

            }
            frames[frameCount - 1] = pages;
        }
    
        table += "<tr>" + 
                    "<td>" + pages + "</td>";

        for (let l = 0; l < frameCount; l++) {
            table += "<td>" + (change && frames[l] === "" ? "-" : frames[l]) + "</td>";

        }
        table += "</tr>";
    }
    table += "</table>";
  
    let percentFault = (faults / pageSequence.length * 100).toFixed(2);
    let percentSuccess = ((pageSequence.length - faults) / pageSequence.length * 100).toFixed(2);
  
    let output = "<p>";
    output += "Success Rate: " + (pageSequence.length - faults) + "/" + pageSequence.length + " = " + percentSuccess + "%<br>";
    output += "Fault Rate: " + faults + "/" + pageSequence.length + " = " + percentFault + "%</p>";

    $("$result").html(table + output);
}