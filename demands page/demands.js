var popup=document.getElementById('popup_background');

function display_popup_background() {
	popup.style.display = 'block'; 
}

window.onclick=function(event){
	if (event.target==popup) {
		popup.style.display = 'none';
	}
}

function seeMore(){
	var prev_p=document.activeElement.previousElementSibling;
	var dots=prev_p.getElementsByClassName("dots")[0];
	var more=prev_p.getElementsByClassName('more_content')[0];
	if(dots.style.display = 'inline-block'){
		document.activeElement.style.display = 'none';
		dots.style.display = 'none';
		more.style.display = 'inline-block';
	}
	else{
		dots.style.display = 'inline-block';
		more.style.display = 'none';
	}
}