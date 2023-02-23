/*
Adds a news row entry to the table when add task button is clicked
// */
 function addRow(){

        var table = document.getElementById("table")
        var newRow = table.insertRow(-1)
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = '<input id = "date" type = "date">';
        cell1.contentEditable = true;
        cell2.innerHTML = 'Add new task here';
        cell2.contentEditable = true;
        cell3 .innerHTML = '<button id = "delete" onclick = "deleteRow()">✓</button>';
        table.appendChild(newRow)

 }

 /**
  * Toggle visibility of the congrats message
  */
function toggleCongrats(num){}

/**
 * A function that toggle visibility of row
 */

function toggleRow(){}