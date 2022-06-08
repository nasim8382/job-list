import React from 'react';

const Job = ({job, index}) => {
    const {company, designation, location, min_experience, skills} = job;

    return (
      <tr>
        <th>{index+1}</th>
        <th>{designation}</th>
        <th>{company}</th>
        <th>{location}</th>
        {
        min_experience === 0 ? 
        <th>Fresher</th> : 
        <th>{min_experience}</th>
        }
        <th>{skills.join(" , ")}</th>
      </tr>
    );
};

export default Job;