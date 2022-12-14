const InfoTileList = ({ title, data, type }) => {

    // logic to get flags

    return (
        <div className="bg-white max-h-[17vh] p-3 border-2 border-slate-400 rounded-md mx-auto mb-2 w-[95%] shadow-md hover:shadow-lg flex">

            <h3 className="text-3xl mr-2">{title}</h3>
            
            <div className="w-full flex justify-start items-center overflow-x-scroll px-1">
                {data.map((item, key) => {
                    return <span key={key} className="mx-1 whitespace-nowrap">
                        {item.name} ({item.symbol})
                    </span>
                })}
            </div>


        </div>
    );
}

export default InfoTileList;