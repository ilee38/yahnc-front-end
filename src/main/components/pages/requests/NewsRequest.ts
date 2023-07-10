import Axios from 'axios';

export default class NewsRequest {

   getNews = async () => {
      const response: { title: string, date: string}[] = [
         {title: "News Title 1 with some more information to make it bigger...", date: "09/07/23"},
         {title: "News Title 2...", date: "09/08/23"},
         {title: "News Title 3...", date: "09/02/23"}
      ];

      return {
         status: 'ok',
         data: response
      };
   };
}