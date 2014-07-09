var fileName;

function init()
{
	fileName = document.getElementById("fileName").value;
}

function createFile(text)
{
	var txtFile = new XMLHttpRequest();
		txtFile.open("GET", "php/createFile.php?name="+fileName+"&text="+document.getElementById("outputText").value, true);
		txtFile.onreadystatechange = function(data) {
  	if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (txtFile.status === 200) {  // Makes sure it's found the file.
		console.log(txtFile.responseText)
    }
  }
}

        txtFile.send(null);
}

function load()
{
    console.log("load File ->  " + fileName)

	var txtFile = new XMLHttpRequest();
		txtFile.open("GET", "json/"+fileName, true);
		txtFile.onreadystatechange = function() {
  	if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    if (txtFile.status === 200) {  // Makes sure it's found the file.
      		allText = txtFile.responseText;
      		lines = txtFile.responseText.split("\n"); // Will separate each line into an array
    		// document.getElementById("highscoreTable").innerHTML = lines;
     		// alert(lines.length)
		document.getElementById("outputText").value = lines;
//    	 for(i = 0; i < lines.length; i++)//Add a </p> element for each line
//     	{
//     		//alert(lines[i])
//     		var node = document.createElement("p");
//     			node.innerHTML = i+" "+lines[i];
//
//			console.log(node);
//
//		}
    }
  }
}
txtFile.send(null);
}


function save()
{
//    alert(document.getElementsByTagName("textarea")[0].value)

    createFile();

	console.log("save File ->  " + fileName)

    var animal = {name: document.getElementsByTagName("textarea")[0].value};
    var json = JSON.stringify(animal); //json is a JSON string
}
