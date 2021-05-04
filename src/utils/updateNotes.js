const API = "https://academic-grade-api.herokuapp.com/student/";



const updateNotes = async (id, data) => {

    const apiURl = id ? `${API}/${id}` : API;

    try {
      const response = await fetch(apiURl, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
      });
      const resp = await response.json();
      return resp;
    } catch (error) {
      console.log('Fetch Error', error);
    };
  };