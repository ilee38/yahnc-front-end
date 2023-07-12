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

   // Cleans up the URL by removing everything after the first "/"
   const cleanUrl = (url: string): string => {
      let cutoff = -1;

      if (url !== undefined) {
         // Find the first occurrence of "/" after "https://"
         cutoff = url.substring(8).indexOf("/");
      }

      return cutoff !== -1 ? url.substring(0, cutoff + 8) : url;
   }

   const getElapsedTime = (storyTimeStamp: number): string=> {
      let elapsedTimeValue;
      let elapsedTimeUnit;
      // The story timestamp is given in Unix time, so we use Unix time to calculate elapsed time
      // Dividing by 1000 converts to Unix time in seconds
      const currentUnixTime = Math.floor(Date.now() / 1000);
      const elapsedSeconds = currentUnixTime - storyTimeStamp;

      if (elapsedSeconds / 3600 > 0) {
         elapsedTimeValue = Math.floor(elapsedSeconds / 3600);
         elapsedTimeUnit = elapsedTimeValue > 1 ? "hours" : "hour";
      }
      else {
         elapsedTimeValue = Math.floor(elapsedSeconds / 60);
         elapsedTimeUnit = elapsedTimeValue > 1 ? "minutes" : "minute";
      }
      return elapsedTimeValue.toString() + " " + elapsedTimeUnit.toString();
   }

   return(
         <Stack gap={3} className="News-Stack">
            <div></div>
            {newsData.map((item, idx) => (
               <div key={idx}>
                  {idx + 1}. <a href={item.url}>{item.title}</a> <a href={item.url} className='Story-link'>({cleanUrl(item.url)})</a>
                  <div className='Story-link'>{item.score} points by {item.by} {getElapsedTime(item.time)} ago.</div>
               </div>
            ))}
         </Stack>
   );
};

export default NewsStack;
