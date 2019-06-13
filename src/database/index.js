//minimize clutter of player
import brands100 from "../styles/assets/videos/brands100.mp4";
import brands200 from "../styles/assets/videos/brands200.mp4";
import brands300 from "../styles/assets/videos/brands300.mp4";
import brands400 from "../styles/assets/videos/brands400.mp4";
import brands500 from "../styles/assets/videos/brands500.mp4";
import musik100 from "../styles/assets/videos/musik100.mp4";
import musik200 from "../styles/assets/videos/musik200.mp4";
import musik300 from "../styles/assets/videos/musik300.mp4";
import musik400 from "../styles/assets/videos/musik400.mp4";
import musik500 from "../styles/assets/videos/musik500.mp4";
const data = [
  {
    Reklam: [
      {
        value: 100,
        type: "text",
        question:
          "Fisk som kan hålla fokus ett par sekunder längre än dagens sociala medier-människor.",
        answer: "Vad är en guldfisk"
      },
      {
        value: 200,
        type: "text",
        question: "Svinjobbigt, känns som att springa 4,2 mil.",
        answer: "Vad är maraton"
      },
      {
        value: 300,
        type: "text",
        question:
          "Varumärket bakom den klassiska reklamfilmen Like A Girl som setts över 100 miljoner gånger på Youtube.",
        answer: "Vad är Always"
      },
      {
        value: 400,
        type: "text",
        question:
          "Mest effektiva reklamkanalen sett till lönsamhet, kostnadseffektivitet och låg risk.",
        answer: "Vad är TV"
      },
      {
        value: 500,
        type: "text",
        question:
          "Gör världens bästa reklam sett till ROI varje jul, utan att visa upp en enda produkt.",
        answer: "Vadär John Lewis"
      }
    ],
    Musikartister: [
      {
        value: 100,
        type: "video",
        title: "video-title-musikartister-100",
        url: `${musik100}`,
        answer: "Vem är Leila K"
      },
      {
        value: 200,
        type: "video",
        title: "video-title-musikartister-200",
        url: `${musik200}`,
        answer: "Neiked"
      },
      {
        value: 300,
        type: "video",
        title: "video-title-musikartister-300",
        url: `${musik300}`,
        answer: "Vilka är The Weeknd"
      },
      {
        value: 400,
        type: "video",
        title: "video-title-musikartister-400",
        url: `${musik400}`,
        answer: "Vilka är Bobby Fuller Four"
      },
      {
        value: 500,
        type: "video",
        title: "video-title-musikartister-500",
        url: `${musik500}`,
        answer: "Vilka är Air France"
      }
    ],
    Chips: [
      {
        value: 100,
        type: "text",
        question: "Smakprov",
        answer: "Vad är Sourcream & Onion"
      },
      {
        value: 200,
        type: "text",
        question: "Smakprov",
        answer: "Vad är Grillchips"
      },
      {
        value: 300,
        type: "text",
        question: "Smakprov",
        answer: "Vad är gräddfil"
      },
      {
        value: 400,
        type: "text",
        question: "Smakprov",
        answer: "Vad är chili bea"
      },
      {
        value: 500,
        type: "text",
        question: "Smakprov",
        answer: "Vad är knipplök och svartpeppar"
      }
    ],
    Varumärken: [
      {
        value: 100,
        type: "video",
        title: "video-title-brands-100",
        url: `${brands100}`,
        answer: "Vad är Siba"
      },
      {
        value: 200,
        type: "video",
        title: "video-title-brands-200",
        url: `${brands200}`,
        answer: "Vad är Uber"
      },
      {
        value: 300,
        type: "video",
        title: "video-title-brands-300",
        url: `${brands300}`,
        answer: "Vad är Flora"
      },
      {
        value: 400,
        type: "video",
        title: "video-title-brands-400",
        url: `${brands400}`,
        answer: "Vad är H&M"
      },
      {
        value: 500,
        type: "video",
        title: "video-title-brands-500",
        url: `${brands500}`,
        answer: "Vad är Cadburys"
      }
    ],
    "Valentin Experince": [
      {
        value: 100,
        type: "text",
        question:
          "Delade lägenhet med ryska KGB-tjejer när hon jobbade som modell i Milano.",
        answer: "Vem är Anna B"
      },
      {
        value: 200,
        type: "text",
        question:
          "Har ett dåligt knä men kan ändå slå frivolter efter en termin ”gympa”.",
        answer: "Vem  är Dan"
      },
      {
        value: 300,
        type: "text",
        question:
          "Blandade ihop orden och sa ”kuken är ute” istället för ”katten är ute” till ett gäng italienares förtjusning när hon bodde i Florens.",
        answer: "Vem är Emma"
      },
      {
        value: 400,
        type: "text",
        question:
          "Gillar att dricka underberg-snaps och kolla på konstnärer som sätter eld på tändstickor.",
        answer: "Vem är Mattias O"
      },
      {
        value: 500,
        type: "text",
        question:
          "fd kollega som illustrerat omslag till Augustprisvinnaren Carl-Johan Vallgren.",
        answer: "Vem är Lennart Jörnlid."
      }
    ],
    Jeopardy: [
      {
        value: 100,
        type: "text",
        question: "Havet på USA:s östkust",
        answer: "Atlanten"
      },
      {
        value: 200,
        type: "text",
        question:
          "Efter nederlaget vid Waterloo förvisades Napoleon slutgiltigt till denna ö.",
        answer: "Vad är St Helena"
      },
      {
        value: 300,
        type: "text",
        question:
          " Brännvinsklassiker med sortimentsnummer 1 i Systembolagets prislista.",
        answer: "Vad är Renat"
      },
      {
        value: 400,
        type: "text",
        question: "Amerikansk delstat som en gång ägdes av William Penn.",
        answer: "Vad är Pennsylvania"
      },
      {
        value: 500,
        type: "text",
        question: "Runt denna planet snurrar månen Atlas.",
        answer: "Vad är Saturnus"
      }
    ]
  }
];

export default data;
