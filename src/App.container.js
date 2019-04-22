import { connect } from "react-redux";
import { hitApi, normalAction, counterSub, hitCopyApi } from "./actions";
import App from "./App";

const mapStateToProps = state => {
  console.log("container", state);
  return {
    counter: state.demo,
    data: state.ApiReducer.data,
    dataCopy: state.ApiReducerCopy.dataCopy
  };
};
const mapActionToDispatch = dispatch => {
  return {
    hitIt: () => dispatch(hitApi()),
    counterAction: () => dispatch(normalAction()),
    counterSubAction: () => dispatch(counterSub()),
    copyHitIt: () => dispatch(hitCopyApi())
  };
};
export default connect(
  mapStateToProps,
  mapActionToDispatch
)(App);
