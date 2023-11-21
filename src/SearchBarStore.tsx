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

const dummyAccData = [
    {
        "id": "32111542",
        "name": "Hotel JAL City Bangkok",
        "image": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/lodging/33000000/32120000/32111600/32111542/7f19665e_b.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.725731,
            "long": 100.578855
        },
        "price": "S$126",
        "reviews": {
            "score": 8.6,
            "total": 168
        }
    },
    {
        "id": "1825470",
        "name": "Park Plaza Sukhumvit Bangkok",
        "image": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/lodging/2000000/1830000/1825500/1825470/afcc5136_b.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.734763,
            "long": 100.56076
        },
        "price": "S$106",
        "reviews": {
            "score": 8.4,
            "total": 1003
        }
    },
    {
        "id": "3347945",
        "name": "JC Kevin Sathorn Bangkok Hotel",
        "image": "https://images.trvl-media.com/lodging/4000000/3350000/3348000/3347945/42af2c12.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.716216,
            "long": 100.531622
        },
        "price": "S$92",
        "reviews": {
            "score": 8.4,
            "total": 1006
        }
    },
    {
        "id": "6641611",
        "name": "Mandarin Hotel Managed by Centre Point",
        "image": "https://images.trvl-media.com/lodging/7000000/6650000/6641700/6641611/aa232f4c.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.733228,
            "long": 100.527224
        },
        "price": "S$102",
        "reviews": {
            "score": 8.8,
            "total": 1009
        }
    },
    {
        "id": "1064957",
        "name": "lebua at State Tower",
        "image": "https://images.trvl-media.com/lodging/2000000/1070000/1065000/1064957/1396e833.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.721555,
            "long": 100.516923
        },
        "price": "S$221",
        "reviews": {
            "score": 8.6,
            "total": 1004
        }
    },
    {
        "id": "527254",
        "name": "Amari Bangkok",
        "image": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/530000/527300/527254/30a99169_b.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.750628,
            "long": 100.54001
        },
        "price": "S$203",
        "reviews": {
            "score": 8.6,
            "total": 1006
        }
    },
    {
        "id": "13172072",
        "name": "Avani+ Riverside Bangkok Hotel",
        "image": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/lodging/14000000/13180000/13172100/13172072/c882b0fd_b.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.705346,
            "long": 100.490875
        },
        "price": "S$214",
        "reviews": {
            "score": 9.4,
            "total": 1002
        }
    },
    {
        "id": "15800656",
        "name": "Grande Centre Point Sukhumvit 55",
        "image": "https://images.trvl-media.com/lodging/16000000/15810000/15800700/15800656/75ded2a6.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.73169,
            "long": 100.582211
        },
        "price": "S$181",
        "reviews": {
            "score": 9,
            "total": 1007
        }
    },
    {
        "id": "92554532",
        "name": "ASAI Bangkok Sathorn",
        "image": "https://images.trvl-media.com/lodging/93000000/92560000/92554600/92554532/c9ab20d8.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.7188,
            "long": 100.51736
        },
        "price": "S$83",
        "reviews": {
            "score": 9.6,
            "total": 27
        }
    },
    {
        "id": "80186631",
        "name": "HOMM Sukhumvit34 Bangkok by Banyan Tree Group",
        "image": "https://images.trvl-media.com/lodging/81000000/80190000/80186700/80186631/f1a72221.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.723944,
            "long": 100.572398
        },
        "price": "S$132",
        "reviews": {
            "score": 8,
            "total": 8
        }
    },
    {
        "id": "41900502",
        "name": "Solaria Nishitetsu Hotel Bangkok",
        "image": "https://images.trvl-media.com/lodging/42000000/41910000/41900600/41900502/9416cea1.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.736783,
            "long": 100.560324
        },
        "price": "S$209",
        "reviews": {
            "score": 9.4,
            "total": 272
        }
    },
    {
        "id": "1494080",
        "name": "Centre Point Silom",
        "image": "https://images.trvl-media.com/lodging/2000000/1500000/1494100/1494080/0719ce7d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.719903,
            "long": 100.515273
        },
        "price": "S$128",
        "reviews": {
            "score": 8.8,
            "total": 1000
        }
    },
    {
        "id": "38891044",
        "name": "Eleven Hotel Bangkok",
        "image": "https://images.trvl-media.com/lodging/39000000/38900000/38891100/38891044/96ae9095.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.741012,
            "long": 100.556291
        },
        "price": "S$102",
        "reviews": {
            "score": 8.6,
            "total": 651
        }
    },
    {
        "id": "5773638",
        "name": "Centara Watergate Pavillion Hotel Bangkok",
        "image": "https://images.trvl-media.com/lodging/6000000/5780000/5773700/5773638/fcf7d463.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.751463,
            "long": 100.542228
        },
        "price": "S$148",
        "reviews": {
            "score": 8.8,
            "total": 1010
        }
    },
    {
        "id": "7678500",
        "name": "Holiday Inn Express Bangkok Sathorn, an IHG Hotel",
        "image": "https://images.trvl-media.com/lodging/8000000/7680000/7678500/7678500/336be069.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.724012,
            "long": 100.530655
        },
        "price": "S$85",
        "reviews": {
            "score": 8.6,
            "total": 1003
        }
    },
    {
        "id": "74489731",
        "name": "The Standard, Bangkok Mahanakhon",
        "image": "https://images.trvl-media.com/lodging/75000000/74490000/74489800/74489731/420ac2f3.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.723526,
            "long": 100.52827
        },
        "price": "S$364",
        "reviews": {
            "score": 9.2,
            "total": 162
        }
    },
    {
        "id": "983682",
        "name": "COMO Metropolitan Bangkok",
        "image": "https://images.trvl-media.com/lodging/1000000/990000/983700/983682/ad4fb02f.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.723854,
            "long": 100.53915
        },
        "price": "S$196",
        "reviews": {
            "score": 9.4,
            "total": 1002
        }
    },
    {
        "id": "1781323",
        "name": "Pullman Bangkok King Power",
        "image": "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/2000000/1790000/1781400/1781323/9caf50e5_b.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.760887,
            "long": 100.53767
        },
        "price": "S$209",
        "reviews": {
            "score": 8.8,
            "total": 1001
        }
    },
    {
        "id": "43964",
        "name": "Banyan Tree Bangkok",
        "image": "https://images.trvl-media.com/lodging/1000000/50000/44000/43964/3c936c5e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.724324,
            "long": 100.539635
        },
        "price": "S$250",
        "reviews": {
            "score": 9,
            "total": 1007
        }
    },
    {
        "id": "3741497",
        "name": "Tower Club at lebua",
        "image": "https://images.trvl-media.com/lodging/4000000/3750000/3741500/3741497/2be36031.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.721819,
            "long": 100.517073
        },
        "price": "S$284",
        "reviews": {
            "score": 8.8,
            "total": 1002
        }
    },
    {
        "id": "521418",
        "name": "Chatrium Residence Sathorn",
        "image": "https://images.trvl-media.com/lodging/1000000/530000/521500/521418/d638b16a.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.70232,
            "long": 100.537361
        },
        "price": "S$106",
        "reviews": {
            "score": 8.8,
            "total": 1002
        }
    },
    {
        "id": "1073739",
        "name": "The Davis Bangkok Hotel",
        "image": "https://images.trvl-media.com/lodging/2000000/1080000/1073800/1073739/bc65c09f.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.721078,
            "long": 100.565803
        },
        "price": "S$76",
        "reviews": {
            "score": 8.2,
            "total": 1007
        }
    },
    {
        "id": "2120",
        "name": "Anantara Riverside Bangkok Resort",
        "image": "https://images.trvl-media.com/lodging/1000000/10000/2200/2120/6e6b14f7.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.704804,
            "long": 100.491908
        },
        "price": "S$227",
        "reviews": {
            "score": 9.2,
            "total": 1008
        }
    },
    {
        "id": "16390939",
        "name": "Cross Vibe Sukhumvit Hotel",
        "image": "https://images.trvl-media.com/lodging/17000000/16400000/16391000/16390939/f92e19e4.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.704286,
            "long": 100.599158
        },
        "price": "S$82",
        "reviews": {
            "score": 8.2,
            "total": 1001
        }
    },
    {
        "id": "22883",
        "name": "Rembrandt Hotel & Suites Bangkok",
        "image": "https://images.trvl-media.com/lodging/1000000/30000/22900/22883/d179d4d9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        "mapMarker": {
            "lat": 13.732417,
            "long": 100.563012
        },
        "price": "S$84",
        "reviews": {
            "score": 8.6,
            "total": 1012
        }
    }
]


class SearchBarStore {
  userInput: UserInput;
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
    this.accommsData = dummyAccData;
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