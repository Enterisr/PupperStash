import { observable, action, makeObservable, makeAutoObservable } from "mobx";
import { Video } from "src/types/Video";

import Utils from "../Utils";

class PuppersStore {
  puppers: Array<Pupper | undefined> = [];
  videos: Array<Video | undefined> = [];

  constructor() {
    makeObservable(this, {
      puppers: observable,
      videos: observable,
    });
  }
  async getVidoes() {
    try {
      const ans = await fetch(Utils.ResovleServerPath() + "video");
      const videos = await ans.json();
      this.videos = videos;
    } catch (ex) {
      console.error(ex);
    }
  }
  async getPuppers() {
    try {
      const answer = await fetch(Utils.ResovleServerPath() + "pupper");
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
