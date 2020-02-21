"use strict";

const getPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    const puzzleData = data.puzzle;
    console.log(puzzleData);
    return puzzleData;
  } else {
    throw new Error("Unable to fetch puzzle");
  }
};

const getCountry = async countryCode => {
  const response = await fetch("//restcountries.eu/rest/v2/all");
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
  const response = await fetch("//ipinfo.io/json?token=b9315fbdb706b9");

  if (response.status === 200) {
    const data = await response.json();
    const countryData = getCountry(data.country);
    return countryData;
  } else {
    throw new Error("Unable to get location");
  }
};
