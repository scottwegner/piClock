var moment = require('moment');
//var format = 'hh:mm:ss';
var dialLines;
var clockEl;

function init()
{	dialLines = document.getElementsByClassName('diallines');
	clockEl = document.getElementsByClassName('clock')[0];

	for (var i = 1; i < 60; i++)
	{	clockEl.innerHTML += "<div class='diallines'></div>";
		dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
	}
}



function clock() {
  var weekday = new Array(7),
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      n = d.getTime(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
      timeNow = moment(),
      format = 'hh:mm:ss',
      timeC = moment().format('hh:mm:ss'),
      timeD = timeC,
      period = " ",


      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,

      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day'),
      periodEl = document.querySelector('.period');

      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      var day = weekday[d.getDay()];

  if(month < 9) {
    month = "0" + month;
  }
  if(date < 9) {
    date = "0" + date;
  }

//LOGIC for period display

beforetime = moment('08:00:00', format);
bell1s = moment('08:07:00', format);
bell1e = moment('08:58:00', format);
bell2s = moment('08:52:00', format);
bell2e = moment('09:10:00', format);
bell3s = moment('09:14:00', format);
bell3e = moment('10:02:00', format);
bell4s = moment('10:06:00', format);
bell4e = moment('10:54:00', format);
bell5s = moment('10:58:00', format);
bell5e = moment('11:50:00', format);
bell6s = moment('11:51:00', format);
bell6e = moment('12:15:00', format);
bell7s = moment('12:16:00', format);
bell7e = moment('13:04:00', format);
bell8s = moment('13:08:00', format);
bell8e = moment('13:56:00', format);
bell9s = moment('14:00:00', format);
bell9e = moment('14:48:00', format);
bell10s = moment('14:52:00', format);
bell10e = moment('15:07:00', format);
bell11s = moment('15:08:00', format);
bell11e = moment('23:59:00', format);


  if (h <= 8 && m < 02) {
  period = "G'Morning!";
}

else if (timeNow.isBetween(beforetime, bell1s)) {
  period = "Get Ready!";
}
else if (timeNow.isBetween(bell1s, bell1e)) {
  period = "Period 1";
}

else if (timeNow.isBetween(bell2s, bell2e)) {
  period = "Breakfast!";
}

else if (timeNow.isBetween(bell3s, bell3e)) {
  period = "Period 2";
}

else if (timeNow.isBetween(bell4s, bell4e)) {
  period = "Period 3";
}

else if (timeNow.isBetween(bell5s, bell5e)) {
  period = "Period 4";
}

else if (timeNow.isBetween(bell6s, bell6e)) {
  period = "HS LUNCH";
}

else if (timeNow.isBetween(bell7s, bell7e)) {
  period = "Period 5";
}

else if (timeNow.isBetween(bell8s, bell8e)) {
  period = "Period 6";
}

else if (timeNow.isBetween(bell9s, bell9e)) {
  period = "Period 7";
}

else if (timeNow.isBetween(bell10s, bell10e)) {
  period = "HS ADVISORY";
}

else if (timeNow.isBetween(bell11s, bell11e)) {
  period = "Evening";
}
  else {period = 'Transition';

//  else {period = "BH SCHOOL";
}


  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = month+"/"+date+"/"+year;
  dayEl.innerHTML = day;
  periodEl.innerHTML = period;
}


function start()
{	setInterval("clock()", 500);
}
