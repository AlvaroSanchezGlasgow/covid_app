import React from 'react';
import { useState, useEffect } from 'react';
import medical_research from '../Static/svg/medical_research_pink.svg';
import {Link} from "react-router-dom";

const axios = require('axios');

function InitialSection() {
    const [result, setResult] = useState();
    const [error, setError] = useState(false);
    const [errorDescription, setErrorDesc] = useState(false);
    const fetchData = async () => {
        await axios.get(`https://api.covid19api.com/summary`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                setError(false);
                //  alert(JSON.stringify(response));
                setResult(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setErrorDesc(error);
                setError(true);

            })
            .finally(function () {
                // always executed
            });


    };

    useEffect(() => { fetchData(); }, []);

    return (
        <>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="centered">
                            <h2>Global Covid-19 Statistics</h2>

                            {result &&
                                <>
                                    <div className='is-result'>
                                        <p><strong>New  Confirmed:</strong> {result.Global.NewConfirmed}</p>
                                        <p><strong>Total Confirmed:</strong> {result.Global.TotalConfirmed}</p>
                                        <p><strong>New  Deaths:</strong> {result.Global.NewDeaths}</p>
                                        <p><strong>Total Deaths:</strong> {result.Global.TotalDeaths}</p>
                                        <p><strong>New  Recovered:</strong> {result.Global.NewRecovered}</p>
                                        <p><strong>Total  Recovered:</strong> {result.Global.TotalRecovered}</p>
                                    </div>
                                </>
                            }

                            {error &&
                                <>
                                    <div className='is-error'>

                                        <p>Ups!! Something was wrong</p>
                                        <p>{errorDescription.message}</p>

                                    </div>
                                </>
                            }
                            <Link to='/dashboard' className="button is-primary">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                    <div className="column">
                        <figure className="image">
                            <img src={medical_research} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InitialSection;
