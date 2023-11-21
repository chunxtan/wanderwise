import { makeObservable, observable, action } from 'mobx';

class ResultsContainerStore {
  flightSelId: string | null;
  accommsSelId: string | null;

  constructor() {
    makeObservable(this, {
      flightSelId: observable,
      setFlightSelId: action,

      accommsSelId: observable,
      setAccommsSelId: action
    })

    this.flightSelId = null;
    this.accommsSelId = null;
  }

  setFlightSelId(id: string | null) {
    this.flightSelId = id;
  }

  setAccommsSelId(id: string | null) {
    this.accommsSelId = id;
  }
}

const ResContStoreInstance = new ResultsContainerStore();
export default ResContStoreInstance;