import { useState } from 'react';

const useDataLoadHook = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errr, setError] = useState(null);
};
