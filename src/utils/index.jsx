function storeDataInLocalStorage(data) {
  console.log(data);
  console.log("repoprovas_user_config")
  const a = localStorage.setItem("repoprovas_user_config", JSON.stringify(data));
  console.log(a)
}

function retrieveLocalData() {
  console.log("repoprovas_user_config")
  const a = JSON.parse(localStorage.getItem("repoprovas_user_config"));
  console.log(a)
  return a
  
}

export { storeDataInLocalStorage, retrieveLocalData };
