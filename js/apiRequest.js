"use strict";
const request = new XMLHttpRequest();
const countryCode = "US";

request.open("GET", "http://restcountries.eu/rest/v2/all");
request.send();

request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find(country => country.alpha2Code === countryCode);
    console.log(country.name);
  } else if (e.target.readyState === 4 && e.target.status === 400) {
    console.log("Error");
  }
});
