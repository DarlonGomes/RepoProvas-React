function storeDataInLocalStorage(data) {
  localStorage.setItem("repoprovas_user_config", JSON?.stringify(data));
}

function retrieveLocalData() {
  const config = JSON?.parse(localStorage.getItem("repoprovas_user_config"));
  return config;
}

export { storeDataInLocalStorage, retrieveLocalData };
