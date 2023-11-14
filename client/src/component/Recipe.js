import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [question, setQuestion] = useState('');
  const [recipeResponse, setRecipeResponse] = useState('');
  const [googleResults, setGoogleResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const recipeResult = await axios.post('http://localhost:5000/test', {
        qns: question,
      });

      setRecipeResponse(recipeResult.data.result);

      // Search Google for the user question
      const googleResult = await axios.get(`http://localhost:5000/google-search?q=${question}`);
      setGoogleResults(googleResult.data.items);

      // console.log(googleResult);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='recipe-container'>
      <h1>Whisking Wonders: Unleash Culinary Creativity</h1>
      <h1>with Our AI Recipe Generator!</h1>

      <form onSubmit={handleSubmit} className='form-recipe'>

        <div className="recipe-cook">
          <div className="cook-text">
            <h1>Recipe Generation Made Simple:</h1>
            <h2>Don't feel like typing out a whole recipe? No problem! Just tell us your ingredients, and we'll whip up a delightful recipe for you. Culinary creativity at your fingertips.</h2>
          </div>
          <div className="cook-img">
            <img src="./images/baby.png" alt="" />
          </div>
        </div>

        <label className='ingredients'>
          Enter the Ingredients:
          <input type="text" value={question} onChange={handleQuestionChange} className='input' />
        </label>

        <button type="submit" className='btn2' >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {loading && <div className="loading-spinner"></div>}
      {recipeResponse && (
        <div className='response1'>
          <h2>Recipe:</h2>
          <div dangerouslySetInnerHTML={{ __html: recipeResponse.replace(/\n/g, '<br/>').replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>') }} />
        </div>
      )}

      {/* ########### google result ###################### */}

      {googleResults.length > 0 && (
        <div className='google-results'>
        <hr className="hr" />
          <h2>Item's Buy Link:</h2>
          <ul>
            {googleResults.map((result, index) => (
              <li key={index}>
                <a href={result.link} target="_blank" rel="noopener noreferrer">
                  {result.title}
                </a>
                <p>{result.snippet}</p>

                {/* Display the image if available */}
                {result.pagemap?.cse_image?.length > 0 && (
                  <img
                    src={result.pagemap.cse_image[0].src}
                    alt={result.title}
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default About;
