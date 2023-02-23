/*
Adds a news row entry to the table when add task button is clicked
*/
 function addRow(){

        var table = document.getElementById("table")
        var newRow = table.insertRow(-1)
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(1);
        cell1.innerHTML = "Add a deadline";
        cell2.innerHTML = "Add new task";
        cell3 .innerHTML ="done";
        // table.appendChild(newRow)

}