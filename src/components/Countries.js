import { useState, useEffect, useRef } from "react";
import HomepageBanner from "./HomepageBanner";
import Flag from "./Flag";
import Loading from "./Loading";

const Countries = () => {

    const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const [master, setMasterData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [needReset, setNeedReset] = useState(false)

    const ref = useRef(null);

    const getData = async () => {
        setData(null)
        setLoading(true)
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
            setMasterData(actualData);
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

    const handleSearch = (e) => {
        e.preventDefault()
        if (e.target[0].value === '') {
            return
        }
    }

    const updateSearchTerm = () => {
        filterCountries(ref.current.value)
        alert(ref.current.value);
    }

    const filterCountries = (searchTerm) => {
        if (searchTerm === '') {
            setData(master)
        }
        else {
            const filteredData = master.filter(country => country.name.official.toLowerCase().includes(searchTerm))
            setData(filteredData)
            setNeedReset(true)
        }
    }

    const resetCountries = () => {
        ref.current.value = '';
        setData(master)
        setNeedReset(false)
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div>

            <HomepageBanner />

            

            <form onSubmit={handleSearch} className="flex justify-center my-5 w-full">
                <div className="relative w-5/6">
                    <input type="text" id="searchInput" className="block p-2.5 w-full z-20 text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white rounded-r-md" placeholder="Country search" onChange={updateSearchTerm} ref={ref} />

                    <button type="submit" className="absolute -top-0 -right-1 p-2.5 text-sm font-medium text-white bg-blue-600 rounded-r-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </form>

            {error &&
                <p>{error}</p>
            }

            {data &&
                <div className="w-full flex flex-col items-center">
                    <div className="w-[90%] md:w-4/5 m-auto grid grid-cols-3 gap-4 mb-10">
                        {data.map((country, key) => <Flag country={country} key={country.cca2} />)}
                    </div>

                    {needReset &&
                        <button onClick={resetCountries}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    }

                </div>

            }

            {loading &&

                <Loading />
            }


        </div>
    );
}

export default Countries;