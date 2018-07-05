

$('#button1').on('click',function(){

var userName=$('#name').val();
if(userName===''){
	alert('Please enter a name')

}else{
	
	$('h3').html('<br>'+'Hello'+ ' '+ userName+'!');
}

});

$('#button2').on('click',function(){

var userNumber=$('#number').val();
if(userNumber===''){
	alert('Please enter a number');
}else if(userNumber<0||userNumber>=500){
	alert('Please enter a number between 0 and 500');

}else{
	for(i=0;i<=userNumber;i+=2){
		$('h3').append('<br>'+i+'<br>');
	}
}

});

$('#button3').on('click',function(){
	location.reload();
});




