// import { useState, useEffect } from "react";

import { useEffect, useState } from "react";

export default function useHttp() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
    async function requestApi(requestConfig,callBack) {
      try {
        if(!requestConfig) return;
        setLoading(true)
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers:requestConfig.headers?requestConfig.headers:{},
          body:requestConfig.body?JSON.stringify(requestConfig.body):null
        });
       
        if (!response.ok) throw new Error("");
        const data = await response.json();
        callBack({data,loading,error});
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError('error');
        setLoading(false);
      }
    }

  //   fetchData();
  // }, [requestConfig]);
  return { requestApi,data, error, loading};
}
// export default useHttp ;
// export default function useHttp(requestConfig) {
//   const [data, setData] = useState();
//   const [errorStatus, setErrorStatus] = useState();

//   async function requestApi(requestConfig) {
//     try {
//       const response = await fetch(requestConfig.url, {
//         method: requestConfig.method ? requestConfig.method : "GET",
//         headers: requestConfig.headers ? requestConfig.headers : {},
//         body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
//       });
//       if (!response.ok) throw new Error("");
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//       setErrorStatus(error)
//     }
//   }
//   return {requestApi,data,errorStatus}
// }
