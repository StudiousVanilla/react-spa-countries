import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryInfo from "./CountryInfo";

const Country = () => {

    let { cca3 } = useParams();

    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
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
    }, [cca3])



    return (
        <div>
            {error &&
                <p>{error}</p>
            }

            {data &&
                <CountryInfo data={data[0]} />
            }

            {loading &&
                <p>loading</p>
            }

        </div>
    );
}

export default Country;
