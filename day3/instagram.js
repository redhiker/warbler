function getInstagram () {
	
	var selectedName = document.getElementById("selectName").value;	
	
	var address = "http://localhost:8080/" + selectedName;	
	
	var xhttp;
	
	xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			
			
			
			// Remove previous images....
			
			var divImage = document.getElementById("imageDiv");
			
			divImage.innerHTML = '';
			
			// Format new images...
			
			var data = JSON.parse(xhttp.responseText);			
			
			for (var i in data) {
				var img = document.createElement('img');
				img.src = "http://localhost:8080/images/"+data[i].url;
				img.title = data[i].description;
				
				divImage.appendChild(img);			
			}			
		}
	
	};
	
	xhttp.open("GET",address, true);
	
	xhttp.send();
}

function handleFilter() {
	
	var filteredImageArray = [];
	
	var filterString = document.getElementById('indicateFilter').value;
	
	for ( var ii = 0; ii < imagesArr.length; ii++ ) {
		if ( imagesArr[ii].description.includes(filterString) ) {
			filteredImageArray.push(imagesArr[ii]);
		}
	}
	//renderImages(filteredImageArr);
	
}