import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import Jobs from "./Jobs"
import Sidebar from "../sidebar/Sidebar"

const Home = () => {
  const [selectedCategory, setSeletedCategory] = useState(null)
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data)
    })
  },[])

  //handle input change
  const [query, setQuery] =useState("")
  const handleInputChange = (event) =>{
      setQuery(event.target.value)
  }
  // filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
 
  //Radio filtering
  const handleChange = (event) => {
    setSeletedCategory(event.target.value)
  }

  //button based filtering
  const handleClick = (event) => {
    selectedCategory(event.target.value)
  }


  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    
    // filtering Input items
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({
        jobLocation, MaxPrice, experienceLevel, salaryType,
        employmentType, postingDate
      }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(MaxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs);
    }

    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
   }

  const result = filteredData(jobs, selectedCategory, query)
  return (
    <div>
        <Banner query={query} handleInputChange={handleInputChange}/>
    {/* main content */}
        <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">

          {/* left side */}
          <div className="bg-white p-4 rounded">
            <Sidebar handleChange={handleChange} handleClick={handleClick}/>
            </div>

          {/* job cards */}
          <div className="col-span-2 bg-white p4 rounded-sm">
          <Jobs result = {result}/>
          </div>

          {/* right side */}
          <div className="bg-white p-4 rounded">Right</div>
         
        </div>
    </div>
  )
}

export default Home