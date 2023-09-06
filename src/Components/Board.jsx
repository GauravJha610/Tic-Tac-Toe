import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles, onTileClick , PlayerTurn, strikeClass}) {
    return <div className="board">
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(0)} value={tiles[0]} className='right-border bottom-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(1)} value={tiles[1]} className='right-border bottom-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(2)} value={tiles[2]} className='bottom-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(3)} value={tiles[3]} className='right-border bottom-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(4)} value={tiles[4]} className='right-border bottom-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(5)} value={tiles[5]} className='bottom-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(6)} value={tiles[6]} className='right-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(7)} value={tiles[7]} className='right-border'/>
        <Tile PlayerTurn={PlayerTurn} onClick={()=> onTileClick(8)} value={tiles[8]} />
        <Strike strikeClass={strikeClass} />
    </div>
}

export default Board;