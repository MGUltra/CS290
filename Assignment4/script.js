/***************************************************************
* Name: Matt Garner
*	Date: 10/30/2016
*	Class: CS290 - Web Development
* HW Assignment: DOM and Events
* Description: 
****************************************************************/



/****************** TABLE AND BUTTON CONSTRUCTORS *************************/

/******************************************************************
 * Function name: createTable
 * paremeters: none
 * description: This function creates a 4x4 table with 1 header row
 * and three additional rows. A nested loop is used to apply text to the
 * cells in the table. 
 * ****************************************************************/

function createTable()
{
	
	var docB   = document.body;
	
	// create table
	var table  = document.createElement('table');
	
	// create table body
	var tableB = document.createElement('tbody');

  
  // create header row
	
	var tRow = document.createElement('tr');
	
	for(var i = 0; i < 4; i++)
	{
		var headerCell = document.createElement('th');
		
		var headerText = document.createTextNode("Header " + (i + 1));
		
		
		// append text node to cell
		headerCell.appendChild(headerText);
		
		// append cell to table row
		tRow.appendChild(headerCell);
		
	}
	
	// append header row to table body
	tableB.appendChild(tRow);
	
	
	
	// create additional rows
	
	for(var x = 0; x < 3; x++)
	{
		var nextRow = document.createElement('tr');
		
		for(var y = 0; y < 4; y++)
		{
			var nextCell = document.createElement('td');
			
			var cellText = document.createTextNode((y+1) + ', ' + (x+1));
			
			// give each cell a unique ID based on coordinates
			var cellTextId = (y+1) + ', ' + (x+1);
		
			// set attribute id
			nextCell.setAttribute('id', cellTextId);
			
			// append text node to cell
			nextCell.appendChild(cellText);
		
			// append cell to table row
			nextRow.appendChild(nextCell);
			
		}
		
		// append row to table body
		tableB.appendChild(nextRow);
		
	}

	// apend table body to table
	table.appendChild(tableB);
	
	// apend table to document body
  docB.appendChild(table);
	
	// set table border attribute
	table.setAttribute("border", "1px");
	
}



/******************************************************************
 * Function name: createButtons
 * paremeters: none
 * description: This function creates elements for each directional
 * as well as mark cell button. The elements are created, assigned ids,
 * given text nodes for labels, and then appended to the document body.
 * ****************************************************************/

function createButtons()
{
	
	// create elemenets
	
	var moveCellUp    = document.createElement("button");
	
	var moveCellDown  = document.createElement("button");
	
	var moveCellLeft  = document.createElement("button");
	
	var moveCellRight = document.createElement("button");
	
	var markCell      = document.createElement("button");

	
	// assign ids
	
	moveCellUp.id    = "moveUp";
	
	moveCellDown.id  = "moveDown";
	
	moveCellLeft.id  = "moveLeft";
	
	moveCellRight.id = "moveRight";
	
	markCell.id      = "markCell";
	
	
	// create text nodes
	
	var moveCellUpText    = document.createTextNode("Up");
	
	var moveCellDownText  = document.createTextNode("Down");
	
	var moveCellLeftText  = document.createTextNode("Left");
	
	var moveCellRightText = document.createTextNode("Right");
	
	var markCellText      = document.createTextNode("Mark Cell");
	
	
	// append text nodes
	
	moveCellUp.appendChild(moveCellUpText);
	
	moveCellDown.appendChild(moveCellDownText);
	
	moveCellLeft.appendChild(moveCellLeftText);
	
	moveCellRight.appendChild(moveCellRightText);
	
	markCell.appendChild(markCellText);
	
	
	// append button elements to document body
	
	document.body.appendChild(moveCellUp);
	
	document.body.appendChild(moveCellDown);
	
	document.body.appendChild(moveCellLeft);
	
	document.body.appendChild(moveCellRight);
	
	document.body.appendChild(markCell);
	
	
}



/************** MOVEMENT AND TABLE INTERACTION FUNCTIONS ************/

/******************************************************************
 * Function name: moveCellUp
 * paremeters: none
 * description: This function is used to move up one cell. The current
 * location is retrieved using the element id and the global variables
 * for the current column and rows. A call to edgeCheck is made to verify
 * if a move up is possible. the border style of the current cell is reverted
 * to match the others and the border style of the new cell is widened. The
 * global variable is updated accordingly.
 * ****************************************************************/

function moveCellUp()
{
	var curLoc = document.getElementById(currentColumn +", " + currentRow);
	
	if(edgeCheck("up") == false)
	{
		return;
	}
	else
	{
		curLoc.style.borderWidth = "1px";
		
		currentRow -= 1;
		
		var newLoc = document.getElementById(currentColumn +", " + currentRow);
		
		newLoc.style.borderWidth = "3px";
	
	}
}


/******************************************************************
 * Function name: moveCellDown
 * paremeters: 
 * description: This function is used to move down one cell. The current
 * location is retrieved using the element id and the global variables
 * for the current column and rows. A call to edgeCheck is made to verify
 * if a move up is possible. the border style of the current cell is reverted
 * to match the others and the border style of the new cell is widened. The
 * global variable is updated accordingly.
 * ****************************************************************/

function moveCellDown()
{
	var curLoc = document.getElementById(currentColumn +", " + currentRow);
	
	if(edgeCheck("down") == false)
	{
		return;
	}
	else
	{
		curLoc.style.borderWidth = "1px";
		
		currentRow += 1;
		
		var newLoc = document.getElementById(currentColumn +", " + currentRow);
		
		newLoc.style.borderWidth = "3px";
	
	}
}


/******************************************************************
 * Function name: moveCellLeft
 * paremeters: none
 * description: This function is used to move left one cell. The current
 * location is retrieved using the element id and the global variables
 * for the current column and rows. A call to edgeCheck is made to verify
 * if a move up is possible. the border style of the current cell is reverted
 * to match the others and the border style of the new cell is widened. The
 * global variable is updated accordingly.
 * ****************************************************************/

function moveCellLeft()
{
	var curLoc = document.getElementById(currentColumn +", " + currentRow);
	
	if(edgeCheck("left") == false)
	{
		return;
	}
	else
	{
		curLoc.style.borderWidth = "1px";
		
		currentColumn -= 1;
		
		var newLoc = document.getElementById(currentColumn +", " + currentRow);
		
		newLoc.style.borderWidth = "3px";
	
	}
}



/******************************************************************
 * Function name: moveCellRight
 * paremeters: none
 * description: This function is used to move right one cell. The current
 * location is retrieved using the element id and the global variables
 * for the current column and rows. A call to edgeCheck is made to verify
 * if a move up is possible. the border style of the current cell is reverted
 * to match the others and the border style of the new cell is widened. The
 * global variable is updated accordingly.
 * ****************************************************************/

function moveCellRight()
{
	var curLoc = document.getElementById(currentColumn +", " + currentRow);
	
	if(edgeCheck("right") == false)
	{
		return;
	}
	else
	{
		curLoc.style.borderWidth = "1px";
		
		currentColumn += 1;
		
		var newLoc = document.getElementById(currentColumn +", " + currentRow);
		
		newLoc.style.borderWidth = "3px";
	
	}

}






/******************************************************************
 * Function name: markCell
 * paremeters: none
 * description: The current cell is retrieved through its id. The 
 * background color is then changed to yellow.
 * ****************************************************************/

function markCell()
{
	var curLoc = document.getElementById(currentColumn +", " + currentRow);
	
	curLoc.style.backgroundColor = "yellow";
}





/******************************************************************
 * Function name: edgeCheck
 * paremeters: direction
 * description: 
 * ****************************************************************/

function edgeCheck(direction)
{
	if(direction == "up")
	{
		if(currentRow == 1)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else if(direction == "down")
	{
		if(currentRow == 3)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else if(direction == "left")
	{
		if(currentColumn == 1)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	else if(direction == "right")
	{
		if(currentColumn == 4)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}



// global location Variables

var currentRow    = 1;

var currentColumn = 1;



// Call Constructors

createTable();

createButtons();


// Initialize a current cell

var startingLocation = document.getElementById("1, 1");

startingLocation.style.borderWidth = "3px";


// initialize buttons

document.getElementById("moveUp").addEventListener("click", moveCellUp);

document.getElementById("moveDown").addEventListener("click", moveCellDown);

document.getElementById("moveLeft").addEventListener("click", moveCellLeft);

document.getElementById("moveRight").addEventListener("click", moveCellRight);

document.getElementById("markCell").addEventListener("click", markCell);


