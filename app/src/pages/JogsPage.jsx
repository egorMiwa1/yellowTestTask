import React, { useEffect } from 'react';
import JogCard from '../components/JogCard/JogCard'
import { useDispatch, useSelector } from 'react-redux'
import { syncData } from '../redux/actions/jogsActions'
import DateFilter from '../components/DateFilter/DateFilter'
import AddJogForm from '../components/AddJogForm/AddJogForm'

const JogsPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.user.isLogged)
  const jogs = useSelector((state) => state.jogs.filteredJogList);
  const isFilterOpen = useSelector(state => state.jogs.isFilterOpen);

  useEffect(() => {
    if (isLogged) dispatch(syncData())
  }, [isLogged])

  return (
    <div >
      {isFilterOpen ? <DateFilter /> : null}
      {jogs.map((item, index) => {
        return (<JogCard
          style={index > 0 ? { marginTop: 80 } : null}
          jog={item}
        />)
      })}
    </div>
  );
}

export default JogsPage;
