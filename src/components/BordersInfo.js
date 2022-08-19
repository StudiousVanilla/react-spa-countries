import { useEffect, useState } from 'react';
import BordersTile from './BordersTile'

const BordersInfo = ({ title, data , cca3}) => {

    const [countries, setCountries] = useState([])
    const [codes] = useState(data.join(','))

    useEffect(() => {

        const getData = async (codes) => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
                // this is for http errors
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setCountries(actualData)
            }
            catch (error) {
                console.log(error);
                setCountries([])
            }
            finally {
                return
            }
        }
        getData(codes)
    }, [codes, cca3])

    return (
        <BordersTile title={title} countries={countries} />
    );
}

export default BordersInfo;