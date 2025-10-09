import axios from 'axios';
import { useEffect, useState } from 'react';

const useDataLoadHook = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fake delay add korar jonno
    setTimeout(() => {
      axios('/appsData.json')
        .then(data => setApps(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return { apps, loading, error };
};

export default useDataLoadHook;
