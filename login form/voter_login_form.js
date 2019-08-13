var limit=10;

var demand_tabs=document.getElementsByClassName('tab');
console.log(demand_tabs.length);
var count=0;

function new_demand() {
	 event.preventDefault();
	 count++;
	 if(count<limit){
		 demand_tabs[count].style.display = 'block';
	 }
	 else{
	 	alert('You have reached the max limit of entering 10 demands');
	 }
}