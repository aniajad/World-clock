function updateTime() {
  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyDateElement = document.querySelector("#sydney-date");
  let sydneyTimeElement = document.querySelector("#sydney-time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkDateElement = document.querySelector("#new-york-date");
  let newYorkTimeElement = document.querySelector("#new-york-time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
