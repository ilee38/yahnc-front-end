import Stack from 'react-bootstrap/Stack';

type Args = {
   newsData: {title: string, date: string}[]
}

const NewsStack = ({newsData}: Args) => {

   return(
         <Stack gap={2} className="News-Stack">
            <div></div>
            {newsData.map((item, idx) => (
               <div key={idx}>{idx + 1}. {item.title} | {item.date}</div>
            ))}
         </Stack>
   );
};

export default NewsStack;
