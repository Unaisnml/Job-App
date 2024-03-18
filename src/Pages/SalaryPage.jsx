import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'

const SalaryPage = () => {

  const [searchText, setSearchText] = useState('')
  const [salary, setSalary] = useState([])

console.log(searchText);


  // useEffect(()=>{
  //   fetch("salary.json").then(res => res.json()).then(data=>setSalary(data))
  // },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("salary.json");
        console.log("response",response);
        const data = await response.json();
        setSalary(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [searchText]);
  const handleSearch = ()=>{
    const filter = salary.filter((job)=>job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    console.log(filter);
    setSalary(filter)

  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader title={"Estimate Salary"} path={"Salary"}/>

        <div className='mt-5'>
          <div className='search-box p-2 text-center mb-2'>
        <input onChange={(e)=>setSearchText(e.target.value)} type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'/>
        <button onClick={handleSearch} className='bg-blue text-white py-2 px-8 font-semibold mb-4 rounded-sm'>Search</button>
          </div>
        </div>

        {/* Salary display card */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
          {
            salary.map((data)=>(
            <div className='shadow px-4 py-8' key={data.id}>
              <h4 className='font-semibold text-xl'>{data.title}</h4>
              <p className='font-medium text-lg text-blue'>{data.salary}</p>
              <div className='flex flex-wrap gap-4'>
                <a href="/" className='underline'>{data.status}</a>
                <a href="/" className='underline'>{data.skills}</a>
              </div>
            </div>))
          }
        </div>

        </div>
       
        
  )
}

export default SalaryPage