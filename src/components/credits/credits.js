import React from "react";
import Plaque from "../plaque/plaque";
import "./credits.scss";
import VL from "../../assets/vl.jpeg";
import KDOT from "../../assets/damn.jpeg";

const creditList = [
  {
    album: "Over It",
    artist: "Summer Walker",
    year: "2020",
    photo:
      "https://images-na.ssl-images-amazon.com/images/I/71ERmyNKRdL._SY355_.jpg",
    platinum: "Certified Platinum",
    id: 5,
    grammy: []
  },
  {
    album: "The Lost Boy",
    artist: "YBN Cordae",
    year: "2019",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0dY0VZBjYblCHArmMRySWAHaHa%26pid%3DApi&f=1",
    platinum: "",
    id: 4,
    grammy: [
      "GRAMMY Nominated 'Best Rap Album'",
      "GRAMMY Nominated 'Best Rap Song' (Bad Idea)"
    ]
  },

  {
    album: "Victory Lap",
    artist: "Nipsey Hustle",
    year: "2018",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.complex.com%2Fcomplex%2Fimages%2Fc_limit%2Cw_680%2Ffl_lossy%2Cpg_1%2Cq_auto%2Fd0wbqvjqiyqlkp2emsck%2Fnipsey-hussle-victory-lap-artwork&f=1&nofb=1",
    info: "",
    platinum: "Ceritified Platinum",
    id: 2,
    grammy: ["GRAMMY Nominated 'Best Rap Album'"]
  },
  {
    album: "DAMN.",
    artist: "Kendrick Lamar",
    year: "2017",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eIua4MLRNEMys8qHxoQ60AHaHa%26pid%3DApi&f=1",
    platinum: "Ceritified 3X Platinum",
    grammy: [
      "GRAMMY Winner 'Best Rap Album'",

      "GRAMMY Nominated 'Album of the Year'",
      "GRAMMY Nominated 'Record of the Year' (HUMBLE.)"
    ],
    info: "",
    id: 1
  },

  {
    album: "ctrl",
    artist: "SZA",
    year: "2017",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.p7-SiPKRMqfSGIM4lRL8iwHaHa%26pid%3DApi&f=1",
    platinum: "Ceritified Platinum",
    id: 3,
    grammy: ["GRAMMY Nominated 'Best Urban Contemporary Album'"]
  }
];
const Credits = () => {
  return creditList.map((item) => (
    <div>
      <Plaque
        album={item.album}
        artist={item.artist}
        year={item.year}
        photo={item.photo}
        info={item.info}
        item={item}
        platinum={item.platinum}
        grammy={item.grammy}
      ></Plaque>
    </div>
  ));
};

export default Credits;

/* //       <div className='credits'>
//         <div className='nipsey'>
//           <div className='ui-card'>
//             <img className='vl-image' src={VL} alt='pic' />
//             <div class='content'>
//               <h4> Victory Lap </h4>
//               <div>
//                 <h2 class='artist'>Nipsey Hustle</h2>
//               </div>
//             </div>
//             <div class='extra content'>
//               <div>
//                 <ul>
//                   <li>platinum</li>
//                   <li>grammy nominated</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='kendrick'>
//           <div className='ui-card'>
//             <img className='vl-image' src={KDOT} alt='kendrick lamar' />
//             <div class='content'>
//               <h4> DAMN. </h4>
//               <div>
//                 <h2 className='date'>Kendrick Lamar</h2>
//               </div>
//               <h2 class='description'></h2>
//             </div>
//             <div class='extra content'>
//               <ul>
//                 <li>platinum</li>
//                 <li>grammy nominated</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div> */
