import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from "@mui/x-date-pickers";
import './SearchBar.css'
import dayjs, { Dayjs } from 'dayjs'; 
import { Date, AccommsData, SearchBarStoreInstance, FlightsData } from "./SearchBarStore";

const dummyFlightData = {
  "sessionToken": "CnRDbFFJQVJKUUNrNEtKRE01WW1RNVpHVmlMVEppTURFdE5EWXpaaTFoTVRkbExUaGpaRGcxT1RRNU9UQTNZeEFDR2lRME5HSXlZVFV5TXkwM1pEQm1MVFF4T1RjdE9EQTNOUzB5TmpVek0yUTRaakpsTlRjPSItCgJTRxIFZW4tR0IaA1NHRCIXCgUKA1NJThIFCgNMSFIaBwjnDxAMGBYoATABKiQzOWJkOWRlYi0yYjAxLTQ2M2YtYTE3ZS04Y2Q4NTk0OTkwN2M=-cells4",
  "status": "RESULT_STATUS_INCOMPLETE",
  "action": "RESULT_ACTION_REPLACED",
  "content": {
    "results": {
      "itineraries": {
        "16292-2312220005--31799-1-13554-2312220805": {
          "pricingOptions": [
            {
              "price": {
                "amount": "744000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "swis"
              ],
              "items": [
                {
                  "price": {
                    "amount": "744000",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "swis",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fswis%252F1%252F16292.13554.2023-12-22%252Fair%252Fairli%252Fflights%253Fitinerary%253Dflight%25257C-31799%25257C177%25257C16292%25257C2023-12-22T00%25253A05%25257C18563%25257C2023-12-22T06%25253A10%25257C785%25257CTNCDWSG%25252FDX2S%25257CT%25257C-%25253Bflight%25257C-31799%25257C316%25257C18563%25257C2023-12-22T07%25253A10%25257C13554%25257C2023-12-22T08%25253A05%25257C115%25257CTNCDWSG%25252FDX2S%25257CT%25257C-%2526carriers%253D-31799%2526operators%253D-31799%25253B-31799%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D744.00%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpLs8sFmLmWFIvxczxKVOhYfHkNWxGTAqMAAO4o2McAAAA%25257C-562314704594341138%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-19T05%25253A10%25253A28%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-18563-2312220005-2312220610--31799",
                      "bookingCode": "T",
                      "fareBasisCode": "TNCDWSG/DX2S"
                    },
                    {
                      "segmentId": "18563-13554-2312220710-2312220805--31799",
                      "bookingCode": "T",
                      "fareBasisCode": "TNCDWSG/DX2S"
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "UcZ1uWgG6e_5",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312220005--31799-1-13554-2312220805"
          ],
          "sustainabilityData": null
        },
        "16292-2312220025--32442-1-13554-2312221325": {
          "pricingOptions": [
            {
              "price": {
                "amount": "557000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "vias"
              ],
              "items": [
                {
                  "price": {
                    "amount": "557000",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "vias",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fvias%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-32442%25257C544%25257C16292%25257C2023-12-22T00%25253A25%25257C15641%25257C2023-12-22T05%25253A40%25257C315%25257CSSE0WCSF%25257CB%25257C-%25253Bflight%25257C-32442%25257C533%25257C15641%25257C2023-12-22T09%25253A05%25257C13554%25257C2023-12-22T13%25253A25%25257C740%25257CSSE0WCSF%25257CS%25257C-%2526carriers%253D-32442%2526operators%253D-32442%25253B-32442%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D557.00%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpy0wsFmLm2GsuxczxKVOhYfHkNWxGTAqMAH6mSPUcAAAA%25257C-1982794268692515639%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A53%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-15641-2312220025-2312220540--32442",
                      "bookingCode": "B",
                      "fareBasisCode": "SSE0WCSF"
                    },
                    {
                      "segmentId": "15641-13554-2312220905-2312221325--32442",
                      "bookingCode": "S",
                      "fareBasisCode": "SSE0WCSF"
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "gjlVpiGgzefp",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312220025--32442-1-13554-2312221325"
          ],
          "sustainabilityData": null
        },
        "16292-2312220900--31876-0-13554-2312221520": {
          "pricingOptions": [
            {
              "price": {
                "amount": "1082490",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "trsg"
              ],
              "items": [
                {
                  "price": {
                    "amount": "1082490",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "trsg",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Ftrsg%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-31876%25257C308%25257C16292%25257C2023-12-22T09%25253A00%25257C13554%25257C2023-12-22T15%25253A20%25257C860%25257C-%25257C-%25257C-%2526carriers%253D-31876%2526operators%253D-31876%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D1082.49%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpKSpOF2Lm2GsuxczxKVOhYfHkNWxGTAqMALAD54UcAAAA%25257C9106868441195292464%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A52%2526pqid%253Dtrue%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-13554-2312220900-2312221520--31876",
                      "bookingCode": "",
                      "fareBasisCode": ""
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "5a2eW96raSGe",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312220900--31876-0-13554-2312221520"
          ],
          "sustainabilityData": null
        },
        "16292-2312221055--31939-1-13554-2312222200": {
          "pricingOptions": [
            {
              "price": {
                "amount": "739000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "vysg"
              ],
              "items": [
                {
                  "price": {
                    "amount": "739000",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "vysg",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fvysg%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-31939%25257C943%25257C16292%25257C2023-12-22T10%25253A55%25257C11089%25257C2023-12-22T14%25253A00%25257C485%25257C-%25257C-%25257C-%25253Bflight%25257C-31939%25257C5%25257C11089%25257C2023-12-22T17%25253A25%25257C13554%25257C2023-12-22T22%25253A00%25257C455%25257C-%25257C-%25257C-%2526carriers%253D-31939%2526operators%253D-31939%25253B-31939%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D739.00%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpqyxOF2Lm2GsuxczxKVOhYfHkNWxGTAqMAKS1gCocAAAA%25257C7335886051764566817%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A57%2526pqid%253Dtrue%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-11089-2312221055-2312221400--31939",
                      "bookingCode": "",
                      "fareBasisCode": ""
                    },
                    {
                      "segmentId": "11089-13554-2312221725-2312222200--31939",
                      "bookingCode": "",
                      "fareBasisCode": ""
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "9oijitVMwW8Q",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312221055--31939-1-13554-2312222200"
          ],
          "sustainabilityData": null
        },
        "16292-2312221055--32480-1-13554-2312222200": {
          "pricingOptions": [
            {
              "price": {
                "amount": "687400",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "ba__"
              ],
              "items": [
                {
                  "price": {
                    "amount": "687400",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "ba__",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fba__%252F1%252F16292.13554.2023-12-22%252Fair%252Fairli%252Fflights%253Fitinerary%253Dflight%25257C-32480%25257C2307%25257C16292%25257C2023-12-22T10%25253A55%25257C11089%25257C2023-12-22T14%25253A00%25257C485%25257CNNWF80S4%25257CN%25257CStandard%25253Bflight%25257C-32480%25257C7005%25257C11089%25257C2023-12-22T17%25253A25%25257C13554%25257C2023-12-22T22%25253A00%25257C455%25257CNNWF80S4%25257CN%25257CStandard%2526carriers%253D-32480%2526operators%253D-31939%25253B-31939%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D687.40%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mJJSoyPF2Lm2GsuxczxKVOhYfHkNWxGTAqMAC2IhakcAAAA%25257C3206871110616454569%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A49%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-11089-2312221055-2312221400--32480",
                      "bookingCode": "N",
                      "fareBasisCode": "NNWF80S4"
                    },
                    {
                      "segmentId": "11089-13554-2312221725-2312222200--32480",
                      "bookingCode": "N",
                      "fareBasisCode": "NNWF80S4"
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "JhzAskPF6bun",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312221055--32480-1-13554-2312222200"
          ],
          "sustainabilityData": null
        },
        "16292-2312221245--31876-0-13554-2312221910": {
          "pricingOptions": [
            {
              "price": {
                "amount": "1154340",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "vias"
              ],
              "items": [
                {
                  "price": {
                    "amount": "1154340",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "vias",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fvias%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-31876%25257C318%25257C16292%25257C2023-12-22T12%25253A45%25257C13554%25257C2023-12-22T19%25253A10%25257C865%25257CQ15SGO%25257CQ%25257C-%2526carriers%253D-31876%2526operators%253D-31876%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D1154.34%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpy0wsFmLm2GsuxczxKVOhYfHkNWxGTAqMAH6mSPUcAAAA%25257C735166094798294273%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A53%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-13554-2312221245-2312221910--31876",
                      "bookingCode": "Q",
                      "fareBasisCode": "Q15SGO"
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "DZqkEKPsJQzG",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312221245--31876-0-13554-2312221910"
          ],
          "sustainabilityData": null
        },
        "16292-2312222020--31939-1-13554-2312230720": {
          "pricingOptions": [
            {
              "price": {
                "amount": "739000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "vysg"
              ],
              "items": [
                {
                  "price": {
                    "amount": "739000",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "vysg",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fvysg%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-31939%25257C947%25257C16292%25257C2023-12-22T20%25253A20%25257C11089%25257C2023-12-22T23%25253A25%25257C485%25257C-%25257C-%25257C-%25253Bflight%25257C-31939%25257C105%25257C11089%25257C2023-12-23T02%25253A45%25257C13554%25257C2023-12-23T07%25253A20%25257C455%25257C-%25257C-%25257C-%2526carriers%253D-31939%2526operators%253D-31939%25253B-31939%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D739.00%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpqyxOF2Lm2GsuxczxKVOhYfHkNWxGTAqMAKS1gCocAAAA%25257C7254843306371643054%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A57%2526pqid%253Dtrue%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-11089-2312222020-2312222325--31939",
                      "bookingCode": "",
                      "fareBasisCode": ""
                    },
                    {
                      "segmentId": "11089-13554-2312230245-2312230720--31939",
                      "bookingCode": "",
                      "fareBasisCode": ""
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "yN3lXLcMSVd8",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312222020--31939-1-13554-2312230720"
          ],
          "sustainabilityData": null
        },
        "16292-2312222300--32442-1-13554-2312231330": {
          "pricingOptions": [
            {
              "price": {
                "amount": "557000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "vias"
              ],
              "items": [
                {
                  "price": {
                    "amount": "557000",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "vias",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fvias%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-32442%25257C566%25257C16292%25257C2023-12-22T23%25253A00%25257C15641%25257C2023-12-23T04%25253A10%25257C310%25257CSSE0WCSF%25257CB%25257C-%25253Bflight%25257C-32442%25257C533%25257C15641%25257C2023-12-23T09%25253A05%25257C13554%25257C2023-12-23T13%25253A30%25257C745%25257CSSE0WCSF%25257CS%25257C-%2526carriers%253D-32442%2526operators%253D-32442%25253B-32442%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D557.00%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpy0wsFmLm2GsuxczxKVOhYfHkNWxGTAqMAH6mSPUcAAAA%25257C9053243649966212589%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A53%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-15641-2312222300-2312230410--32442",
                      "bookingCode": "B",
                      "fareBasisCode": "SSE0WCSF"
                    },
                    {
                      "segmentId": "15641-13554-2312230905-2312231330--32442",
                      "bookingCode": "S",
                      "fareBasisCode": "SSE0WCSF"
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "x84_-aqj6Qbu",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312222300--32442-1-13554-2312231330"
          ],
          "sustainabilityData": null
        },
        "16292-2312222315--32480-0-13554-2312230530": {
          "pricingOptions": [
            {
              "price": {
                "amount": "1093000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "trgo"
              ],
              "items": [
                {
                  "price": {
                    "amount": "1093000",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "trgo",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Ftrgo%252F1%252F16292.13554.2023-12-22%252Fair%252Ftrava%252Fflights%253Fitinerary%253Dflight%25257C-32480%25257C12%25257C16292%25257C2023-12-22T23%25253A15%25257C13554%25257C2023-12-23T05%25253A30%25257C855%25257C-%25257C-%25257C-%2526carriers%253D-32480%2526operators%253D-32480%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D1093.00%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mIpKUrPF2Lm2GsuxczxKVOhYfHkNWxGTAqMAIfTQ1UcAAAA%25257C-5293942389915650490%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-18T10%25253A46%25253A55%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-13554-2312222315-2312230530--32480",
                      "bookingCode": "",
                      "fareBasisCode": ""
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "JE_s6_rFG8db",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312222315--32480-0-13554-2312230530"
          ],
          "sustainabilityData": null
        },
        "16292-2312222355--32090-1-13554-2312230845": {
          "pricingOptions": [
            {
              "price": {
                "amount": "773900",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              },
              "agentIds": [
                "luft"
              ],
              "items": [
                {
                  "price": {
                    "amount": "773900",
                    "unit": "PRICE_UNIT_MILLI",
                    "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                  },
                  "agentId": "luft",
                  "deepLink": "https://agw.skyscnr.com/v1/redirect?pageUrl=https%3A%2F%2Fskyscanner.pxf.io%2Fc%2F2850210%2F1103265%2F13416%3Fu%3Dhttps%253A%252F%252Fwww.skyscanner.com.sg%252Ftransport_deeplink%252F4.0%252FSG%252Fen-GB%252FSGD%252Fluft%252F1%252F16292.13554.2023-12-22%252Fair%252Fairli%252Fflights%253Fitinerary%253Dflight%25257C-32090%25257C779%25257C16292%25257C2023-12-22T23%25253A55%25257C11616%25257C2023-12-23T06%25253A10%25257C795%25257CTNCDWSG%25252FDX2S%25257CT%25257C-%25253Bflight%25257C-32090%25257C900%25257C11616%25257C2023-12-23T08%25253A00%25257C13554%25257C2023-12-23T08%25253A45%25257C105%25257CTNCDWSG%25252FDX2S%25257CT%25257C-%2526carriers%253D-32090%2526operators%253D-32090%25253B-32090%2526passengers%253D1%2526channel%253Ddataapi%2526cabin_class%253Deconomy%2526fps_session_id%253D39bd9deb-2b01-463f-a17e-8cd85949907c%2526ticket_price%253D773.90%2526is_npt%253Dfalse%2526is_multipart%253Dfalse%2526client_id%253Dskyscanner_b2b%2526request_id%253D992fb3f8-e2b0-45a3-aa42-921f135214f4%2526q_ids%253DH4sIAAAAAAAA_-OS4mLJKU0rEWLm2GsuxczxKVOhYfHkNWxGTAqMABP1vIwcAAAA%25257C-9126110044583610111%25257C2%2526q_sources%253DJACQUARD%2526commercial_filters%253Dfalse%2526q_datetime_utc%253D2023-11-19T09%25253A49%25253A24%2526pqid%253Dfalse%2526api_logo%253Dhttps%25253A%25252F%25252Flogos.skyscnr.com%25252Fimages%25252Fpartners%25252Fdefault.png%2526api_pbs%253Dtrue%2526app_id%253D8CdRAjdoIPZ7vf%2525252FMr2u7vmOc2%2525252FPxu0y10PoO3nTomKERbn9Ld6H6QkxJI4f%2525252BkMMp&impactMediaPartnerId=2850210",
                  "fares": [
                    {
                      "segmentId": "16292-11616-2312222355-2312230610--32090",
                      "bookingCode": "T",
                      "fareBasisCode": "TNCDWSG/DX2S"
                    },
                    {
                      "segmentId": "11616-13554-2312230800-2312230845--32090",
                      "bookingCode": "T",
                      "fareBasisCode": "TNCDWSG/DX2S"
                    }
                  ]
                }
              ],
              "transferType": "TRANSFER_TYPE_MANAGED",
              "id": "5vm8Ug0Ex2hP",
              "pricingOptionFare": null
            }
          ],
          "legIds": [
            "16292-2312222355--32090-1-13554-2312230845"
          ],
          "sustainabilityData": null
        }
      },
      "legs": {
        "16292-2312220005--31799-1-13554-2312220805": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 0,
            "minute": 5,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 8,
            "minute": 5,
            "second": 0
          },
          "durationInMinutes": 960,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-31799"
          ],
          "operatingCarrierIds": [
            "-31799"
          ],
          "segmentIds": [
            "16292-18563-2312220005-2312220610--31799",
            "18563-13554-2312220710-2312220805--31799"
          ]
        },
        "16292-2312220025--32442-1-13554-2312221325": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 0,
            "minute": 25,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 13,
            "minute": 25,
            "second": 0
          },
          "durationInMinutes": 1260,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-32442"
          ],
          "operatingCarrierIds": [
            "-32442"
          ],
          "segmentIds": [
            "16292-15641-2312220025-2312220540--32442",
            "15641-13554-2312220905-2312221325--32442"
          ]
        },
        "16292-2312220900--31876-0-13554-2312221520": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 9,
            "minute": 0,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 15,
            "minute": 20,
            "second": 0
          },
          "durationInMinutes": 860,
          "stopCount": 0,
          "marketingCarrierIds": [
            "-31876"
          ],
          "operatingCarrierIds": [
            "-31876"
          ],
          "segmentIds": [
            "16292-13554-2312220900-2312221520--31876"
          ]
        },
        "16292-2312221055--31939-1-13554-2312222200": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 10,
            "minute": 55,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 22,
            "minute": 0,
            "second": 0
          },
          "durationInMinutes": 1145,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-31939"
          ],
          "operatingCarrierIds": [
            "-31939"
          ],
          "segmentIds": [
            "16292-11089-2312221055-2312221400--31939",
            "11089-13554-2312221725-2312222200--31939"
          ]
        },
        "16292-2312221055--32480-1-13554-2312222200": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 10,
            "minute": 55,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 22,
            "minute": 0,
            "second": 0
          },
          "durationInMinutes": 1145,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-32480"
          ],
          "operatingCarrierIds": [
            "-31939"
          ],
          "segmentIds": [
            "16292-11089-2312221055-2312221400--32480",
            "11089-13554-2312221725-2312222200--32480"
          ]
        },
        "16292-2312221245--31876-0-13554-2312221910": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 12,
            "minute": 45,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 19,
            "minute": 10,
            "second": 0
          },
          "durationInMinutes": 865,
          "stopCount": 0,
          "marketingCarrierIds": [
            "-31876"
          ],
          "operatingCarrierIds": [
            "-31876"
          ],
          "segmentIds": [
            "16292-13554-2312221245-2312221910--31876"
          ]
        },
        "16292-2312222020--31939-1-13554-2312230720": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 20,
            "minute": 20,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 7,
            "minute": 20,
            "second": 0
          },
          "durationInMinutes": 1140,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-31939"
          ],
          "operatingCarrierIds": [
            "-31939"
          ],
          "segmentIds": [
            "16292-11089-2312222020-2312222325--31939",
            "11089-13554-2312230245-2312230720--31939"
          ]
        },
        "16292-2312222300--32442-1-13554-2312231330": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 0,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 13,
            "minute": 30,
            "second": 0
          },
          "durationInMinutes": 1350,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-32442"
          ],
          "operatingCarrierIds": [
            "-32442"
          ],
          "segmentIds": [
            "16292-15641-2312222300-2312230410--32442",
            "15641-13554-2312230905-2312231330--32442"
          ]
        },
        "16292-2312222315--32480-0-13554-2312230530": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 15,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 5,
            "minute": 30,
            "second": 0
          },
          "durationInMinutes": 855,
          "stopCount": 0,
          "marketingCarrierIds": [
            "-32480"
          ],
          "operatingCarrierIds": [
            "-32480"
          ],
          "segmentIds": [
            "16292-13554-2312222315-2312230530--32480"
          ]
        },
        "16292-2312222355--32090-1-13554-2312230845": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 55,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 8,
            "minute": 45,
            "second": 0
          },
          "durationInMinutes": 1010,
          "stopCount": 1,
          "marketingCarrierIds": [
            "-32090"
          ],
          "operatingCarrierIds": [
            "-32090"
          ],
          "segmentIds": [
            "16292-11616-2312222355-2312230610--32090",
            "11616-13554-2312230800-2312230845--32090"
          ]
        }
      },
      "segments": {
        "11089-13554-2312221725-2312222200--31939": {
          "originPlaceId": "95673852",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 17,
            "minute": 25,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 22,
            "minute": 0,
            "second": 0
          },
          "durationInMinutes": 455,
          "marketingFlightNumber": "5",
          "marketingCarrierId": "-31939",
          "operatingCarrierId": "-31939"
        },
        "11089-13554-2312221725-2312222200--32480": {
          "originPlaceId": "95673852",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 17,
            "minute": 25,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 22,
            "minute": 0,
            "second": 0
          },
          "durationInMinutes": 455,
          "marketingFlightNumber": "7005",
          "marketingCarrierId": "-32480",
          "operatingCarrierId": "-31939"
        },
        "11089-13554-2312230245-2312230720--31939": {
          "originPlaceId": "95673852",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 2,
            "minute": 45,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 7,
            "minute": 20,
            "second": 0
          },
          "durationInMinutes": 455,
          "marketingFlightNumber": "105",
          "marketingCarrierId": "-31939",
          "operatingCarrierId": "-31939"
        },
        "11616-13554-2312230800-2312230845--32090": {
          "originPlaceId": "95673652",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 8,
            "minute": 0,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 8,
            "minute": 45,
            "second": 0
          },
          "durationInMinutes": 105,
          "marketingFlightNumber": "900",
          "marketingCarrierId": "-32090",
          "operatingCarrierId": "-32090"
        },
        "15641-13554-2312220905-2312221325--32442": {
          "originPlaceId": "128667077",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 9,
            "minute": 5,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 13,
            "minute": 25,
            "second": 0
          },
          "durationInMinutes": 740,
          "marketingFlightNumber": "533",
          "marketingCarrierId": "-32442",
          "operatingCarrierId": "-32442"
        },
        "15641-13554-2312230905-2312231330--32442": {
          "originPlaceId": "128667077",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 9,
            "minute": 5,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 13,
            "minute": 30,
            "second": 0
          },
          "durationInMinutes": 745,
          "marketingFlightNumber": "533",
          "marketingCarrierId": "-32442",
          "operatingCarrierId": "-32442"
        },
        "16292-11089-2312221055-2312221400--31939": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95673852",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 10,
            "minute": 55,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 14,
            "minute": 0,
            "second": 0
          },
          "durationInMinutes": 485,
          "marketingFlightNumber": "943",
          "marketingCarrierId": "-31939",
          "operatingCarrierId": "-31939"
        },
        "16292-11089-2312221055-2312221400--32480": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95673852",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 10,
            "minute": 55,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 14,
            "minute": 0,
            "second": 0
          },
          "durationInMinutes": 485,
          "marketingFlightNumber": "2307",
          "marketingCarrierId": "-32480",
          "operatingCarrierId": "-31939"
        },
        "16292-11089-2312222020-2312222325--31939": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95673852",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 20,
            "minute": 20,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 25,
            "second": 0
          },
          "durationInMinutes": 485,
          "marketingFlightNumber": "947",
          "marketingCarrierId": "-31939",
          "operatingCarrierId": "-31939"
        },
        "16292-11616-2312222355-2312230610--32090": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95673652",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 55,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 6,
            "minute": 10,
            "second": 0
          },
          "durationInMinutes": 795,
          "marketingFlightNumber": "779",
          "marketingCarrierId": "-32090",
          "operatingCarrierId": "-32090"
        },
        "16292-13554-2312220900-2312221520--31876": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 9,
            "minute": 0,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 15,
            "minute": 20,
            "second": 0
          },
          "durationInMinutes": 860,
          "marketingFlightNumber": "308",
          "marketingCarrierId": "-31876",
          "operatingCarrierId": "-31876"
        },
        "16292-13554-2312221245-2312221910--31876": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 12,
            "minute": 45,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 19,
            "minute": 10,
            "second": 0
          },
          "durationInMinutes": 865,
          "marketingFlightNumber": "318",
          "marketingCarrierId": "-31876",
          "operatingCarrierId": "-31876"
        },
        "16292-13554-2312222315-2312230530--32480": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 15,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 5,
            "minute": 30,
            "second": 0
          },
          "durationInMinutes": 855,
          "marketingFlightNumber": "12",
          "marketingCarrierId": "-32480",
          "operatingCarrierId": "-32480"
        },
        "16292-15641-2312220025-2312220540--32442": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "128667077",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 0,
            "minute": 25,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 5,
            "minute": 40,
            "second": 0
          },
          "durationInMinutes": 315,
          "marketingFlightNumber": "544",
          "marketingCarrierId": "-32442",
          "operatingCarrierId": "-32442"
        },
        "16292-15641-2312222300-2312230410--32442": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "128667077",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 23,
            "minute": 0,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 23,
            "hour": 4,
            "minute": 10,
            "second": 0
          },
          "durationInMinutes": 310,
          "marketingFlightNumber": "566",
          "marketingCarrierId": "-32442",
          "operatingCarrierId": "-32442"
        },
        "16292-18563-2312220005-2312220610--31799": {
          "originPlaceId": "95673375",
          "destinationPlaceId": "95673856",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 0,
            "minute": 5,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 6,
            "minute": 10,
            "second": 0
          },
          "durationInMinutes": 785,
          "marketingFlightNumber": "177",
          "marketingCarrierId": "-31799",
          "operatingCarrierId": "-31799"
        },
        "18563-13554-2312220710-2312220805--31799": {
          "originPlaceId": "95673856",
          "destinationPlaceId": "95565050",
          "departureDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 7,
            "minute": 10,
            "second": 0
          },
          "arrivalDateTime": {
            "year": 2023,
            "month": 12,
            "day": 22,
            "hour": 8,
            "minute": 5,
            "second": 0
          },
          "durationInMinutes": 115,
          "marketingFlightNumber": "316",
          "marketingCarrierId": "-31799",
          "operatingCarrierId": "-31799"
        }
      },
      "places": {
        "27537524": {
          "entityId": "27537524",
          "parentId": "29475376",
          "name": "Zurich",
          "type": "PLACE_TYPE_CITY",
          "iata": "ZRH",
          "coordinates": null
        },
        "27540785": {
          "entityId": "27540785",
          "parentId": "29475214",
          "name": "Doha",
          "type": "PLACE_TYPE_CITY",
          "iata": "DOH",
          "coordinates": null
        },
        "27541706": {
          "entityId": "27541706",
          "parentId": "29475381",
          "name": "Frankfurt",
          "type": "PLACE_TYPE_CITY",
          "iata": "FRA",
          "coordinates": null
        },
        "27544008": {
          "entityId": "27544008",
          "parentId": "29475375",
          "name": "London",
          "type": "PLACE_TYPE_CITY",
          "iata": "LON",
          "coordinates": null
        },
        "27546079": {
          "entityId": "27546079",
          "parentId": "29475326",
          "name": "Shanghai",
          "type": "PLACE_TYPE_CITY",
          "iata": "SHA",
          "coordinates": null
        },
        "27546111": {
          "entityId": "27546111",
          "parentId": "29475332",
          "name": "Singapore",
          "type": "PLACE_TYPE_CITY",
          "iata": "SIN",
          "coordinates": null
        },
        "29475214": {
          "entityId": "29475214",
          "parentId": "",
          "name": "Qatar",
          "type": "PLACE_TYPE_COUNTRY",
          "iata": "",
          "coordinates": null
        },
        "29475326": {
          "entityId": "29475326",
          "parentId": "",
          "name": "China",
          "type": "PLACE_TYPE_COUNTRY",
          "iata": "",
          "coordinates": null
        },
        "29475332": {
          "entityId": "29475332",
          "parentId": "",
          "name": "Singapore",
          "type": "PLACE_TYPE_COUNTRY",
          "iata": "",
          "coordinates": null
        },
        "29475375": {
          "entityId": "29475375",
          "parentId": "",
          "name": "United Kingdom",
          "type": "PLACE_TYPE_COUNTRY",
          "iata": "",
          "coordinates": null
        },
        "29475376": {
          "entityId": "29475376",
          "parentId": "",
          "name": "Switzerland",
          "type": "PLACE_TYPE_COUNTRY",
          "iata": "",
          "coordinates": null
        },
        "29475381": {
          "entityId": "29475381",
          "parentId": "",
          "name": "Germany",
          "type": "PLACE_TYPE_COUNTRY",
          "iata": "",
          "coordinates": null
        },
        "95565050": {
          "entityId": "95565050",
          "parentId": "27544008",
          "name": "London Heathrow",
          "type": "PLACE_TYPE_AIRPORT",
          "iata": "LHR",
          "coordinates": null
        },
        "95673375": {
          "entityId": "95673375",
          "parentId": "27546111",
          "name": "Singapore Changi",
          "type": "PLACE_TYPE_AIRPORT",
          "iata": "SIN",
          "coordinates": null
        },
        "95673652": {
          "entityId": "95673652",
          "parentId": "27541706",
          "name": "Frankfurt am Main",
          "type": "PLACE_TYPE_AIRPORT",
          "iata": "FRA",
          "coordinates": null
        },
        "95673852": {
          "entityId": "95673852",
          "parentId": "27540785",
          "name": "Hamad International",
          "type": "PLACE_TYPE_AIRPORT",
          "iata": "DOH",
          "coordinates": null
        },
        "95673856": {
          "entityId": "95673856",
          "parentId": "27537524",
          "name": "Zurich",
          "type": "PLACE_TYPE_AIRPORT",
          "iata": "ZRH",
          "coordinates": null
        },
        "128667077": {
          "entityId": "128667077",
          "parentId": "27546079",
          "name": "Shanghai PuDong",
          "type": "PLACE_TYPE_AIRPORT",
          "iata": "PVG",
          "coordinates": null
        }
      },
      "carriers": {
        "-31799": {
          "name": "SWISS",
          "allianceId": "-31999",
          "imageUrl": "https://logos.skyscnr.com/images/airlines/LX.png",
          "iata": "LX",
          "icao": "SWR",
          "displayCode": "LX"
        },
        "-31876": {
          "name": "Singapore Airlines",
          "allianceId": "-31999",
          "imageUrl": "https://logos.skyscnr.com/images/airlines/SQ.png",
          "iata": "SQ",
          "icao": "SIA",
          "displayCode": "SQ"
        },
        "-31939": {
          "name": "Qatar Airways",
          "allianceId": "-32000",
          "imageUrl": "https://logos.skyscnr.com/images/airlines/QR.png",
          "iata": "QR",
          "icao": "QTR",
          "displayCode": "QR"
        },
        "-32090": {
          "name": "Lufthansa",
          "allianceId": "-31999",
          "imageUrl": "https://logos.skyscnr.com/images/airlines/LH.png",
          "iata": "LH",
          "icao": "DLH",
          "displayCode": "LH"
        },
        "-32442": {
          "name": "China Eastern",
          "allianceId": "-31998",
          "imageUrl": "https://logos.skyscnr.com/images/airlines/MU.png",
          "iata": "MU",
          "icao": "CES",
          "displayCode": "MU"
        },
        "-32480": {
          "name": "British Airways",
          "allianceId": "-32000",
          "imageUrl": "https://logos.skyscnr.com/images/airlines/BA.png",
          "iata": "BA",
          "icao": "BAW",
          "displayCode": "BA"
        }
      },
      "agents": {
        "agod": {
          "name": "Agoda ",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/agod.png",
          "feedbackCount": 721,
          "rating": 3.28,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": false
        },
        "airf": {
          "name": "Air France",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/airf.png",
          "feedbackCount": 18001,
          "rating": 3.2,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "anai": {
          "name": "ANA (All Nippon Airways)",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/anai.png",
          "feedbackCount": 2697,
          "rating": 4.74,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "asia": {
          "name": "Asiana Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/asia.png",
          "feedbackCount": 2636,
          "rating": 3.96,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "ba__": {
          "name": "British Airways",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/ba__.png",
          "feedbackCount": 158,
          "rating": 2.92,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "bfsg": {
          "name": "Bravofly",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/bfsg.png",
          "feedbackCount": 642,
          "rating": 3.1,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "brun": {
          "name": "Royal Brunei",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/brun.png",
          "feedbackCount": 180,
          "rating": 4.67,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "cair": {
          "name": "China Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/cair.png",
          "feedbackCount": 6589,
          "rating": 5,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "cath": {
          "name": "Cathay Pacific",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/cath.png",
          "feedbackCount": 133,
          "rating": 4.17,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "chea": {
          "name": "China Eastern",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/chea.png",
          "feedbackCount": 1158,
          "rating": 1.99,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "chin": {
          "name": "Air China",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/chin.png",
          "feedbackCount": 109,
          "rating": 1.8,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "chsi": {
          "name": "China Southern",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/chsi.png",
          "feedbackCount": 975,
          "rating": 2.98,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "ctsg": {
          "name": "Trip.com",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/ctsg.png",
          "feedbackCount": 3737,
          "rating": 4.32,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "edsg": {
          "name": "eDreams",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/edsg.png",
          "feedbackCount": 716,
          "rating": 2.47,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "emir": {
          "name": "Emirates",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/emir.png",
          "feedbackCount": 139,
          "rating": 3.81,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "ethi": {
          "name": "Ethiopian Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/ethi.png",
          "feedbackCount": 2568,
          "rating": 4.31,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "etih": {
          "name": "Etihad Airways",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/etih.png",
          "feedbackCount": 6626,
          "rating": 4.16,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "finn": {
          "name": "Finnair",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/finn.png",
          "feedbackCount": 6580,
          "rating": 3.98,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "fnsg": {
          "name": "FlightNetwork",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/fnsg.png",
          "feedbackCount": 1533,
          "rating": 2.99,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "gtsg": {
          "name": "GotoGate",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/gtsg.png",
          "feedbackCount": 648,
          "rating": 2.99,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "husg": {
          "name": "hutchgo.com (formerly Priceline-Asia)",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/husg.png",
          "feedbackCount": 107,
          "rating": 1.7,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "inda": {
          "name": "Air India",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/inda.png",
          "feedbackCount": 2329,
          "rating": 3.31,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "ingo": {
          "name": "IndiGo",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/ingo.png",
          "feedbackCount": 513,
          "rating": 3.59,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "jtsg": {
          "name": "Jetabroad",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/jtsg.png",
          "feedbackCount": 158,
          "rating": 1.71,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "jzsg": {
          "name": "Jettzy",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/jzsg.png",
          "feedbackCount": 0,
          "rating": 0,
          "ratingBreakdown": null,
          "isOptimisedForMobile": true
        },
        "klm1": {
          "name": "KLM",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/klm1.png",
          "feedbackCount": 144,
          "rating": 3.51,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "kore": {
          "name": "Korean Air",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/kore.png",
          "feedbackCount": 3076,
          "rating": 4.95,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "luft": {
          "name": "Lufthansa",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/luft.png",
          "feedbackCount": 134,
          "rating": 3.91,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "maly": {
          "name": "Malaysia Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/maly.png",
          "feedbackCount": 1793,
          "rating": 3.35,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "oas_": {
          "name": "Oman Air",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/oas_.png",
          "feedbackCount": 2600,
          "rating": 3.78,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "qant": {
          "name": "Qantas",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/qant.png",
          "feedbackCount": 106,
          "rating": 1.77,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "qata": {
          "name": "Qatar Airways",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/qata.png",
          "feedbackCount": 113,
          "rating": 3.85,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "saud": {
          "name": "Saudia",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/saud.png",
          "feedbackCount": 6099,
          "rating": 4.16,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "sing": {
          "name": "Singapore Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/sing.png",
          "feedbackCount": 1176,
          "rating": 4.16,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "sril": {
          "name": "SriLankan Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/sril.png",
          "feedbackCount": 1911,
          "rating": 4.1,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "swis": {
          "name": "SWISS",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/swis.png",
          "feedbackCount": 5942,
          "rating": 3.51,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "thai": {
          "name": "Thai Airways",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/thai.png",
          "feedbackCount": 4126,
          "rating": 3.75,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "trgo": {
          "name": "ly.com",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/trgo.png",
          "feedbackCount": 0,
          "rating": 0,
          "ratingBreakdown": null,
          "isOptimisedForMobile": true
        },
        "trsg": {
          "name": "Mytrip",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/trsg.png",
          "feedbackCount": 582,
          "rating": 2.92,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "trwn": {
          "name": "TravelWings",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/trwn.png",
          "feedbackCount": 0,
          "rating": 0,
          "ratingBreakdown": null,
          "isOptimisedForMobile": false
        },
        "turk": {
          "name": "Turkish Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/turk.png",
          "feedbackCount": 22927,
          "rating": 3.57,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "uair": {
          "name": "United",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/uair.png",
          "feedbackCount": 101,
          "rating": 4.49,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "vias": {
          "name": "via.com",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/vias.png",
          "feedbackCount": 2745,
          "rating": 1.66,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "viet": {
          "name": "Vietnam Airlines",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/viet.png",
          "feedbackCount": 209,
          "rating": 4.05,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "vstr": {
          "name": "Vistara",
          "type": "AGENT_TYPE_AIRLINE",
          "imageUrl": "https://logos.skyscnr.com/images/websites/vstr.png",
          "feedbackCount": 798,
          "rating": 3.68,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "vysg": {
          "name": "CheapTickets.sg",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/vysg.png",
          "feedbackCount": 3917,
          "rating": 1.5,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        },
        "xpsg": {
          "name": "Expedia",
          "type": "AGENT_TYPE_TRAVEL_AGENT",
          "imageUrl": "https://logos.skyscnr.com/images/websites/xpsg.png",
          "feedbackCount": 748,
          "rating": 2.62,
          "ratingBreakdown": {
            "customerService": 0,
            "reliablePrices": 0,
            "clearExtraFees": 0,
            "easeOfBooking": 0,
            "other": 0
          },
          "isOptimisedForMobile": true
        }
      },
      "alliances": {
        "-31998": {
          "name": "SkyTeam"
        },
        "-31999": {
          "name": "Star Alliance"
        },
        "-32000": {
          "name": "OneWorld"
        }
      }
    },
    "stats": {
      "itineraries": {
        "minDuration": 855,
        "maxDuration": 1350,
        "total": {
          "count": 10,
          "minPrice": {
            "amount": "557000",
            "unit": "PRICE_UNIT_MILLI",
            "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
          }
        },
        "stops": {
          "direct": {
            "total": {
              "count": 3,
              "minPrice": {
                "amount": "1082490",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              }
            },
            "ticketTypes": {
              "singleTicket": {
                "count": 3,
                "minPrice": {
                  "amount": "1082490",
                  "unit": "PRICE_UNIT_MILLI",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              },
              "multiTicketNonNpt": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              },
              "multiTicketNpt": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              }
            }
          },
          "oneStop": {
            "total": {
              "count": 7,
              "minPrice": {
                "amount": "557000",
                "unit": "PRICE_UNIT_MILLI",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              }
            },
            "ticketTypes": {
              "singleTicket": {
                "count": 7,
                "minPrice": {
                  "amount": "557000",
                  "unit": "PRICE_UNIT_MILLI",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              },
              "multiTicketNonNpt": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              },
              "multiTicketNpt": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              }
            }
          },
          "twoPlusStops": {
            "total": {
              "count": 0,
              "minPrice": {
                "amount": "",
                "unit": "PRICE_UNIT_UNSPECIFIED",
                "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
              }
            },
            "ticketTypes": {
              "singleTicket": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              },
              "multiTicketNonNpt": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              },
              "multiTicketNpt": {
                "count": 0,
                "minPrice": {
                  "amount": "",
                  "unit": "PRICE_UNIT_UNSPECIFIED",
                  "updateStatus": "PRICE_UPDATE_STATUS_UNSPECIFIED"
                }
              }
            }
          }
        },
        "hasChangeAirportTransfer": false
      }
    },
    "sortingOptions": {
      "best": [
        {
          "score": 0.558237,
          "itineraryId": "16292-2312220025--32442-1-13554-2312221325"
        },
        {
          "score": 0.54853,
          "itineraryId": "16292-2312220005--31799-1-13554-2312220805"
        },
        {
          "score": 0.521021,
          "itineraryId": "16292-2312222300--32442-1-13554-2312231330"
        },
        {
          "score": 0.501231,
          "itineraryId": "16292-2312222355--32090-1-13554-2312230845"
        },
        {
          "score": 0.497671,
          "itineraryId": "16292-2312221055--32480-1-13554-2312222200"
        },
        {
          "score": 0.465045,
          "itineraryId": "16292-2312222020--31939-1-13554-2312230720"
        },
        {
          "score": 0.463015,
          "itineraryId": "16292-2312221055--31939-1-13554-2312222200"
        },
        {
          "score": 0.420845,
          "itineraryId": "16292-2312220900--31876-0-13554-2312221520"
        },
        {
          "score": 0.419236,
          "itineraryId": "16292-2312222315--32480-0-13554-2312230530"
        },
        {
          "score": 0.392369,
          "itineraryId": "16292-2312221245--31876-0-13554-2312221910"
        }
      ],
      "cheapest": [
        {
          "score": 1,
          "itineraryId": "16292-2312220025--32442-1-13554-2312221325"
        },
        {
          "score": 1,
          "itineraryId": "16292-2312222300--32442-1-13554-2312231330"
        },
        {
          "score": 0.7816989,
          "itineraryId": "16292-2312221055--32480-1-13554-2312222200"
        },
        {
          "score": 0.6953159,
          "itineraryId": "16292-2312222020--31939-1-13554-2312230720"
        },
        {
          "score": 0.6953159,
          "itineraryId": "16292-2312221055--31939-1-13554-2312222200"
        },
        {
          "score": 0.6869455,
          "itineraryId": "16292-2312220005--31799-1-13554-2312220805"
        },
        {
          "score": 0.6368902,
          "itineraryId": "16292-2312222355--32090-1-13554-2312230845"
        },
        {
          "score": 0.1202833,
          "itineraryId": "16292-2312220900--31876-0-13554-2312221520"
        },
        {
          "score": 0.1026886,
          "itineraryId": "16292-2312222315--32480-0-13554-2312230530"
        },
        {
          "score": 0,
          "itineraryId": "16292-2312221245--31876-0-13554-2312221910"
        }
      ],
      "fastest": [
        {
          "score": 1,
          "itineraryId": "16292-2312222315--32480-0-13554-2312230530"
        },
        {
          "score": 0.989899,
          "itineraryId": "16292-2312220900--31876-0-13554-2312221520"
        },
        {
          "score": 0.979798,
          "itineraryId": "16292-2312221245--31876-0-13554-2312221910"
        },
        {
          "score": 0.7878788,
          "itineraryId": "16292-2312220005--31799-1-13554-2312220805"
        },
        {
          "score": 0.6868687,
          "itineraryId": "16292-2312222355--32090-1-13554-2312230845"
        },
        {
          "score": 0.4242424,
          "itineraryId": "16292-2312222020--31939-1-13554-2312230720"
        },
        {
          "score": 0.4141414,
          "itineraryId": "16292-2312221055--32480-1-13554-2312222200"
        },
        {
          "score": 0.4141414,
          "itineraryId": "16292-2312221055--31939-1-13554-2312222200"
        },
        {
          "score": 0.1818182,
          "itineraryId": "16292-2312220025--32442-1-13554-2312221325"
        },
        {
          "score": 0,
          "itineraryId": "16292-2312222300--32442-1-13554-2312231330"
        }
      ]
    }
  }
}
export const SearchBar = () => {
  const [destGaiaId, setDestGaiaId] = React.useState("");

  const store = SearchBarStoreInstance;

  const getFlightIataCode = async (place: string) => {
    const url = 'https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights';

    const fetchOptions = {
      method: 'POST',
      headers: {
        'x-api-key': 'sh428739766321522266746152871799',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "query":{
          "market": "SG",
          "locale": "en-GB",
          "searchTerm": place === "origin" ? store.userInput.origin : store.userInput.destination,
           "includedEntityTypes": [ "PLACE_TYPE_CITY", "PLACE_TYPE_AIRPORT"]
        }
      })
    }

    try {
      const response = await fetch(url, fetchOptions);
      const result = await response.json();
      if (place === "origin") {
      store.iataCodes.origin = result.places[0].iataCode
      } else {
        store.iataCodes.destination = result.places[0].iataCode
      }
    } catch(error) {
      console.log(error);
    }
  }

  const getFlightOptions = async () => {
    const url = 'https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create'

    const fetchOptions = {
      method: 'POST',
      headers: {
        'x-api-key': 'sh428739766321522266746152871799',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "query": {
          "market": "SG",
          "locale": "en-GB",
          "currency": "SGD",
          "query_legs": [
            {
              "origin_place_id": {
                "iata": `${store.iataCodes.origin}`
              },
              "destination_place_id": {
                "iata": `${store.iataCodes.destination}`
              },
              "date": {
                "year": store.userInput.fromDate.year,
                "month": store.userInput.fromDate.month,
                "day": store.userInput.fromDate.day
              }
            }
          ],
          "adults": 1,
          "cabin_class": "CABIN_CLASS_ECONOMY"
        }
      })
    }

    try {
      // const response = await fetch(url, fetchOptions);
      // const returnRes = await response.json();
    
      const results = dummyFlightData.content.results;
      let newFlightsData: FlightsData[] = [];
      for (let key in results.itineraries) {
        //@ts-ignore
        const itineraryVal = results.itineraries[key];
        newFlightsData.push({
          id: key,
          price: itineraryVal.pricingOptions[0].price.amount,
          //@ts-ignore
          departureDateTime: results.legs[key].departureDateTime,
          //@ts-ignore
          arrivalDateTime: results.legs[key].arrivalDateTime,
          //@ts-ignore
          flightDurationMin: results.legs[key].durationInMinutes,
          //@ts-ignore
          stopCount: results.legs[key].stopCount
        })
      }
      store.setFlightsData(newFlightsData);
      console.log(newFlightsData);
    } catch(error) {
      console.log(error);
    }
  }

  const getAccommsDestId = async () => {
    const baseUrl = 'https://hotels4.p.rapidapi.com/locations/v3/search';

    const queryParams = {
      q: `${store.userInput.destination}`,
      locale: 'en_SG',
      siteid: '300000040'
    };

    const url = new URL(baseUrl);
    url.search = new URLSearchParams(queryParams).toString();

    const fetchOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b500f91511mshf2caf0e30b9ee36p179951jsn5cccf8010b47',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url.href, fetchOptions);
      const result = await response.json();
      console.log(result);
      setDestGaiaId(result.sr[0].gaiaId);
      getAccomms();
    } catch(error) {
      console.error(error);
    }
  }

  const getAccomms = async () => {
    const url = 'https://hotels4.p.rapidapi.com/properties/v2/list';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b500f91511mshf2caf0e30b9ee36p179951jsn5cccf8010b47',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      },
      body: JSON.stringify({
        currency: 'SGD',
        eapid: 1,
        locale: 'en_SG',
        siteId: 300000040,
        destination: {
          regionId: '604'
        },
        checkInDate: {
          day: store.userInput.fromDate.day,
          month: store.userInput.fromDate.month,
          year: store.userInput.fromDate.year
        },
        checkOutDate: {
          day: store.userInput.toDate.day,
          month: store.userInput.toDate.month,
          year: store.userInput.toDate.year
        },
        rooms: [
          {
            adults: store.userInput.travellers,
            children: []
          }
        ],
        resultsStartingIndex: 0,
        resultsSize: 25,
        sort: 'RECOMMENDED',
        filters: {guestRating: '40'}
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      const newAccommsData: AccommsData[] = result.data.propertySearch.properties.map((listing:any) => {
        return {
          id: listing.id,
          name: listing.name,
          image: listing.propertyImage.image.url,
          mapMarker: {
            lat: listing.mapMarker.latLong.latitude,
            long: listing.mapMarker.latLong.longitude
          },
          price: listing.price.options[0].formattedDisplayPrice,
          reviews: {
            score: listing.reviews.score,
            total: listing.reviews.total
          }
        }
      })
      console.log(newAccommsData);
      store.setAccommsData(newAccommsData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box
      id="input-form"
      component="form"
      noValidate
      autoComplete='off'
    >
      <div id="input-where" className="inputCat">
        <TextField 
          className="inputField"
          id="input-origin"
          label="Where From"
          type="search"
          variant="standard"
          onChange={(e) => store.setUserInput({...store.userInput, origin:`${e.target.value}` })}
        />
        <TextField 
          className="inputField"
          id="input-dest"
          label="Where To"
          type="search"
          variant="standard"
          onChange={(e) => store.setUserInput({...store.userInput, destination:`${e.target.value}` })}
        />
      </div>
      <div id="input-who" className="inputCat">
        <TextField 
          className="inputField"
          id="input-travellers"
          label="Travellers"
          type="number"
          variant="standard"
          onChange={(e) => 
            store.setUserInput({
              ...store.userInput, 
              travellers: parseInt(e.target.value, 10) 
            })
          }
        />
      </div>
      <div id="input=when" className="inputCat">
        <DatePicker
          label="When From"
          onChange={(date: Dayjs | null) => {
            const newFromDateArrStr = dayjs(date).format('DD/MM/YYYY').split('/');
            const newFromDateArr = newFromDateArrStr.map(num => parseInt(num, 10));
            const newFromDate: Date = {
              day: newFromDateArr[0],
              month: newFromDateArr[1],
              year: newFromDateArr[2]
            }
            store.setUserInput({...store.userInput,
              fromDate: newFromDate})}}  
        />
        <DatePicker
          label="When To"
          onChange={(date: Dayjs | null) => {
            const newToDatArrStr = dayjs(date).format('DD/MM/YYYY').split('/');
            const newToDateArr = newToDatArrStr.map(num => parseInt(num, 10));
            const newToDate: Date = {
              day: newToDateArr[0],
              month: newToDateArr[1],
              year: newToDateArr[2]
            }
            store.setUserInput({...store.userInput,
              toDate: newToDate})}}  
        />
      </div>
      <Button variant="contained" 
        onClick={() => {
          // To remove when data retrieved
          store.iataCodes = {
            origin: "SIN",
            destination: "LON"
          }
          getFlightOptions();
        }}>
          SEARCH
      </Button>
    </Box>
  )
}

export default SearchBar;