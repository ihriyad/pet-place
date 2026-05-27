import Link from "next/link";
import { FaPaw } from "react-icons/fa";

const SameUser = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 border border-divider rounded-xl bg-default-50/50">
      <div className="w-11 h-11 bg-warning/10 rounded-full flex items-center justify-center text-warning text-lg mx-auto mb-4">
        <FaPaw />
      </div>
      <p className="font-semibold text-foreground mb-1">This is your listing</p>
      <p className="text-sm text-foreground-400 mb-5">
        You added this pet. Manage it from your dashboard.
      </p>
      <Link
        href="/dashboard/my_listing"
        className="px-5 py-2 rounded-full bg-warning/20 text-warning text-sm font-semibold hover:bg-warning/30 transition-colors"
      >
        Go to My Listings
      </Link>
    </div>
  );
};

export default SameUser;
