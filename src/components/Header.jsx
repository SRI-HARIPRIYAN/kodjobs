import { useNavigate } from "react-router-dom";
export default function Header() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("auth");
		navigate("/login");
	};
	return (
		<header className="flex items-center justify-between p-4 bg-whtie text-white shadow-md sticky top-0 bg-white z-20 ">
			<div className="flex items-center gap-2">
				<h1 className="text-xl  text-black font-bold">
					<span className="text-[#fbb907]">K</span>odJobs
				</h1>
			</div>
			<button
				onClick={handleLogout}
				className="px-2 py-1.5 bg-red-200 hover:bg-red-400  text-black rounded-md"
			>
				Logout
			</button>
		</header>
	);
}
