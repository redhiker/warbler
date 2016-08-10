function getUsers() {
	
	var address = "http://localhost:3000/allusers";	
	
	var xhttp;
	
	xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			
			
			
			// Remove previous images....
			
			var listTag = document.getElementById("listTag");
			
			listTag.innerHTML = '';
			
			// Format new images...
			
			var data = JSON.parse(xhttp.responseText);			
			
			alert(data);			
		}
	
	};
	
	xhttp.open("GET",address, true);
	
	xhttp.send();
}

getUsers();