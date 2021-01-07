const talkingCalendar = function(date) {
  let year = `${date[0]+date[1]+date[2]+date[3]}`;
  let month = `${date[5]+date[6]}`;
  let day = `${date[8]+date[9]}`;
  let trailer = "";

  switch (month) {
    case '01':
      month = "January";
      break;
    case '02':
      month = "February";
      break;
    case '03':
      month = "March";
      break;
    case '04':
      month = "April";
      break;
    case '05':
      month = "May";
      break;
    case '06':
      month = "June";
      break;
    case '07':
      month = "July";
      break;
    case '08':
      month = "August";
      break;
    case '09':
      month = "September";
      break;
    case '10':
      month = "October";
      break;
    case '11':
      month = "November";
      break;
    case '12':
      month = "December";
      break;
  }

  if (day === '11' || day === '12' || day === '13') {
    trailer = 'th';
  } else if (day[1] === '1') {
    trailer = 'st';
  } else if (day[1] === '2') {
    trailer = 'nd';
  }  else if (day[1] === '3') {
    trailer = 'rd';
  } else {
    trailer = 'th';
  }

  if (day[0] === '0') {
    day = `${day[1]}`
  }
  return month + " " + day + trailer + ", " + year;
};

// should evaluate to December 2nd, 2017
console.log(talkingCalendar("2017/12/02"));
// should evaluate to November 11th, 2007
console.log(talkingCalendar("2007/11/11"));
// should evaluate to August 24th, 1987
console.log(talkingCalendar("1987/08/24"));