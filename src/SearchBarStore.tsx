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

export interface AccommsData {
  id: string,
  name: string,
  image: string,
  mapMarker: {
    lat: number,
    long: number
  },
  price: string,
  reviews: {
    score: number,
    total: number
  }
}

export type flightSchedule = {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number
}

export interface FlightsData {
  id: string,
  price: string,
  departureDateTime: flightSchedule,
  arrivalDateTime: flightSchedule,
  flightDurationMin: number,
  stopCount: number
}

class SearchBarStore {
  userInput: UserInput;
  accommsDestId: string;
  accommsData: AccommsData[];
  iataCodes: {
    origin: string;
    destination: string;
  };
  flightsData: FlightsData[];

  constructor() {
    makeObservable(this, {
      accommsData: observable,
      setAccommsData: action,

      flightsData: observable,
      setFlightsData: action
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
    this.accommsDestId = "",
    this.accommsData = [];
    this.iataCodes = {
      origin: "",
      destination: ""
    },
    this.flightsData = [];
  }

  setUserInput(newInput: UserInput) {
    this.userInput = newInput;
  }

  setAccommsData(accomms: AccommsData[]) {
    this.accommsData = accomms;
  }

  setFlightsData(flights: FlightsData[]) {
    this.flightsData = flights;
  }
}

const SearchBarStoreInstance = new SearchBarStore();

export { SearchBarStoreInstance };