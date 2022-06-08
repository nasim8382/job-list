import React, { useEffect, useState } from "react";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://refertest.pythonanywhere.com/job/openings", {
      method: "GET",
      Headers: {
        tid: 3441,
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
    </div>
  );
};

export default Jobs;
