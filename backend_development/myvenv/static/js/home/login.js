
function button_click_voter() {
	var x = document.getElementById('voter_button');
	x.style.backgroundColor = '#EB5255';
	x.style.color = '#FAFAFA';
	var y = document.getElementById('candidate_button');
	y.style.backgroundColor = '#FAFAFA';
	y.style.color = '#596E78';
}

function button_click_candidate() {
	var x = document.getElementById('candidate_button');
	x.style.backgroundColor = '#EB5255';
	x.style.color = '#FAFAFA';
	var y = document.getElementById('voter_button');
	y.style.backgroundColor = '#FAFAFA';
	y.style.color = '#596E78';
}

function open_login() {
	document.getElementById('login_form_box').style.display = 'block';
	document.getElementById('signup_form_box').style.display = 'none';

	var x = document.getElementById('login_button_selector');
	x.style.backgroundColor = '#EB5255';
	x.style.color = '#FAFAFA';

	var y = document.getElementById('signup_button_selector');
	y.style.backgroundColor = '#FAFAFA';
	y.style.color = '#596E78';
}

function open_signup() {

	document.getElementById('signup_form_box').style.display = 'block';
	document.getElementById('login_form_box').style.display = 'none';

	var x = document.getElementById('signup_button_selector');
	x.style.backgroundColor = '#EB5255';
	x.style.color = '#FAFAFA';

	var y = document.getElementById('login_button_selector');
	y.style.backgroundColor = '#FAFAFA';
	y.style.color = '#596E78';
}

function show_dropdownprofile() {
	var x = document.getElementById("dropdown_profile");
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
var ques = document.getElementsByClassName('question');
var ques_display = document.getElementById("question_display");
var i;

ques_display.innerHTML = ques[0].textContent;

//adding css to all questions
for (i = 0; i < ques.length; i++) {
	ques[i].addEventListener('click', function () {
		event.preventDefault();
		for (var i = 0; i < ques.length; i++) {
			ques[i].classList.remove('active');
		}
		this.classList.toggle('active');
		ques_display.innerHTML = this.textContent;
	})
}

// var cand_tag=document.getElementsByClassName('candidate_tag');
// var j;

// //adding css to candidate tags
// for(j=0;j<cand_tag.length;j++)
// {
// 	cand_tag[j].addEventListener('click', function(){
// 		this.classList.toggle('active');
// 	})
// }