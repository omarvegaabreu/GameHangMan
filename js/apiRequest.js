"use strict";

const getPuzzle = wordCount =>
  new Promise((resolved, rejected) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolved(data.puzzle);
      } else if (e.target.readyState === 4) {
        rejected("An error has taken place");
      }
    });

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount${wordCount}`);
    request.send();
  });

const getCountry = countryCode =>
  new Promise((resolved, rejected) => {
    {
      const countryRequest = new XMLHttpRequest();

      countryRequest.addEventListener("readystatechange", e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
          const data = JSON.parse(e.target.responseText);
          const country = data.find(
            country => country.alpha2Code === countryCode
          );
          resolved(`Country: ${country.name}`);
        } else if (e.target.readyStatet === 4) {
          rejected("Unable to fetch data");
        }
      });

      countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
      countryRequest.send();
    }
  });
