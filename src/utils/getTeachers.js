const API = "https://academic-grade-api.herokuapp.com/teachers";

const getTeachers = async (id) => {

    const apiURl = id ? `${API}/${id}` : API;
    console.log(apiURl);
    try {
      const response = await fetch(apiURl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Fetch Error', error);
    };
  };
  

export default getTeachers;