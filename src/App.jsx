import { useState } from 'react';
import Form from './components/Form.jsx';
import NewsCard from './components/NewsCard.jsx';

import './App.css';

/* above i am importing each component in order to send the data
 from the Api.jsx I am inporting the form to be used as a prop here and also taking in the newsCard to senf the information from the API to the newsCard 
  I am also importing the useEffect to be used the each API call*/

/* below is a function for the App*/

function App() {
  /* below i am setting up the variables for the useState which will be needed later for the 
  useEffect Here we have to useStates 
  setCategory which i will use to connect the category in the form to the category in the the API
  I  use category to set which category i will use in the API call (determined by the form submission)
  and setNewsData which i used to create a variable for the data we will recieve from the API call I also haev avariable for the API key */
  const [category, setCategory] = useState('');

  const [newsData, setNewsData] = useState('');
  const apiKey = '54c87cf8b7362dfe1c3a42e7e009b805';

  /* below is the handleSubmit function which is fetching the API call and holing that information into setNewsData
   */

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setNewsData(data.articles))
      .catch((err) => console.error('API error:', err));
  };

  return (
    // below i am setting up the page header
    <>
      <div className="app">
        <h1>BREAKING NEWS!</h1>
        {/* below i am connecting the value is  to the handlechange and setting the cateogry as the value 
      while making the onchange submit connect with the api call, 
       */}
        <Form
          category={category}
          handleSubmit={handleSubmit}
          className="form"
          setCategory={setCategory}
        />
        {/* here i am using the prop NewsCard and sending the results of the API (newsData) to the prop */}
        {newsData && <NewsCard newsProp={newsData} />}
      </div>
    </>
  );
}

export default App;
