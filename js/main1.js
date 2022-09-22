const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function Elogin(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	console.log(email);
	console.log(password);
	window.location.href = "home.html";
	if(email == "lkdharun@gmail.com" && password == "123456"){
		window.location.href = "home.html";
	}
}

function checkmail(){
    strRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    val=document.getElementById("email").value.trim();
    input=document.getElementById("email");

    if(document.getElementById("email").value.trim().length == 0){
       input.classList.add("fail");
       input.classList.remove("success");
        document.getElementById("remail").innerHTML="Field cannot be Empty";
    }
        else if(!val.match(strRegExp)){
           input.classList.remove("success");
        input.classList.add("fail");
        document.getElementById("remail").innerHTML = "Incorrect Format";
        }
    else{
        input.classList.remove("fail");
        input.classList.add("success");
        document.getElementById("remail").innerHTML="";
    }
}