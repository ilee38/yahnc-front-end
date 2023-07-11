import Stack from 'react-bootstrap/Stack';

type Args = {
   newsData: {
      title: string,
      url: string,
      time: number,
      score: number,
      by: string
   }[]
}

const NewsStack = ({newsData}: Args) => {

   const cleanUrl = (url: string): string => {
      const cutoff = url.indexOf("/");

      return cutoff !== undefined ? url.substring(0, cutoff) : url;
   }

   return(
         <Stack gap={3} className="News-Stack">
            <div></div>
            {newsData.map((item, idx) => (
               <div key={idx}>
                  {idx + 1}. {item.title} <a href={cleanUrl(item.url)} className='Story-link'>({item.url})</a>
                  <div className='Story-link'>{item.score} points by {item.by} {item.time}</div>
               </div>
            ))}
         </Stack>
   );
};

export default NewsStack;
