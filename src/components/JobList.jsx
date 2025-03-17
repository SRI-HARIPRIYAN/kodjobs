import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
	return (
		<div className="container py-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto ">
			{jobs?.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</div>
	);
};

export default JobList;
