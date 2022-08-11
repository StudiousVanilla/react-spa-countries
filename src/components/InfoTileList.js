const InfoTileList = ({ title, data }) => {

    console.log(typeof (data[0]));


    return (
        <div className="bg-white max-h-[17vh] p-3 border-2 border-slate-400 rounded-md mx-auto mb-2 w-[95%] shadow-md hover:shadow-lg flex">
            
            <h3 className="text-3xl">{title}</h3>

            {/* Borders */}
            {typeof (data[0]) === 'string' &&
                <div>
                    {data.length === 1 &&
                        <p>{data[0]}</p>
                    }
                    {data.length > 1 &&
                        <div>
                            {data.map((item, key) => {
                                return <span key={key}>{item} </span>
                            })}
                        </div>
                    }
                </div>
            }

            {/* currencies */}
            {typeof (data[0]) === 'object' &&
                    <div className="flex justify-center items-center ml-2">
                        {data.map((item, key) => {
                            return <span>{item.name} ({item.symbol}),</span>
                        })}
                    </div>
            }

        </div>
    );
}

export default InfoTileList;