import React from "react";
import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import USER from './components/user'
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Support Associate",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Automation Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
companyName: "IBM",
    datePosted: "12 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Singapore"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Austin, USA"
  }
];

  
  return (
    <div className="parent">
     {jobOpenings.map((elem,idx)=>{
      return <div key={idx}>
         <Card  company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay}  tag2={elem.tag2} />
      </div>
     })}
    </div>
  );
};

export default App;
