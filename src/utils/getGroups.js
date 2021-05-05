const API = "https://academic-grade-api.herokuapp.com/group";

const getGroups = async (id,idMongo) => {
    const apiURl = id ? `${API}/${idMongo}/${id}` : API;

    try {
      const response = await fetch(apiURl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Fetch Error', error);
    };
  };
  

export default getGroups;