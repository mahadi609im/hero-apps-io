import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/AppsManagement/TrendingApps';
import useDataLoadHook from '../../hooks/useDataLoadHook';
import LoadingDesign from '../../Components/Loading/LoadingDesign';

const Home = () => {
  const { loading } = useDataLoadHook();

  if (loading) {
    return <LoadingDesign></LoadingDesign>;
  }
  return (
    <div>
      <Banner></Banner>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
