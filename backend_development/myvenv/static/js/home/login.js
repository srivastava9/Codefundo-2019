
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
