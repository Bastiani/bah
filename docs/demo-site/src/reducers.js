import { combineReducers } from "redux";

import TabReducer from "@rafacdb/bah/lib/tabReducer";

const rootReducer = combineReducers({
  tab: TabReducer
});

export default rootReducer;
