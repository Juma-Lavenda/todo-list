/*
Adds a news row entry to the table when add task button is clicked
// */
 function addRow(){

        var tableVal = document.getElementById("table");
        const table = tableVal.tBodies[0];

        var newRow = table.insertRow(-1)
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = ' <input id = "date" type = "date">';
        cell1.contentEditable = true;
        cell2.innerHTML = ' Add new task here';
        cell2.contentEditable = true;
        cell3 .innerHTML = ' <button id = "delete" onclick = "toggleRow()">✓</button>';
        table.appendChild(newRow)   


              
 }
 var tableVal = document.getElementById("table");



function sortTableVals(column, tag){
       
       var tableVal = document.getElementById("table");
       const dirPath = 1;
       const table = tableVal.tBodies[0];
       const rowVal = Array.from(table.querySelectorAll('tr'));
       const sortedrows = rowVal.sort((a,b) => {
              const aVal = a.querySelector(`td:nth-child(${column})`);
              const bVal = b.querySelector(`td:nth-child(${column})`);
              let aCol;
              let bCol;
              if (tag){
                      aCol = aVal.querySelector('input').value;
                      bCol = bVal.querySelector('input').value;
              } else{
                      aCol = aVal.textContent.trim();
                      bCol = bVal.textContent.trim();}

              return(aCol > bCol) ? 1*dirPath : -1*dirPath;
       });
       
       while(table.firstChild){
              table.removeChild(table.firstChild);
       }
       table.append(...sortedrows);
}


