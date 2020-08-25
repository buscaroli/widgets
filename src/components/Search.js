import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])


    useEffect (() => {
        const search = async () => {
            
            try {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        origin: '*',
                        srsearch: term
                    }
                })
                setResults(data.query.search)
                console.log(results)
                
            }
            catch (e) {
                console.log(e)
            }
        }

        // Skip the timeout on the first search.
        // Not very useful at the moment but would help in case
        // I wanted to give a default search term to the Search component
        // as there would be no delay when first loading the page.
        if (term && !results.length) {
            search()
        } else {
            // The setTimeout() function returns an unique ID that can be
            // used to clear the timeout
            const timeoutID = setTimeout(() => {
             if (term) search()

            }, 500)

            // Clearing the timeout using its unique ID
            // NB The only value that we can return within useEffect is
            //    a function!
            return () => clearTimeout(timeoutID)
        }
        

    }, [term])
    
    // TODO
    // Replace dangerouslySetInnerHTML with html-react-parser
    // https://www.npmjs.com/package/html-react-parser
    const renderedResults = results.map((result, index) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className="ui button">
                        Visit
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
                
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)} 
                        className="input"></input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search