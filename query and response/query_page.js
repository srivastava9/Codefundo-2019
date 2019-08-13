var ques=document.getElementsByClassName('question');
var i ;

//adding css to all questions
for(i=0;i<ques.length;i++)
{
	ques[i].addEventListener('click', function(){
		this.classList.toggle('active');

		var ans=this.nextElementSibling;

		if(ans.style.display == 'block'){
			ans.style.display = 'none';
		}
		else {
			ans.style.display = 'block';
		}
	})
}

var cand_tag=document.getElementsByClassName('candidate_tag');
var j;

//adding css to candidate tags
for(j=0;j<cand_tag.length;j++)
{
	cand_tag[j].addEventListener('click', function(){
		this.classList.toggle('active');
	})
}