
export const addPetInfo = async (formData) => {
  const newPet = Object.fromEntries(formData.entries());
  console.log(newPet);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/all_pets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newPet),
  });
  const data = await res.json();
  return data;
  // console.log("data submitted", data);
};

export const getAllPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/all_pets`);
  const pets = await res.json();
  return pets;
};

export const getPetById = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/all_pets/${id}`,
  );
  const pet = await res.json();
  return pet;
};

export const getMyListings = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/my_listing/${email}`,
  );
  const pets = await res.json();
  return pets;
};

export const deletePet = async (id, email) => {
  console.log(id, email, "from delete handle");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/all_pets/${id}?email=${email}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    },
  );
  const data = await res.json();
  // console.log(data);

  return data;
};

export const handleEditPet = async (editedPet, id) => {
  // console.log(editedPet, id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/all_pets/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedPet),
    },
  );
  const data = await res.json();
  return data;
};
