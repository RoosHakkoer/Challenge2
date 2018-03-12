
function animatePMAM() {
	var today = new Date();
	var timeline = new TimelineMax({repeat : -1});
	var time = today.getHours();
  console.log(time);
	if(time > 12 && time < 24) {

		// if noon animate
		if (time == 15) {
			timeline.to('#amPm', 1, { top: 10});
		}

		document.getElementById('amPm').innerHTML = 'PM';
	 }  else {
		document.getElementById('amPm').innerHTML = 'AM';
	}
}

function showTime() {
	console.log('show time');
}
function showDate() {
  console.log('show date')
}

// do this
animatePMAM();
showTime();
showDate();
