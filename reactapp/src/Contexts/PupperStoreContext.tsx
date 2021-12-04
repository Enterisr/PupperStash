import React, { FC } from "react";
import PupperStore from "src/Stores/PuppersStore";

const PupperStoreContext = React.createContext<Partial<PupperStore>>({});

interface IProps {
  children: React.ReactElement;
}
const pupperStore = new PupperStore();
pupperStore.getPuppers();
pupperStore.getVidoes();
const PupperStoreProvider = (props: IProps) => {
  return (
    <PupperStoreContext.Provider value={pupperStore}>
      {props.children}
    </PupperStoreContext.Provider>
  );
};
export { PupperStoreContext, PupperStoreProvider };
