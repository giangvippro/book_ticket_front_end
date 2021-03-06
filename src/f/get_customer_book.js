import axios from "axios"

export const get_customer_book= async (id, setdata)=> {
    const res= await axios({
        url: "http://localhost:4000/api/v1/get/customer/book",
        method: "post",
        responseType: "json",
        timeout: 100000,
        timeoutErrorMessage: "timeout request",
        data: {
            id: id
        }
    })
    const result= await res.data
    return setdata(()=> result)
}