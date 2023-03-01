import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getScreenResolution } from '../Helpers/getScreenResolution';

const resolution = getScreenResolution();

function Weather(props) {
    const [weather, setWeather] = useState(null);

    const params = useParams();
    const { city } = params;

    const isMobile = resolution.width < 768;

    const fetchWeather = useCallback(async () => {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
        );
        const data = await response.json();
        setWeather(data);
    }, [city]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    const handleBack = () => {
        window.location.href = '/home';
    };

    const tableHeaders = [{ headerName: 'Date', mobileView: true },
        { headerName: 'City', mobileView: false },
        { headerName: 'Temp (F)', mobileView: true },
        { headerName: 'Description', mobileView: false },
        { headerName: 'Main', mobileView: false },
        { headerName: 'Pressure', mobileView: false },
        { headerName: 'Humidity', mobileView: false }
    ]

    const tableData = [{ data: new Date(weather?.location?.localtime_epoch * 1000).toLocaleDateString(), mobileView: true },
        { data: weather?.location?.name, mobileView: false },
        { data: weather?.current?.temp_f, mobileView: true },
        { data: weather?.current?.condition?.text, mobileView: false },
        { data: <img src={`http:${weather?.current?.condition?.icon}`} alt='main' />, mobileView: false },
        { data: weather?.current?.pressure_mb, mobileView: false },
        { data: weather?.current?.humidity, mobileView: false }
    ]
   

    return (
        <div>
            <table style={styles.table}>
                <tr>
                    {tableHeaders.map((data, index) => {
                        if(isMobile && !data.mobileView) return null
                        return <th key={index} style={styles.th}>{data.headerName}</th>
                    })}
                </tr>
                <tr>
                    {tableData.map((data, index) => {
                        if(isMobile && !data.mobileView) return null
                        return <td key={index} style={styles.td}>{data.data}</td>
                    })}
                </tr>
            </table>

            <button style={styles.button} onClick={handleBack}>
                Back
            </button>
        </div>
    );
}

export default Weather;

const styles = {
    table: {
        border: '1px solid black',
        width: '100%',
        textAlign: 'center',
    },
    th: {
        border: '1px solid black',
        width: '100%',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    td: {
        border: '1px solid black',
        width: '100%',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        float: 'right',
        marginTop: '50px',
    },
};
