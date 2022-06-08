import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://refertest.pythonanywhere.com/job/openings", {
      method: "GET",
      Headers: {
        "tid": 3441
      },
    })
      .then((res) => res.json())
      .then((data) => setJobs(data.data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl py-12">
        Total Job Openings: {jobs.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Designation</th>
              <th>Company Name</th>
              <th>Job Location</th>
              <th>Experience</th>
              <th>Skills Required</th>
            </tr>
          </thead>
          <tbody>
          {
            jobs.map( (job, index) => <Job 
                    key={job.id} 
                    job={job}
                    index={index}
                ></Job>)
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;
