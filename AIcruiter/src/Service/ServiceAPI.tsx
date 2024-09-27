// import { dataDatype, postInterviewType } from "@/types";
import { dataDatype, saveFeedbackType, userDataType } from "@/types";
import axios, { AxiosError } from "axios"
import Cookies from "js-cookie";
let token = Cookies.get("token")
interface ResponseData {
  // Define the structure of your expected response data
  data: string;
}

const Backendinstance = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL, // Base URL for the instance
    // baseURL:"http://localhost:8000", // Base URL for the instance
    // timeout: 1000, // Timeout for requests
 
  });

  axios.defaults.withCredentials = true;
  
  export async function saveUser(payload:userDataType) {
    try {
    
    console.log(payload)
    const response = await Backendinstance.post("/api/user", payload)
    console.log(response)
    return response.data
  }
  catch (error) {
    const err=error as AxiosError<ResponseData>
    console.log(err.response?.data)
    return err.response?.data
  }
}



axios.defaults.withCredentials = true;

export async function UserLogin(payload:{email:string,password:string}) {
  try {
    console.log(payload)
    console.log("vite",import.meta.env.VITE_BACKEND_URL)
    const response = await Backendinstance.post("/api/user/login", payload, {
      withCredentials: true // Include credentials (cookies)
  })
    console.log(response)
    Cookies.set("token", response.data.data.token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 60 * 1000),
    })
    return response.data
  }
  catch (error) {
    const err=error as AxiosError<ResponseData>
    console.log(err.response?.data)
    return err.response?.data
  }
}


export async function authUser(payload:string) {
  if (payload) {
    // setToken(authToken);
    // Optionally set axios defaults or perform other actions with the token
    // axios.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
    try {
      const response = await Backendinstance.get("/api/user/auth", {
        headers: {
          'Authorization': `Bearer ${payload}`,
          'Content-Type': 'application/json'
        }
      })
      return response
    }
    catch (error) {
      const err=error as AxiosError<ResponseData>
      console.log(err.response)
      return err.response
    }

}
}


export async function saveInterviewDetails(payload:dataDatype) {
  try {
    console.log(payload)
    const interviewDetails = await Backendinstance.post('/api/interview', payload)
    console.log(interviewDetails.data.data)
    return interviewDetails.data.data
   
  }
  catch (error) {
    console.log(error)
    }
}

export async function getInterviewDetails(payload:string) {
  try {
   
    // console.log("token in inter ", token)
    const userDetails = await Backendinstance.get(`/api/interview/${payload}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type":"application/json"
      }
    })
    console.log(userDetails.data.data)
    return userDetails.data.data
   
  }
  catch (error) {
    console.log(error)
    }
}


export async function updatesingleInterview(payload:{ interviewid:string,feedbackResponse:string}) {
  try {
    
    const interviewDetails = await Backendinstance.put(`/api/interview/singleinterview/${payload.interviewid}`, payload
     , {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type":"application/json"
      }
    }
    )
    console.log(interviewDetails.data.data)
    return interviewDetails.data.data
   
  }
  catch (error) {
    console.log(error)
    }
}


export async function saveFeedback(payload:saveFeedbackType) {
  try {
    console.log(payload)
    const feedbackDetails = await Backendinstance.post('/api/feedback', payload)
    
    return feedbackDetails.data
   
  }
  catch (error) {
    console.log(error)
    }
}

// export async function getFeedback(payload) {
//   try {
//     console.log(payload)
//     const feedbackDetails = await Backendinstance.get('/api/feedback/'+ payload)
    
//     return feedbackDetails.data
   
//   }
//   catch (error) {
//     console.log(error)
//     }
// }