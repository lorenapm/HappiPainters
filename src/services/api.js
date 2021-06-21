const getDataFromApi = (data) => {
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        // const urlCard = data.cardURL;
        console.log("API");
        // linkCreate.innerHTML = data.cardURL;
        // linkCreate.href = data.cardURL;
      } else {
        console.log("fallo de data");
      }
    });
};
export default getDataFromApi;
