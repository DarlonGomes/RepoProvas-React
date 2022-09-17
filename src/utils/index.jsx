function storeDataInLocalStorage(data) {
  localStorage.setItem(import.meta.VITE_LOCAL_STORAGE, JSON.stringify(data));
}

function retrieveLocalData() {
  return JSON.parse(localStorage.getItem(import.meta.VITE_LOCAL_SOTRAGE));
}

export { storeDataInLocalStorage, retrieveLocalData };
