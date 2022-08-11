import { useState, useEffect } from "react";
import Flag from "./Flag";

const Countries = () => {

    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                // this is for http errors
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            }
            catch (error) {
                setError(error.message)
                setData(null)
            }
            finally {
                setLoading(false);
            }
        }
        getData()
    }, [])



    return (
        <div>

            {error &&
                <p>{error}</p>
            }

            {data &&
                <div className="w-5/6 md:w-4/5 m-auto grid grid-cols-3 gap-4">
                    {data.map((country, key) => <Flag country={country} key={country.cca2}/>)}
                </div>
            }

            {loading &&
                <p>loading</p>
            }


        </div>
    );
}

export default Countries;