const InfoTileList = ({ title, description, data }) => {

    console.log(typeof (data[0]));


    return (
        <div className="bg-white max-h-[17vh] p-3 border-2 border-slate-400 rounded-md mx-auto mb-2 w-[95%] shadow-md hover:shadow-lg ">
            <h3 className="text-3xl mb-2">{title}</h3>

            {typeof (data[0]) === 'string' &&
                <div>
                    <p>{description}</p>
                    {data.length === 1 &&
                        <p>{data[0]}</p>
                    }
                    {data.length > 1 &&
                        <div>
                            {data.map((item, key) => {
                                return <span>{item} </span>
                            })}
                        </div>
                    }
                </div>
            }

            {typeof (data[0]) === 'object' &&
                <div>
                    <p className="mb-1">{description}</p>
                    <div>
                        {data.map((item, key) => {
                            return <span>* {item.name} ({item.symbol}) <br/> </span>
                        })}
                    </div>
                </div>
            }

        </div>
    );
}

export default InfoTileList;