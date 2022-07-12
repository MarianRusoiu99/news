import React from "react"

import {AppContext} from "../App"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Form(){
    const { formData, setFormData , submmit, setSubmmit} = React.useContext(AppContext)

    console.log(formData)
    function handleChange(event) {
        const {name,value,type,checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        setSubmmit(formData);
        console.log(formData);
    }

    return(<div>



       
       <form onSubmit={handleSubmit}>
        <input type = "text"
        placeholder="Search news here!"
        onChange={handleChange}
        name="search"
        value={formData.search}/>

        <input type = "text"
        placeholder="Topic"
        onChange={handleChange}
        name="topic"
        value={formData.topic}/>
        <input type = "text"
        placeholder="Sources"
        onChange={handleChange}
        name="sources"
        value={formData.source}/>


        {/*nr pages */}
        <select
             id="numPages"
             value={formData.favColor}
             onChange={handleChange}
             name="numPages" 
             >
                <option value="">--Chose--</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>


            <select
             id="lang"
             value={formData.lang}
             onChange={handleChange}
             name="lang" 
             >
                <option value="">--Language--</option>
                <option value="af">Afrikaans</option>
                <option value="ar">Arabic</option>
                <option value="bg">Bulgarian</option>
                <option value="bn">Bengali, Bangla</option>
                <option value="ca">Catalan</option>
                <option value="cs">Czech</option>
                <option value="cy">Welsh</option>
                <option value="da">Danish</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="et">Estonian</option>
                <option value="fa">Persian</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="gu">Gujarati</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hr">Croatian</option>
                <option value="hu">Hungarian</option>
                <option value="id">Indonesian</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="kn">Kannada</option>
                <option value="ko">Korean</option>
                <option value="lt">Lithuanian</option>
                <option value="lv">Latvian</option>
                <option value="mk">Macedonian</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
                <option value="ne">Nepali</option>
                <option value="nl">Dutch, Flemish</option>
                <option value="no">Norwegian</option>
                <option value="pa">Punjabi, Panjabi</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="so">Somali</option>
                <option value="sq">Albanian</option>
                <option value="sv">Swedish</option>
                <option value="sw">Swahili</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="tl">Tagalog</option>
                <option value="tr">Turkish</option>
                <option value="tw">Twi</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="vi">Vietnamese</option>
            </select>

            <select
             id="country"
             value={formData.country}
             onChange={handleChange}
             name="country" 
             >
                <option value="">--Country--</option>
                <option value="af">Afrikaans</option>
                <option value="ar">Arabic</option>
                <option value="bg">Bulgarian</option>
                <option value="bn">Bengali, Bangla</option>
                <option value="ca">Catalan</option>
                <option value="cs">Czech</option>
                <option value="cy">Welsh</option>
                <option value="da">Danish</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="et">Estonian</option>
                <option value="fa">Persian</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="gu">Gujarati</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hr">Croatian</option>
                <option value="hu">Hungarian</option>
                <option value="id">Indonesian</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="kn">Kannada</option>
                <option value="ko">Korean</option>
                <option value="lt">Lithuanian</option>
                <option value="lv">Latvian</option>
                <option value="mk">Macedonian</option>
                <option value="ml">Malayalam</option>
                <option value="mr">Marathi</option>
                <option value="ne">Nepali</option>
                <option value="nl">Dutch, Flemish</option>
                <option value="no">Norwegian</option>
                <option value="pa">Punjabi, Panjabi</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="so">Somali</option>
                <option value="sq">Albanian</option>
                <option value="sv">Swedish</option>
                <option value="sw">Swahili</option>
                <option value="ta">Tamil</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="tl">Tagalog</option>
                <option value="tr">Turkish</option>
                <option value="tw">Twi</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="vi">Vietnamese</option>
            </select>



            <DatePicker selected={formData.date_from} onChange={(date) => setFormData(prevFormData => {
                 return {
                    
                    ...prevFormData,
                    date_from: date
                    // date_from: date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay()
                }
              
            }
                )} />
                <DatePicker selected={formData.date_to}  onChange={(date) => setFormData(prevFormData => {
                 return {
                    
                    ...prevFormData,
                    date_to: date
                    // date_from: date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay()
                }
              
            }
                )} />
            <button >Submit</button>

       </form>
       
    </div>)
}