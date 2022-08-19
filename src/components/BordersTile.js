import { Link } from "react-router-dom";

const BordersTile = ({ title, countries }) => {

    // logic to get flags

    return (
        <div className="bg-white max-h-[17vh] p-3 border-2 border-slate-400 rounded-md mx-auto mb-2 w-[95%] shadow-md hover:shadow-lg flex">

            <h3 className="text-3xl mr-3 flex items-center">{title}</h3>

            <div className="text-4xl h-full flex items-center overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar">
                {countries.length === 0 &&
                    <span>?</span>
                }
                {countries.length === 1 &&
                    <span>{countries[0].flag}</span>
                }
                {countries.length > 1 &&
                    <div className="">
                        {countries.map((country, key) => {
                            return <span key={key} className="mr-5">
                                <Link to={`/${country.cca3}`}>
                                    {country.flag}
                                </Link>
                                </span>
                        })}
                    </div>
                }
            </div>

        </div>
    );
}

export default BordersTile;