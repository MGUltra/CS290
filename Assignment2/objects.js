// Name: Matt Garner
// Date: 10/16/16
// Description: CS290 - Activity: JS Objects

function deepEqual(objectA, objectB)
{
	
	// test if both parameters are objects and not null values
	if((typeof(objectA) == "object") && (typeof(objectB) == "object") && (objectA != null) && (objectB != null))
	{
		// if they are both objects, test each property of the objects
		
		// create variables for the amount of properties in each object
		var sizeObjectA = 0;
		var sizeObjectB = 0;
	
		// count the amount of properties in each object, increment sizes for properties in object
		// if property count differs, return false.
		
		for(var propA in objectA)
		{
			sizeObjectA++;
		}
		
		for(var propB in objectB)
		{
			sizeObjectB++;
		}
		
		if(sizeObjectA != sizeObjectB)
		{
			return false;
		}
		
		// get property names in arrays utilizing object.keys()
		
		var namesObjectA = object.keys(objectA);
		var namesObjectB = object.keys(objectB);
		
		// compare property names, return false is mismatch
		
		for(var i = 0, i < sizeObjectA; i++)
		{
			if(namesObjectA[i] != namesObjectB[i])
			{
				return false;
			}
		}
		
		// compare properties with recursive call if names match
		
		for(var propA in objectA)
		{
			if(deepEqual(objectA[propA], objectA[propA]) == false)
			{
				return false;
			}
		}

		// if all tests are passed, return true
		return true;
	}
	else
	{
		// if parameters are not both objects and not both null, return result applying ===
		return objectA === objectB;
	}
}