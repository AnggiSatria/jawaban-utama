const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/articles`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
