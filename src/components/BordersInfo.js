import { useEffect, useState } from 'react';
import BordersTile from './BordersTile'

const BordersInfo = ({ title, borders , cca3}) => {

    const [countries, setCountries] = useState([])

    

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}`);
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

        getData()
    }, [borders, cca3])

    return (
        <BordersTile title={title} countries={countries} />
    );
}

export default BordersInfo;