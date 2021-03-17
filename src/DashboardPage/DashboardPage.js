import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import doctorsImg from '../Static/svg/doctors_pink.svg';
import { LineChart, Line, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';


const axios = require('axios');

function DashboardPage() {
    const [result, setResult] = useState();
    const [country, setCountryName] = useState();
   

    const handleChange = (e) => {
        setCountryName(
            e.target.value
        )
    }

    const handleKey = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    }



    const handleClick = () => {

        axios.get(`https://api.covid19api.com/country/${country}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
             
                setResult(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
               

            })
            .finally(function () {
                // always executed
            });


    };

    //useEffect(() => { fetchData(); }, []);


    return (
        <>
            <div className="container">
                <header>
                    <h1>Covid-19 By Country</h1>
                    <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li class="is-active"><Link to="/byCountry">Covid-19 by Country</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div className="container">
                        <div className="columns is-mobile">
                            <div className="column">
                                <div className="field">
                                    <label className="label"></label>
                                    <div className="control">
                                        <input id="country" name="country" className="input" type="text" placeholder="Country" maxLength="50" onKeyDown={(e) => handleKey(e)} onChange={e => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-primary" onClick={() => handleClick()}>see data</button>

                                    </div>

                                </div>
                                {result &&
                                    <>
                                        <center>

                                            <LineChart width={800} height={450} data={result.data}>
                                                <XAxis dataKey="Date" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                                <Line type="monotone" dataKey="Confirmed" stroke="#4B4B4B" />
                                                <Line type="monotone" dataKey="Deaths" stroke="#FF57BB" />
                                                <Line type="monotone" dataKey="Recovered" stroke="#0091AD" />
                                                <Line type="monotone" dataKey="Active" stroke="#6EFAFB" />
                                            </LineChart>

                                        </center>
                                    </>
                                }

                            </div>
                        </div>

                        <div className="columns is-centered">
                            {!result &&
                                <div className="column is-half">
                                    <img src={doctorsImg} alt="" />
                                </div>
                            }
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}

export default DashboardPage;
