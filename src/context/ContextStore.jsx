import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "./ContextStoreUtil";

const Store = createContext();
const UpdateStore = createContext();

export const ContextStore = ({ children }) => {
  const [store, dispatchUpdate] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ store }}>
      <UpdateStore.Provider value={dispatchUpdate}>
        {children}
      </UpdateStore.Provider>
    </Store.Provider>
  );
};

ContextStore.propTypes = {
  children: {},
};
export const useStore = () => useContext(Store);
export const useUpdateStore = () => useContext(UpdateStore);
