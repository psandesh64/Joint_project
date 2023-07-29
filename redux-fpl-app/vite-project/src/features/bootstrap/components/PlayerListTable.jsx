import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchBootstrap } from '../bootstrapSlice';
import PlayerTable from './PlayerTable';
import { columns } from "./PlayerListColumns";

const PlayerListTable = () => {
    const bootstrap = useSelector((state) => state.bootstrap);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchBootstrap())
    }, []);

     return (
        <>
     {!bootstrap.loading&&bootstrap.elements.length?(<PlayerTable columns={columns} data={bootstrap.elements}/>):null}
     </>
     );
};
export default PlayerListTable;