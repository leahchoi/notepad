// import { useEffect, useState } from "react";

// export function MakeAPIcall(hi) {
//   const [data, setData] = useState([]);
//   console.log(hi);
//   const getData = async () => {
//     try {
//       await fetch(`https://api.github.com/gists`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `token 83797ca72179c271a0eab82f9278acf085a648a8`,
//         },
//       }).then((res) => {
//         console.log(res);
//         setData(res.json());
//         return res;
//       });
//     } catch (e) {
//       console.log("error:", e);
//     }
//   };
//   return getData();
//   // return data;
// }
