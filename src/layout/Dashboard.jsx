import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { RiCoupon5Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdPreview } from "react-icons/md";
import { MdReport } from "react-icons/md";

const Dashboard = () => {
	const { user } = useAuth();
    const isAdmin = true;
    const isModerator = true;

	return (
		<div className="flex">
			{/* dashboard side bar */}
			<div className="w-64 min-h-screen bg-orange-400">
				<ul className="menu p-4">
					{isAdmin ? (
						<>
							<li>
								<NavLink to="/dashboard/adminHome">
									<FaHome></FaHome>
									Admin Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/users">
									<FaUsers></FaUsers>
									All Users
								</NavLink>
							</li>

							<li>
								<NavLink to="/dashboard/manageCoupons">
									<RiCoupon5Line />
									Coupons
								</NavLink>
							</li>
						</>
					) : user ? (
						<>
							<li>
								<NavLink to="/dashboard/userHome">
									<CgProfile />
									My Profile
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/addProducts">
									<FaUtensils></FaUtensils>
									Add Products
								</NavLink>
							</li>

							<li>
								<NavLink to="/dashboard/myProducts">
									<FaShoppingCart></FaShoppingCart>
									My Products
								</NavLink>
							</li>
						</>
					) : isModerator ? (
						<>
							<li>
								<NavLink to="/dashboard/reviewProducts">
									<MdPreview />
									Review
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/reportedProducts">
									<MdReport />
									Report
								</NavLink>
							</li>
						</>
					) : null}
				</ul>
				;
			</div>
			{/* dashboard content */}
			<div className="flex-1 p-8">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
