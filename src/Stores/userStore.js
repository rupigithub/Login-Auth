

import { createStore } from "redux";
import reducer from "../Reduce-fun/userReducer";


export const store = createStore(reducer);