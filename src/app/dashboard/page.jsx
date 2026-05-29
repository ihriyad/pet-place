import Image from "next/image";
import Link from "next/link";

import { logoFont } from "../layout";
import { Button } from "@heroui/react";

const DashBoardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
      <div className="flex items-center  p-2 rounded-2xl">
        <Image
          src={"/logo2.png"}
          height={30}
          width={30}
          alt="Logo"
          className="text-warning"
        ></Image>
        <p className={`${logoFont.className} uppercase text-lg font-bold`}>
          pet<span className="text-warning">place</span>
        </p>
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Welcome to your Dashboard
      </h1>
      <p className="text-sm text-foreground-500 max-w-sm mb-8">
        Manage your Request, Add pets, and Your Listing — all in one place.
      </p>

      <Link href="/" className="w-1/2 mx-auto">
        <Button
          className="w-full mb-2 text-warning rounded-md"
          variant="outline"
        >
          Back to Home
        </Button>
      </Link>
      <Link href="/all_pets" className="w-1/2 mx-auto">
        <Button
          className="w-full mb-2 text-warning rounded-md"
          variant="outline"
        >
          All pets
        </Button>
      </Link>
    </div>
  );
};

export default DashBoardPage;
