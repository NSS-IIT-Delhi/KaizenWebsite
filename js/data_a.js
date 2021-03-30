var n = localStorage.getItem('on_load_counter');
var uniq_id = localStorage.getItem('on_load_id');
if (n === null) {
  n = 0;
}
if (uniq_id===null) {
	$.ajax({
		url: "https://a17.herokuapp.com/unique_id.php",
		dataType: "json",
		success: function (data) {
			// console.log(data);
			localStorage.setItem("on_load_id", data);
			uniq_id = data;
			get_data();
		}
	});
}
else{
	get_data();
}
function get_data() {
	console.log(uniq_id);
	n++;
	localStorage.setItem("on_load_counter", n);
	cookies = navigator.cookieEnabled;
	brow_lang = navigator.browserLanguage;
	lang = navigator.language;
	platf = navigator.platform;
	speed = navigator.connectionSpeed;
	user_agent = navigator.userAgent;
	webdrive = navigator.webdriver
	navigator.geolocation.getCurrentPosition(success,error)
}

var cookies,brow_lang, lang, platf,speed,user_agent,webdrive,location_lat, location_long, location_accu, location_msg;
function success(pos) {
  var crd = pos.coords;
  location_msg = "User allowed the location";
  location_lat = crd.latitude;
  location_long = crd.longitude;
  location_accu = crd.accuracy;
  printData()
}
function error(err) {
	location_msg = err.message;
  // console.log(`${location_msg}`);
  printData()
}
function printData() {
	$.ajax({
        url:"https://a17.herokuapp.com/update.php",    //the page containing php script
        type: "post",    //request type,
        dataType: 'json',
        data: {"user_id": uniq_id, "platform": platf, "user_agent": user_agent, "location_msg":location_msg, "location_lat":location_lat,"location_long":location_long,"location_accu":location_accu,"lang":lang,"brow_lang":brow_lang,"number_visit":n},
        complete:function(result){
        	console.log(result);
        }
    });
	/*console.log("User ID : " + uniq_id);
	console.log(n);
	console.log("Cookies: " + cookies);
	console.log("Browser Language: " + brow_lang);
	console.log("Language: " + lang);
	console.log("Platform: " + platf);
	console.log("Connection Speed: " + speed);
	console.log("User Agent: " + user_agent);
	console.log("Webdriver: " + webdrive);
	console.log(`Location message : ${location_msg}`)
	console.log(`Latitude : ${location_lat}`);
	console.log(`Longitude: ${location_long}`);
	console.log(`Accuracy: ${location_accu} meters.`);*/
}