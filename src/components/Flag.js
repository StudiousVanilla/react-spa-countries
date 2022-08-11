import { Link } from "react-router-dom";

const Flag = ({ country }) => {
    return (
        <div className="bg-red-100 flex flex-col justify-center items-center h-20 md:h-32 w-full">
            <div className="text-7xl md:text-9xl">
                <Link to={`/${country.cca3}`}>
                    {country.flag}
                </Link>
            </div>
            <p className="text-sm">
                {country.name.common}
            </p>
        </div>
    );
}

export default Flag;