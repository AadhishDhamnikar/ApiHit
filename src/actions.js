export function hitApi() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        dispatch(getData(data));
      });
  };
}
export function hitCopyApi() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(resCopy => resCopy.json())
      .then(dataCopy => {
        dispatch(getCopyData(dataCopy));
      });
  };
}
export function normalAction() {
  return {
    type: "increment"
  };
}
export function counterSub() {
  return {
    type: "decrement"
  };
}
export function getData(data) {
  return {
    type: "Data",
    data: data
  };
}
export function getCopyData(dataCopy) {
  return {
    type: "showDetails",
    dataCopy: dataCopy
  };
}
