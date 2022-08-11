import { useState } from "react";
import InfoTile from "./InfoTile";
import InfoTileList from "./InfoTileList";

const CountryInfo = ({ data }) => {

    const [currencies, setCurrencies] = useState(Object.keys(data.currencies).map(key => data.currencies[key]));

    

    console.log(currencies)

    return (
        <article className="w-full bg-gray-50 flex flex-col justify-center items-start">
            <div className="bg-neutral-200 w-full flex items-center pl-2 py-2 mb-10">
                <div className="bg-white p-3 mr-3 md:mr-6 text-6xl md:text-8xl rounded-full" id="flag">
                    {data.flag}
                </div>
                <div className="relative text-slate-100 font-semibold w-full h-full mt-3 md:mt-6">
                    <h2 className="text-5xl text-black">{data.name.common}</h2>
                    <p className="text-md text-neutral-800">Official: {data.name.official}</p>
                </div>
            </div>

            <div className="mb-10 w-3/5 mx-auto">
                <img src={data.coatOfArms.svg} alt="" />
            </div>

            {/* continent */}
            <InfoTile 
            title={"🌍 Continent"} 
            description={`${data.name.common} is part of `} 
            data={data.continents} 
            />
            {/* capital city */}
            <InfoTile 
            title={"🏛️ Capital City"} 
            description={`The capital of ${data.name.common} is `} 
            data={data.capital} 
            />
            {/* population */}
            <InfoTile 
            title={"🏘️ Population"} 
            description={`The population of ${data.name.common} is `} 
            data={data.population.toLocaleString()} 
            />
            {/* area */}
            <InfoTile 
            title={"📐 Area"} 
            description={`${data.name.common} has an area of `} 
            data={`${data.area.toLocaleString()}km²`} 
            />
            {/* time */}
            <InfoTile 
            title={"⏰ Time"} 
            description={`Number of timezones: `} 
            data={`${data.timezones.length}`} 
            />
            {/* borders */}
            {data.borders &&
                <InfoTileList 
                title={"🛂 Borders"} 
                description={`${data.demonyms.eng.m} borders: ${data.borders.length}`} 
                data={data.borders} 
                />
            }
            {!data.borders &&
                <InfoTile
                title={"🛂 Borders"} 
                description={`${data.name.common} is an island nation `} 
                data={'🏝️'} 
                />
            }
            {/* Roads */}
            {data.car.side === 'left' &&
                <InfoTile
                title={"🚗 Roads"} 
                description={`${data.demonyms.eng.m} people drive on the `} 
                data={`${data.car.side} ⬅️`} 
                />
            }
            {data.car.side === 'right' &&
                <InfoTile
                title={"🚗 Roads"} 
                description={`${data.demonyms.eng.m} people drive on the `} 
                data={`${data.car.side} ➡️`} 
                />
            }
            {/* currency */}
            {currencies.length === 1 &&
                <InfoTile
                title={"💱 Currency"} 
                description={`${data.demonyms.eng.m} people use the ${currencies[0].name} (`}
                data={`${currencies[0].symbol})`}
                />
            }
            {currencies.length > 1 &&
                <InfoTileList 
                title={"💱 Currency"} 
                description={`${data.demonyms.eng.m} currencies: ${currencies.length}`} 
                data={currencies} 
                />
            }

        </article>
    );
}

export default CountryInfo;