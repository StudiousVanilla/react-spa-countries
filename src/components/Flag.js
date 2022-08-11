import { Link } from "react-router-dom";

const Flag = ({ country }) => {

    const nameCheck = (name) =>{
        if(name.length > 10){
            return `${name.slice(0, 10)}...`
        }
        return name
    }

    return (
        <div className="bg-white flex flex-col justify-center items-center h-24 md:h-32 w-full rounded-md border-2 border-gray-200 p-1 shadow-sm">
            <div className="text-7xl md:text-9xl">
                <Link to={`/${country.cca3}`}>
                    {country.flag}
                </Link>
            </div>
            <p className="text-sm">
                { nameCheck(country.name.common)}
            </p>
        </div>
    );
}

export default Flag;