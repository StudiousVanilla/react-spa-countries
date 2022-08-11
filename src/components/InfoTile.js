const InfoTile = ({title, description, data}) => {
    return ( 
        <div className="bg-white max-h-[17vh] p-3 border-2 border-slate-400 rounded-md mx-auto mb-2 w-[95%] shadow-md hover:shadow-lg ">
            <h3 className="text-3xl mb-2">{title}</h3>
            <div>
                <p>{description}{data}</p>
            </div>
        </div>
     );
}
 
export default InfoTile;