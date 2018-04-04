
function animatePMAM() {
	var today = new Date();
	var timeline = new TimelineMax({repeat : -1});
	var time = today.getHours();
  console.log(time);
	if(time > 12 && time < 24) {

		// if noon animate
		if (time > 12 ) {
			//timeline.to('#amPm', 1, { left: -100});
			// Slomo animation
			TweenLite.to('#amPm', 2.5, { ease: Elastic.easeOut.config(1, 0.3), x: 200 });
		}

			document.getElementById('amPm').innerHTML = 'PM';
	 }  else {
		 TweenLite.to('#amPm', 2.5, { ease: Elastic.easeOut.config(1, 0.3), x: 200 });
		document.getElementById('amPm').innerHTML = 'AM';
	}
}

function startTime() { //Lopende realtime
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('realtime').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

		var mainHeading = document.getElementById('realtime');

		var tl1 = new TimelineMax(); //deze heeft spasme maar weet niet hoe ik dit kan oplossen.
		tl1.to(mainHeading, 1, {top: 50, ease: Sine.easeInOut})
		   .to(mainHeading, 1, {left: 50, ease: Sine.easeInOut})
		   .to(mainHeading, 1, {top: -50, ease: Sine.easeInOut})
		   .to(mainHeading, 1, {left: -50, ease: Sine.easeInOut});


}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function showDate() { //dit moet de realtime datum laten zien
  console.log('show date')
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; //months from 1-12
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

newdate = day + "/" + month + "/" + year; //alleen jaar,maand,dag
	document.getElementById('realdate').innerHTML = newdate;
}
/*function shake() {
	$("#time").click(function(){ //https://codepen.io/GreenSock/pen/hznvq?editors=101
	  TweenMax.fromTo('#time', 0.01, {x:-2}, {x:2, clearProps:"x", repeat:20})
	})

}*/
/* this one doesn't work in a linear fashion */
var element = document.getElementById("date");

TweenMax.to(date, 0.1, {x:"+=3", yoyo:true, repeat:-1});
TweenMax.to(date, 0.1, {x:"-=3", yoyo:true, repeat:-1});

// do this
animatePMAM();
startTime();
showDate();
