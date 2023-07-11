import Axios from 'axios';

export default class NewsRequest {

   getNews = async () => {
      try {
         const response = await Axios({
            method: "get",
            url: "https://localhost:7247/api/news"
         });

         return {
            status: response.status,
            data: response.data
         }
      }
      catch (e) {
         console.log(e);
      }
   };
}