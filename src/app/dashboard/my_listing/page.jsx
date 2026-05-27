import MyListingClient from '@/components/dashboard/MyListingClient';
import { getMyListings } from '@/lib/actions';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListingPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const email = session?.user?.email
// console.log(email);
    const pets = await getMyListings(email)
    // console.log(pets);
    return (
        <div>
       <MyListingClient pets={pets} email={email}></MyListingClient>
        </div>
    );
};

export default MyListingPage;