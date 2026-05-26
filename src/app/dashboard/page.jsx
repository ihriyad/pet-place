import Link from "next/link";
import { FaPaw } from "react-icons/fa";

const DashBoardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
      <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center text-warning text-xl mx-auto mb-5">
        <FaPaw />
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Welcome to your Dashboard
      </h1>
      <p className="text-sm text-foreground-500 max-w-sm mb-8">
        Manage your Request, Add pets, and Your Listing — all in one place.
      </p>

      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-warning/20 text-warning text-sm font-semibold hover:bg-warning/30 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default DashBoardPage;