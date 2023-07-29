import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { fetchPlayer } from './playerSlice';

const PlayerStatsView = () => {
    const player=useSelector(state=>state.player)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchPlayer({type:'ELEMENT_SUMMARY',elementid:1}))
    },[])

    return (
        <div>
            {player.loading && "Loading..."}
            {!player.loading && player.error?(
            <div>
                Error:{player.error}
            </div>
            ):null}
            {!player.loading && player.fixtures.length?(
            <div>
                Player
            </div>
            ):null}
                        
                       
        </div>
    );
};

export default PlayerStatsView;