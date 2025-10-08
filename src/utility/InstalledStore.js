const getInstalledData = () => {
  let installedData = localStorage.getItem('installed');

  if (installedData) {
    return JSON.parse(installedData);
  } else {
    return [];
  }
};

const setInstalledData = id => {
  let installedData = getInstalledData();

  if (installedData.includes(id)) {
    alert('Installed');
  } else {
    installedData.push(id);
    let installedDataStr = JSON.stringify(installedData);
    localStorage.setItem('installed', installedDataStr);
  }
};

export { setInstalledData, getInstalledData };
