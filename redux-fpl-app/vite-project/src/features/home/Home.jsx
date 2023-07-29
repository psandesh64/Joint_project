import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {fetchBootstrap} from '../bootstrap/bootstrapSlice'
const Home = () => {
    const bootstrap=useSelector(state=>state.bootstrap)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBootstrap());
    },[])

     return (
        <div>
           Home           
        </div>
    );
};

export default Home;