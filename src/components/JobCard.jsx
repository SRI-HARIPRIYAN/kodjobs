const JobCard = ({ job }) => {
	const {
		name,
		company,
		locations,
		publication_date,
		refs,
		levels,
		salary,
		posted_days_ago,
		expired_days_ago,
		skills,
		status,
	} = job;

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};
	const getRandomColor = () => {
		const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
		return randomColor;
	};

	const timeAgo = (dateString) => {
		const now = new Date();
		const past = new Date(dateString);
		const diffTime = Math.abs(now - past);
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		if (diffDays > 0) return `${diffDays} days ago`;
		else return `today`;
	};
	return (
		<div className="rounded-md shadow-lg cursor-pointer flex flex-col pb-4 bg-white w-[250px] sm:w-[300px] md:w-[350px] max-w-[600px] mx-auto ">
			<div className="h-1 rounded-t-md " style={{ backgroundColor: getRandomColor() }}></div>
			<div className="p-3 w-full flex-grow">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-full bg-gray-100"> </div>
					<div className="flex items-center gap-4">
						<div>
							<h2 className="text-lg font-bold">{company.name}</h2>
							<p className="text-sm text-gray-500">
								{locations[0]?.name || "Location not specified"}
							</p>
						</div>
					</div>
				</div>

				<h3 className="text-md font-semibold mt-4">{name}</h3>

				<div className="flex justify-between text-sm text-gray-500">
					<span className="text-sm font-bold opacity-60">{job.levels[0].name}</span>
					<p>Posted {timeAgo(publication_date)}</p>
				</div>
			</div>

			{/* Buttons are now aligned at the bottom */}
			<div className="flex justify-around items-center mt-auto">
				<a
					href={refs}
					className="w-fit bg-black hover:bg-gray-800 text-white px-4 py-1.5 rounded-lg"
				>
					Check details
				</a>
				<a
					href={refs}
					className="w-fit bg-green-400 hover:bg-green-500 text-white px-4 py-1.5 rounded-lg"
				>
					Apply
				</a>
			</div>
		</div>
	);
};

export default JobCard;
