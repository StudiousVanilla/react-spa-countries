const InfoTile = ({data, extra}) => {
    return ( 
        <div className="bg-white max-h-[17vh] p-3 border-2 border-slate-400 rounded-md mx-auto mb-2 w-[95%] shadow-md hover:shadow-lg flex justify-between items-center">
            <h3 className="text-3xl">{data}</h3>
            <p className="text-xl mt-1">{extra}</p>
        </div>
     );
}
 
export default InfoTile;