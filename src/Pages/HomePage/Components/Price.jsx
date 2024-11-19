// import "./Price.css";
// export default function Price() {
//   const pricepackage = [
//     {
//       name: "Small groups",
//       description: "Real-world practice in groups",
//       actualprice: "$10/mo",
//       discountedprice: "$9",
//       offer: [
//         "Work with a tutor and 1-2 students",
//         "Meet learners from around the world",
//         "Structured discussions for all levels",
//         "For adults 21+",
//       ],
//     },
//     {
//       name: "Private+",
//       description: "Full access to private and group lessons",
//       actualprice: "$52/mo",
//       discountedprice: "$26",
//       offer: [
//         "Our most comprehensive experience",
//         "Take 100% private lessons or try groups too",
//         "Rewatch your lesson videos",
//         "Get personalized exercises between lessons",
//       ],
//     },
//     {
//       name: "Kids",
//       description: "For kids under 18",
//       actualprice: "$119/mo",
//       discountedprice: "$61",
//       offer: [
//         "1:1 time with specialized tutors",
//         "Active learning through conversation",
//         "Beginner to advanced courses included",
//         "Fun games and activities",
//       ],
//     },
//   ];
//   return (
//     <div className="pricesection">
//       <h1>Start today. Learn for life.</h1>
//       <div className="pricecards">
//         <div className="card">
//           <div className="head">
//             <h2>Small Group</h2>
//             <p>Hey thtere</p>
//           </div>
//           <button>Select</button>
//           <div className="pricetag">
//             <p>STARTING FROM</p>
//             <span>$10/month</span>
//             <h2>
//               $9{" "}
//               <sup>
//                 {" "}
//                 <small>/mon </small>
//               </sup>{" "}
//             </h2>
//           </div>
//           <div className="offers">
//             <li>Work with a tutor and 1-2 students</li>
//             <li>Meet learners from around the world</li>
//             <li>Structured discussions for all levels</li>
//           </div>
//         </div>
//         <div className="card">
//           <div className="head">
//             <h2>Small Group</h2>
//             <p>Hey thtere</p>
//           </div>
//           <button>Select</button>
//           <div className="pricetag">
//             <p>STARTING FROM</p>
//             <span>$10/month</span>
//             <h2>
//               $9{" "}
//               <sup>
//                 {" "}
//                 <small>/mon </small>
//               </sup>{" "}
//             </h2>
//           </div>
//           <div className="offers">
//             <li>Work with a tutor and 1-2 students</li>
//             <li>Meet learners from around the world</li>
//             <li>Structured discussions for all levels</li>
//           </div>
//         </div>
//         <div className="card">
//           <div className="head">
//             <h2>Small Group</h2>
//             <p>Hey thtere</p>
//           </div>
//           <button>Select</button>
//           <div className="pricetag">
//             <p>STARTING FROM</p>
//             <span>$10/month</span>
//             <h2>
//               $9{" "}
//               <sup>
//                 {" "}
//                 <small>/mon </small>
//               </sup>{" "}
//             </h2>
//           </div>
//           <div className="offers">
//             <li>Work with a tutor and 1-2 students</li>
//             <li>Meet learners from around the world</li>
//             <li>Structured discussions for all levels</li>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./Price.css";

export default function Price() {
  const pricepackage = [
    {
      name: "Small groups",
      description: "Real-world practice in groups",
      actualprice: "$10/mo",
      discountedprice: "$9",
      offer: [
        "Work with a tutor and 1-2 students",
        "Meet learners from around the world",
        "Structured discussions for all levels",
        "For adults 21+",
      ],
    },
    {
      name: "Private+",
      description: "Full access to private and group lessons",
      actualprice: "$52/mo",
      discountedprice: "$26",
      offer: [
        "Our most comprehensive experience",
        "Take 100% private lessons or try groups too",
        "Rewatch your lesson videos",
        "Get personalized exercises between lessons",
      ],
    },
    {
      name: "Kids",
      description: "For kids under 18",
      actualprice: "$119/mo",
      discountedprice: "$61",
      offer: [
        "1:1 time with specialized tutors",
        "Active learning through conversation",
        "Beginner to advanced courses included",
        "Fun games and activities",
      ],
    },
  ];

  return (
    <div className="pricesection">
      <h1>Start today. Learn for life.</h1>
      <div className="pricecards">
        {pricepackage.map((pkg, index) => (
          <div className="card" key={index}>
            <div className="head">
              <h2>{pkg.name}</h2>
              <p>{pkg.description}</p>
            </div>
            <button>Select</button>
            <div className="pricetag">
              <p>STARTING FROM</p>
              <span>{pkg.actualprice}</span>
              <h2>
                {pkg.discountedprice}{" "}
                <sup>
                  <small>/mo</small>
                </sup>
              </h2>
            </div>
            <div className="offers">
              {pkg.offer.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

