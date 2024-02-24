import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        data.skills = selectedOption
        console.log(data)
    }

    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "C++", label: "C++" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDb", label: "MongoDb" },
        { value: "Redux", label: "Redux" },


    ]

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* first rows */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Job Title</label>
                            <input defaultValue={"Web Developer"} {...register("jobTitle")}
                                className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Company Name</label>
                            <input placeholder="Ex: Microsoft" {...register("companyName")}
                                className="create-job-input" />
                        </div>
                    </div>
                    {/* second rows */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Minimum Salary</label>
                            <input placeholder="Ex: $20k" {...register("minPrice")}
                                className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Maximum Salary</label>
                            <input placeholder="Ex: $120k" {...register("maxPrice")}
                                className="create-job-input" />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Salary Type</label>
                            <select {...register("salaryType")} className="create-job-input">
                                <option value="">Choose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Job Location</label>
                            <input placeholder="Ex: Bangalore" {...register("jobLocation")}
                                className="create-job-input" />
                        </div>
                    </div>
                    {/* fourth row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Job Posting Date</label>
                            <input type="date" placeholder=" 2024-02-15" {...register("postingDate")}
                                className="create-job-input" />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Experience Level</label>
                            <select {...register("experienceLevel")} className="create-job-input">
                                <option value="">Choose your Experience</option>
                                <option value="NoExperience">No Experice</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>
                    {/* fifth row */}
                    <div>
                        <label className="block mb-2 text-lg" >Required Skills</label>
                        <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className="create-job-input py-4" />

                    </div>
                    {/* sixth row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Company Logo</label>
                            <input type="url" placeholder="Paste your company logo URL: https://www.pexels.com/img" {...register("companyLogo")}
                                className="create-job-input" />
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg" >Employment type</label>
                            <select {...register("employmentType")} className="create-job-input">
                                <option value="">Select your job type</option>
                                <option value="Full-time">Full time</option>
                                <option value="Part-time">Part time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>
                    {/* seventh row */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg" >Job Description</label>
                        <textarea className=" w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" rows={6} placeholder="Job Description"  {...register("description")} />
                    </div>
                    {/* Last row */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg" >Job Posted by</label>
                        <input type="email" placeholder="mail@email.com" {...register("postedBy")}
                            className="create-job-input" />
                    </div>
                    <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
                </form>
            </div >
        </div >
    )
}

export default CreateJob