var current_tab='previouswork';

function open_previouswork(){
	event.preventDefault();
    document.getElementById('previouswork_textbox_container').style.display = 'block';
    document.getElementById('proposals_textbox_container').style.display = 'none';
	      
    current_tab='previouswork';

    var x=document.getElementById('previouswork_button');
    x.style.backgroundColor = '#EB5255';
    x.style.color = '#FAFAFA';
	      
    var y=document.getElementById('proposals_button');
    y.style.backgroundColor = '#FAFAFA';
    y.style.color = '#596E78';
}

function open_proposal(){
	event.preventDefault();
    document.getElementById('proposals_textbox_container').style.display = 'block';
    document.getElementById('previouswork_textbox_container').style.display = 'none';

    current_tab='proposal';
      
    var x=document.getElementById('proposals_button');
    x.style.backgroundColor = '#EB5255';
    x.style.color = '#FAFAFA';

    var y=document.getElementById('previouswork_button');
    y.style.backgroundColor = '#FAFAFA';
    y.style.color = '#596E78';
}

var limit=10;
var proposal_count=1;
var previouswork_count=1;

function add_more() {
	event.preventDefault();

	if(current_tab=='proposal'){
		if(proposal_count==limit){
			alert('You have reached the max limit of' + limit + ' entries');
		}
		else{
			proposal_count++;
			var newdiv=document.createElement('div');
			newdiv.innerHTML="Entry number " + proposal_count + "<br><textarea type='text' placeholder='Add a brief and precise description of what all you propose to do in the mentioned field of work....' ></textarea>";
			document.getElementById("proposals_textbox_container").appendChild(newdiv);
		}
	}

	if(current_tab=='previouswork') {
		if(previouswork_count==limit){
			alert('You have reached the max limit of' + limit + ' entries');
		}
		else{
			previouswork_count++;
			var newdiv=document.createElement('div');
			newdiv.innerHTML="Entry number " + previouswork_count + "<br><textarea type='text' placeholder='Add a brief and precise description of what all you propose to do in the mentioned field of work....' ></textarea>";
			document.getElementById("previouswork_textbox_container").appendChild(newdiv);
		}
	}
}
