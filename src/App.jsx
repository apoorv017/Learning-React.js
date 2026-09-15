import React from 'react'
import Card from './components/Card'
const App = () => {
  const jobs = [
  {
    logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    company: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    company: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF975EsyF9uUIpzpZ9lbH4tN95AO0FcvcfQdvhuVq1BA&s",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$44/hr",
    location: "Noida, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P1WYC7vMojLmT5MrWFkZCmBwmYjZNujAGPa9NlH5xw&s",
    company: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Bengaluru, India"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAR7bLRzhXmFfuaS4eOiMWD-wm7qLZE9e5reCtUO_PONcAjRCfBE1UZ9fu&s=10",
    company: "Apple",
    datePosted: "10 days ago",
    post: "Software Engineer - Java",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Remote, India"
  },
  {
    logo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Deep Learning Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "4 weeks ago",
    post: "Software Development Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    logo: "https://logo.clearbit.com/salesforce.com",
    company: "Salesforce",
    datePosted: "6 weeks ago",
    post: "Associate Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon Web Services",
    datePosted: "10 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$36/hr",
    location: "Mumbai, India"
  }
];
  return (
    <div className='parent'>
      {jobs.map(function(elem, idx){
        // to uniquely identify each key
        return <div key={idx}>
          <Card company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} DatePosted={elem.datePosted} brandLogo={elem.logo} pay={elem.pay} />
        </div>
      })}
    </div>
  )
}

export default App
