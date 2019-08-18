var ques=document.getElementsByClassName('question');
var ques_display=document.getElementById("question_display");
var i ;

ques_display.innerHTML=ques[0].textContent;

//adding css to all questions
for(i=0;i<ques.length;i++)
{
	ques[i].addEventListener('click', function(){
		event.preventDefault();
		for (var i = 0; i < ques.length; i++) {
			ques[i].classList.remove('active');
		}
		this.classList.toggle('active');
		ques_display.innerHTML=this.textContent;
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