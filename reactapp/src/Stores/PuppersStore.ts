import { observable, action, makeObservable, makeAutoObservable } from "mobx";

class PuppersStore {
  puppers: Array<Pupper | undefined> = [];
  constructor() {
    makeObservable(this, {
      puppers: observable,
    });
  }
  async getPuppers() {
    try {
      const answer = await fetch("http://localhost:8080/pupper/");
      const puppers: any = await answer.json();
      this.puppers = puppers;
    } catch (ex) {
      console.error(ex);
    }
  }
  async getRandomPupper() {
    const randomIDX: number = Math.ceil(
      Math.random() * this.puppers.length - 1
    );
    const chosenPupper: Pupper | undefined = this.puppers[randomIDX];
    return chosenPupper;
  }
}
export default PuppersStore;
