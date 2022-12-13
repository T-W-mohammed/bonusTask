let w = document.querySelector("header nav").offsetHeight;
let content = document.querySelector("header .content"),
	button = document.querySelector('header nav .container .button'),
	ul = document.querySelector('header nav .container ul');


//<i class="fa fa-solid fa-xmark"></i>
button.onclick = ()=>{
	button.classList.toggle('active');
	if(button.classList.contains('active')){
		button.innerHTML = 'X';
		button.style.cssText = 'cursor:pointer;font-weight:bolder;font-family: cursive;'; 
		ul.style.top='86px';
	}else{
		button.innerHTML = '<i class="fa fa-bars"></i>';
		ul.style.cssText='top:-100%;opacity:1';
	}
}

