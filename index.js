let content = document.querySelector('.congrats');
const tableVal = document.getElementById("table");
let table = tableVal.tBodies[0];

/*
Adds a news row entry to the table when add task button is clicked
 */
 function addRow(){
        var newRow = table.insertRow(-1)
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        cell1.innerHTML = ' <input id = "date" type = "date">';
        cell1.contentEditable = true;
        cell2.innerHTML = ' Add new task here';
        cell2.contentEditable = true;
        cell3 .innerHTML = ' <button id = "delete" onclick = "toggleRow(this)">✓</button>';
        table.appendChild(newRow)  
        content.style.display = 'none' 
              
 }
 
function sortTableVals(column, tag){
       
       const rowVal = Array.from(table.querySelectorAll('tr'));
       const dirPath = 1;
       const sortedrows = rowVal.sort((a,b) => {
              const aVal = a.querySelector(`td:nth-child(${column})`);
              const bVal = b.querySelector(`td:nth-child(${column})`);
              let aCol;
              let bCol;
              if (tag){
                      aCol = aVal.querySelector('input').value;
                      bCol = bVal.querySelector('input').value;
              } else{
                      aCol = aVal.textContent.toLowerCase().trim();
                      bCol = bVal.textContent.toLowerCase().trim();}

              return(aCol > bCol) ? 1*dirPath : -1*dirPath;
       });
       
       clearTable();
       table.append(...sortedrows);
}



/**
 * A function that toggles row when button is pressed
 */

function toggleRow(v){
       table.removeChild(v.parentNode.parentNode);
       if(table.rows.length === 0){
              content.style.display = 'block'
       }
}

let arrayVal;

/**
 * Filter table
 */
const originalTable = table.cloneNode(true);
Object.freeze(originalTable);

function filterTable(dateVal){
       const rowVal = Array.from(table.querySelectorAll('tr'));

       arrayVal = rowVal;
       // Somehow restore the original table PS: not working
       if(dateVal.value === ''){
              clearTable();
              table.append(...arrayVal);

       } else {
       
       const filteredRows = rowVal.filter(a => a.querySelector(`td:nth-child(${1})`)
       .querySelector('input').value === dateVal.value)
       clearTable();
       table.append(...filteredRows);
       }
}

/**
 * Clears the rows in the table when called
 */

var clearTable = () => {
       while(table.firstChild){
              table.removeChild(table.firstChild);
       }
}

/**
 * Restores the table to original entries when called.
 * originalTable var mutates so not working 
 */

var restoreTable = () => table.parentNode.replaceChild(originalTable, table);
