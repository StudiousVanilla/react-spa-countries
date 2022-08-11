import { useState } from "react";
import InfoTile from "./InfoTile";
import InfoTileList from "./InfoTileList";

const CountryInfo = ({ data }) => {

    const [currencies] = useState(Object.keys(data.currencies).map(key => data.currencies[key]));

    

    console.log(currencies)

    return (
        <article className="w-full bg-white flex flex-col justify-center items-start">
            <div className="bg-sky-900 w-full flex items-center pl-2 py-2 mb-10">
                <div className="bg-white p-3 mr-3 md:mr-6 text-6xl md:text-8xl rounded-full" id="flag">
                    {data.flag}
                </div>
                <div className="relative text-white font-semibold w-full h-full mt-3 md:mt-6">
                    <h2 className="text-5xl text-white">{data.name.common}</h2>
                    <p className="text-md text-white">Official: {data.name.official}</p>
                </div>
            </div>

            <div className="mb-5 w-3/5 mx-auto flex justify-center">
                <img src={data.coatOfArms.svg} alt="" />
            </div>

            {/* continent */}
            <InfoTile 
            data={`🌍 ${data.continents}`} 
            />
            {/* capital city */}
            <InfoTile 
            data={`🏛️ ${data.capital}`} 
            />
            {/* population */}
            <InfoTile 
            data={`🏘️ ${data.population.toLocaleString()}`} 
            />
            {/* area */}
            <InfoTile 
            data={`📐 ${data.area.toLocaleString()}km²`} 
            />
            {/* borders */}
            {data.borders &&
                <InfoTileList 
                title={"🛂"} 
                data={data.borders} 
                />
            }
            {!data.borders &&
                <InfoTile
                data={'🛂 🏝️'} 
                />
            }
            {/* currency */}
            {currencies.length === 1 &&
                <InfoTile
                title={"💱"}
                data={`${currencies[0].name} - (${currencies[0].symbol})`}
                />
            }
            {currencies.length > 1 &&
                <InfoTileList 
                title={"💱"} 
                data={currencies} 
                />
            }
             {/* Roads */}
             {data.car.side === 'left' &&
                <InfoTile
                title={"Roads"} 
                description={`${data.demonyms.eng.m} people drive on the `} 
                data={`🚗 ⬅️ 🛣️ `} 
                />
            }
            {data.car.side === 'right' &&
                <InfoTile
                title={"🚗 Roads"} 
                description={`${data.demonyms.eng.m} people drive on the `} 
                data={`🛣️ ➡️ 🚗 `} 
                />
            }

        </article>
    );
}

export default CountryInfo;