import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver';
import GameState from './GameState'
import Reset from './Reset';
import gameOverSoundAssest from '../sounds/gameOver.wav'
import clickSoundAssest from '../sounds/click.wav'

const gameOverSound=new Audio(gameOverSoundAssest);
gameOverSound.volume=0.2;
const clickSound=new Audio(clickSoundAssest);
clickSound.volume=0.5;

const Player_X='X';
const Player_O='O';

const winningCombinations=[
    //for rows
    {combo:[0,1,2] , strikeClass:"strike-row-1"},
    {combo:[3,4,5] , strikeClass:"strike-row-2"},
    {combo:[6,7,8] , strikeClass:"strike-row-3"},
    //for columns
    {combo:[0,3,6] , strikeClass:"strike-column-1"},
    {combo:[1,4,7] , strikeClass:"strike-column-2"},
    {combo:[2,5,8] , strikeClass:"strike-column-3"},
    //for diagonals
    {combo:[0,4,8] , strikeClass:"strike-diagonal-1"},
    {combo:[2,4,6] , strikeClass:"strike-diagonal-2"},

];

function checkWinner(tiles, setStrikeClass , setGameState){
    for(const {combo,strikeClass} of winningCombinations){
        const tilevalue1=tiles[combo[0]];
        const tilevalue2=tiles[combo[1]];
        const tilevalue3=tiles[combo[2]];
        if(tilevalue1!=null && tilevalue1===tilevalue2 && tilevalue1===tilevalue3){
            setStrikeClass(strikeClass);
            if(tilevalue1==Player_O){
                setGameState(GameState.playerOwins);
            }
            else{
                setGameState(GameState.playerXwins);
            }
            return;
        }
    }
    const areAllTilesFilledIn=tiles.every((tile)=> tile!=null);
    if(areAllTilesFilledIn){
        setGameState(GameState.draw);
    }
}
const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [PlayerTurn, setPlayerTurn] = useState(Player_X);
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState] = useState(GameState.inProgess)
    useEffect(()=>{
        checkWinner(tiles, setStrikeClass , setGameState);
    },[tiles]);
    useEffect(()=>{
        if(tiles.some((tile) => tile!==null)){
            clickSound.play();
        }
    },[tiles]);

    useEffect(()=>{
        if( gameState !== GameState.inProgess){
            gameOverSound.play();
        }
    },[gameState]);
    const handleReset=()=>{
        setGameState(GameState.inProgess);
        setTiles(Array(9).fill(null));
        setPlayerTurn(Player_X);
        setStrikeClass(null);
    }
    const handleTileClick=(index)=>{
        if(gameState!=GameState.inProgess){
            return;
        }
        if(tiles[index]!== null){
            return;
        }
        const newTiles=[...tiles]
        newTiles[index]=PlayerTurn;
        setTiles(newTiles);
        if(PlayerTurn===Player_X){
            setPlayerTurn(Player_O);
        }
        else{
            setPlayerTurn(Player_X);
        }

    }
  return(
    <div>
        <h1>Tic Tac Toe</h1>
        <Board strikeClass={strikeClass} PlayerTurn={PlayerTurn} tiles={tiles} onTileClick={handleTileClick}/>
        <GameOver gameState={gameState}/>
        <Reset gameState={gameState} onReset={handleReset}/>
    </div>
  )
    
  
}

export default TicTacToe