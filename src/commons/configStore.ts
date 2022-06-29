import { makeAutoObservable, runInAction } from "mobx";

export interface TOriginalStore {
  users: { name: string; tel: number }[];
  increaseUser: (user: { name: string; tel: number }) => void;
}

export default class Store {
  public users: { name: string; tel: number }[] = [];
  public config: number = 1;

  constructor() {
    // 与 makeObservable 相比，会自动推断属性, 不再需要枚举
    makeAutoObservable(this);
  }

  public get userNum(): number {
    return this.users.length;
  }

  public increaseUser = (user: { name: string; tel: number }) => {
    this.users.push(user);
  };

  public setUsers = () => {
    this.users = [
      { name: 'tianm  ', tel: 19029 },
      { name: 'dili', tel: 17723 },
    ];
  };

  // 异步 Action
  public getUsers = () => {
    const getApi = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: 'xiaozhang', tel: 19029 },
          { name: 'bnaiding', tel: 17723 },
        ]);
      }, 3000);
    });

    getApi.then((users: any) => {
      // 异步 Action 中的”可观察数据“更新需要通过 mobx.runInAction 包裹
      runInAction(() => {
        this.users = users;
      });
    });
  };
}