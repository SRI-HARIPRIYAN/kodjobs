import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
const Dashboard = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch("https://www.themuse.com/api/public/jobs?page=1")
			.then((res) => res.json())
			.then((data) => {
				setJobs(data.results);
				setLoading(false);
			});
	}, []);

	return (
		<div className="bg-gray-100 font-roboto">
			<Header />
			{loading && <Spinner />}
			<JobList jobs={jobs} />
		</div>
	);
};

export default Dashboard;
