import { Button } from "@/components/ui/button";
import UserContext from "@/Context/UserContext";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const {user}=useContext(UserContext)
  const candidateFeatures = [{
    head: "Personalized Interview Feedback",
    value: `eceive instant, detailed feedback on performance to identify strengths and areas for improvement.`},
    {head:"Practice Interviews",
      value: `Access mock interviews to practice and prepare for real AI-based interviews.`
  },
    {
      head:"Skill Assessment Reports",
      value: `Get comprehensive reports on skills and competencies evaluated during the interview.
Interview Scheduling: Easily schedule follow-up interviews with recruiters based on availability.`},
]

  const recruiterFeature=[{
    head: "Automated Candidate Ranking",
    value: "Automatically rank candidates based on their AI interview performance."
  },
  {
    head: "Customizable Interview Questions",
    value: "Tailor interview questions to specific job roles and requirements."
  },
  {
    head: "Analytics Dashboard",
    value: "Gain insights into candidate performance and recruitment metrics with an analytics dashboard."
  },
  
]
  console.log(user)
  const navigate=useNavigate()
  function handleClick() {
    if (!user.isLoggedIn) {
      navigate("/auth/sign-in")
    }
    else {
      navigate("dashboard")
      
    }
  }
  return (
    <div className="md:px-36 ">
      <div className="flex my-16 md:my-32 items-center gap-8">
        <div className="w-full items-center flex flex-col ">
          <h1 className="text-2xl text-center md:text-6xl mb-4 md:mb-8 font-bold ">AI-cruiter</h1>
          <h1 className="text-2xl text-center md:text-6xl mb-4 md:mb-8 font-bold ">AI-based interview taker </h1>
          <p className="text-base md:text-lg w-full md:w-[70%] text-balance text-center my-8"> revolutionizing hiring not by taking jobs, but by helping you land them. Recruiters can post job openings, and candidates can undergo AI-driven interviews designed to highlight their strengths and skills.</p>
          <div className="mt-4">
          {user.isLoggedIn?<Button onClick={handleClick} variant={"default"} size={"lg"}>Dashboard</Button>:<Button onClick={handleClick}>Signin</Button>}

          </div>
        </div>
        
      </div>

        
      <div className="relative flex my-16 md:my-36 m-auto  md:w-full w-[90%] items-center ">
        <div className="glass-container  ">
       <img src="./assets/dashboard.png" className="rounded-lg border shadow-lg" alt="" />
        <div className="absolute -z-50 inset-0 w-full h-[100%]  bg-[#6d28d9e6]/50 blur-2xl filter ">

        </div>
        </div>
      </div>
      <div className=" my-20">

            <h1 className="text-5xl font-semibold text-center">For For Recruiters:</h1>
          
            {recruiterFeature.map((value, key) => {
              return (
                <div key={key} className="h-screen">
      <div className="flex  items-center flex-col-reverse md:flex-row-reverse gap-8 h-full">
        <div className="md:w-1/2 w-[80%] p-4 md:h-3/5 h-1/2">
          <div className="bg-white/50 w-full h-full flex  items-center justify-center " >
            image
            </div>
        </div>
                    <div className="md:w-1/2 w-full">
                      <div className="w-[80%] m-auto">

                  <h1 className="font-semibold text-3xl text-center">{value.head}:</h1>
                  <p className="my-8 text-xl text-center">{value.value}</p>
                      </div>

                </div>
                
        </div>
      </div>
              )
            })}
            
            </div>
    </div>
  )
}
