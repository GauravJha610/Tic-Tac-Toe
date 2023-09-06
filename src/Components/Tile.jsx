function Tile({className , value , onClick , PlayerTurn}) {
    let hoverClass=null;
    if(value==null && PlayerTurn!=null){
        hoverClass=`${PlayerTurn.toLowerCase()}-hover`;
    }
    return ( <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
        {value}
    </div> );
}

export default Tile;