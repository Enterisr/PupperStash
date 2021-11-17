import React, { FC } from "react";
import PupperStore from "src/Stores/PuppersStore";

const PupperStoreContext = React.createContext<Partial<PupperStore>>({});

interface IProps {
  children: React.ReactNode;
}
const pupperStore = new PupperStore();
pupperStore.getPuppers();
const PupperStoreProvider = (props: IProps) => {
  return (
    <PupperStoreContext.Provider value={pupperStore}>
      {props.children}
    </PupperStoreContext.Provider>
  );
};
export { PupperStoreContext, PupperStoreProvider };
/*
export const PupperStoreObserver = (props: IProps) => {
  //some next level shit!
  return (
    <PupperStoreContext.Consumer>
      {(value: any) => React.cloneElement(props.children, value)}
    </PupperStoreContext.Consumer>
  );
};*/
