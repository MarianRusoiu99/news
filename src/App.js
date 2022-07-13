import React from "react"

import News from "./components/News"
import Form from "./components/Form"
import {createContext} from "react"



export const AppContext = createContext()

function App() {

  const [formData, setFormData] = React.useState(
    {search: "Money", topic: "", pages:"" , lang:"", country:"", source:"" ,date_from: "",date_to:""}
)

  // const [aux,setAux] = React.useState("default");

  // console.log(formData)
  const [currNews,setCurrNews] = React.useState([])

  const [submmit,setSubmmit] = React.useState(formData)
  
 






React.useEffect( ()=>{
  console.log(`https://free-news.p.rapidapi.com/v1/search?q=${submmit.search+submmit.lang+submmit.pages+submmit.country+submmit.topic+submmit.date_from+submmit.date_to}`)
  fetch(`https://free-news.p.rapidapi.com/v1/search?q=${submmit.search} ${submmit.lang} ${submmit.pages} ${submmit.country} ${submmit.topic} ${submmit.date_from} ${submmit.date_to}`, {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32a081deaemsh3fbb9a6e8cafed4p192a6fjsn8483b60e5f2d',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
})
	.then(response => response.json())
  // .then(response => console.log(response))
  .then(response => setCurrNews(response.articles))
	 .catch(err => console.error(err));


},[submmit])

//console.log(currNews);







  return (
    
  <div className="app--container">
    <AppContext.Provider value={{formData, setFormData, submmit, setSubmmit}}>
    {/* <form className="form" onSubmit={handleSubmit}>
            <input 
                type="search" 
                placeholder="Search for news here"
                className="form--input"
                name="search"
                onChange={handleChange}
                value={input}

            />
            <button>Submit</button>
    </form> */}
    <Form/>

    {currNews ? currNews.map((news)=>{
      return <News authors={news.authors} date={news.published_date} media={news.media} link={news.link} title={news.title} topic={news.topic} summary={news.summary} key={news._id}/>
    }) : <p>something went wrong please try again leater</p>
    
    }
    </AppContext.Provider>
  </div>
  
  );
  
}

export default App;
