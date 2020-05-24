import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import doctorsImg from '../Static/svg/doctors_pink.svg';
import BarChart from 'react-bar-chart';

const axios = require('axios');

function DashboardPage() {

    const data = [
        { text: 'Test A', value: 500 },
        { text: 'Test B', value: 300 },
        { text: 'Test C', value: 350 },
        { text: 'Test D', value: 200 },
        { text: 'Test E', value: 230 }
    ];

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
                const resultBarToDraw = response.data.Countries.map(item => {
                    const resultBar = {};
                    resultBar['text'] = item.Country;
                    resultBar['value'] = item.TotalConfirmed;
                    return resultBar;

                })
                setResult(resultBarToDraw);
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
            <header>
                <h1>dashboard</h1>
            </header>
            <main>
                <div class="container">
                    <div className="columns">
                        <div className="column is-half">
                            <h3>Total Cases</h3>
                            {result &&
                                <>
                                    <BarChart ylabel='Quantity'
                                        data={result}
                                    />
                                </>
                            }

                        </div>
                        <div className="column">
                            <img src={doctorsImg} alt="" />
                            <Link to='/' className="button is-primary">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default DashboardPage;
