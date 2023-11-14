import React, { useState } from 'react'
import axios from 'axios';


const Law = () => {
    const [question, setQuestion] = useState('');
    const [recipeResponse, setRecipeResponse] = useState('');
    //   const [googleResults, setGoogleResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const recipeResult = await axios.post('http://localhost:5000/legal', {
                qns: question,
            });

            setRecipeResponse(recipeResult.data.result);
            // console.log(googleResult);
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <div className='recipe-container'>
                <h1>Legal Clarity Unleashed: Navigate Legal Challenges with </h1>
                <h1>Precision using Our AI Legal Solutions!</h1>

                <form onSubmit={handleSubmit} className='form-recipe'>

                    <div className="law-content">
                        <div className="law-text">
                            <h1>Navigate Legal Waters with Ease:</h1>
                            <h2>Welcome to our Legal Solutions page, where complex legal matters meet simplicity. At AISolutionCraft, we understand that legal challenges can be daunting. Whether it's a question about your rights, obligations, or a specific situation, our Legal Solutions page is here to provide you with clear, actionable advice.</h2>
                        </div>
                        <div className="law-img">
                            <img src="./images/read.png" alt="" />
                        </div>
                    </div>

                    <label className='ingredients'>
                        Enter the Query:
                        <input type="text" value={question} onChange={handleQuestionChange} className='input' />
                    </label>

                    <button type="submit" className='btn2' >
                        {loading ? 'Loading...' : 'Submit'}
                    </button>

                </form>
                {loading && <div className="loading-spinner"></div>}
                {recipeResponse && (
                    <div className='response1'>
                        <h2>Legal Solution:</h2>
                        <hr className="about-hr" />
                        <div dangerouslySetInnerHTML={{ __html: recipeResponse.replace(/\n/g, '<br/>').replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>') }} />
                        <div className="hammer-plate">
                            <img src="./images/hammer.png" alt="" className='hammer' />
                            <img src="./images/plate.png" alt="" className='plate' />
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default Law