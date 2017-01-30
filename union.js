
var newArray = [];


var union = (array1, array2)=>{
	var longestArray = Math.max(array1.length, array2.length);
		for(var i = 0; i < longestArray; i ++){
		newArray.push(array1[i]);
			if(array2.indexOf != -1){
				newArray.push(array2[i]);

			}

		}
	// 
};



console.log(union([1, 2, 3], [100, 2, 1, 10]));
console.log(newArray);