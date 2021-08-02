import React from 'react';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { useGlobalContext } from './Context';

const Home = () => {

  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>

      <button onClick={openSidebar} className='sidebar-toggle'>
        <ViewHeadlineIcon />
      </button>

      <button onClick={openModal} className='btn'>
        show modal
      </button>
      
    </main>
  );
};

export default Home;