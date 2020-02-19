"use strict";

const getPuzzle = async wordCount => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    const puzzelData = data.puzzle;
    return puzzelData;
  } else {
    throw new Error("Unable to fetch puzzle");
  }
};

const getCountry = async countryCode => {
  const response = await fetch("http://restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    const dataCountryCode = data.find(
      country => country.alpha2Code === countryCode
    );
    return dataCountryCode;
  } else {
    throw new Error("Unable to fetch country");
  }
};

const getLocation = async () => {
  //remember to add fetch call with api key env file not done

  if (response.status === 200) {
    const data = await response.json();
    const countryData = getCountry(data.country);
    return countryData;
  } else {
    throw new Error("Unable to get location");
  }
};
