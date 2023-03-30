import axios from "axios";

async function getData(id) {
  try {
    const { data: userData } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const { data: postData } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    return { ...userData, postData };
  } 
  catch (error) {
    console.error(error);
  }
}

export default getData;