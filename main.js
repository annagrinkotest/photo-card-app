document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#editButton").addEventListener("click", () => { 
	    
		document.querySelector(".editForm").style.display = "block";
		document.querySelector(".mainCard").style.display = "none";				
			
			
			  
			});
    document.querySelector("#canselButton").addEventListener("click", () => { 
	    
		document.querySelector(".editForm").style.display = "none";
		document.querySelector(".mainCard").style.display = "block";				
			
			
			  
			});
	document.querySelector("#saveButton").addEventListener("click", () => { 
	    
		var imageUser=document.getElementById("imageField").value;
		var avatarUser=	document.getElementById("avatarField").value;
		var nameUser=	document.getElementById("nameField").value;
		var nickUser=	document.getElementById("nicknameField").value;
		var locationUser=	document.getElementById("mapField").value;
		var dateUser=	document.getElementById("dateField").value;
		var postUser=	document.getElementById("descriptionField").value;
		
		document.querySelector(".userImage img").src= imageUser;
		document.querySelector(".userAvatar img").src= avatarUser;
		document.querySelector("#userName").textContent = nameUser;
		document.querySelector("#userNick").textContent = nickUser;
		document.querySelector(".userPost a").href = locationUser;
		document.querySelector(".userPost time").textContent = dateUser;
		document.querySelector("#post").textContent = postUser;
		
		document.querySelector(".editForm").style.display = "none";
		document.querySelector(".mainCard").style.display = "block";		
			  
			});
		
		
});