$(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var query = $("#query").val();
if(name==''||email==''||query=='')
{
alert("Please Fill All Fields");
}
else
{
$.ajax({
type: "POST",
url: "http://a17.herokuapp.com/query.php",
dataType: 'json',
data: {"name":name,"email":email,"query":query},
complete:function(result){
    console.log(result);
}
});
}
return false;
});
});