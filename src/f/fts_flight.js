import axios from "axios"

export const fts_flight= async (setqueryresult, query)=> {
    const res= await axios({
        url: "http://localhost:4000/api/v1/flight/search",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            query_string: query
        }
    })
    const result= await res.data
    return setqueryresult(()=> result)
}