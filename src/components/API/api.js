// Get Destinations Method (Get From Back End)
export const getDestinations = () => {
    return fetch(`http://localhost:8000/api/destinations/`,{
        method: 'GET',
      })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

// Get Country Method (Get From Back End)
export const getCountry = (apiUrl) => {
  return fetch(apiUrl,{
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Get Country Method (Get From Back End)
export const getTrips = (apiUrl) => {
  return fetch(apiUrl,{
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Get Reviews Method
export const getReviews = (apiUrl) => {
  return fetch(apiUrl,{
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};