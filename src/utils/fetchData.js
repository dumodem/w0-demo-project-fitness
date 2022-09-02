export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'Access-Control-Allow-Origin': '*'
    },

  };

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    return json;
} catch (error) {
    console.log("error", error);
}


}

