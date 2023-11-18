import { makeObservable, observable, action } from 'mobx';

export interface UserInput {
  origin: string,
  destination: string,
  travellers: number,
  fromDate: Date,
  toDate: Date,
}

export interface Date {
  day: number,
  month: number,
  year: number
}

class SearchBarStore {
  userInput: UserInput;
  accommsData: any[];

  constructor() {
    makeObservable(this, {
      accommsData: observable,
      setAccommsData: action
    });

    this.userInput = {
      origin: "",
      destination: "",
      travellers: 0,
      fromDate: {
        day: 0,
        month: 0,
        year: 0
      },
      toDate: {
        day: 0,
        month: 0,
        year: 0
      }
    },
    this.accommsData = [];
  }

  setUserInput(newInput: UserInput) {
    this.userInput = newInput;
  }

  setAccommsData(accomms: any[]) {
    this.accommsData = accomms;
  }
}

const SearchBarStoreInstance = new SearchBarStore();

export { SearchBarStoreInstance };