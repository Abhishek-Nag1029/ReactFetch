export async function fetchCars() {
  const headers = {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
    // "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    'X-RapidAPI-Key': '735648666amsh28e7f4c6f093a08p182d72jsnc6bc13d266f8',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  var result;
  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&limit=30`,
      {
        headers: new Headers(headers),
      }
    );
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  return result;
}
