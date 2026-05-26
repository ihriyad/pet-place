import AllPetsSection from '@/components/allpets/AllPetsSection';
import { getAllPets } from '@/lib/actions';
import React, { Suspense } from 'react';

const AllPetsPage =async () => {
    const pets = await getAllPets()
    console.log(pets, 'all pets data');
    return (
        <Suspense fallback={<>Loading pets...</>}>
            <AllPetsSection pets={pets}></AllPetsSection>
        </Suspense>
    );
};

export default AllPetsPage;