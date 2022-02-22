import { createStore } from "redux";

import { rootReducer } from "./store/rootReducer";

export const store = createStore(rootReducer);
