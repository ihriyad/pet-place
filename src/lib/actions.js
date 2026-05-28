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

export const sendAdoptionRequest = async (requestData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/requests`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(requestData),
  });
  const data = await res.json();
  return data;
};

// get requests for the logged in user
export const getMyRequests = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/requests/${encodeURIComponent(email)}`,
  );
  const data = await res.json();
  return data;
};

// check if user already requested this pet
export const checkRequest = async (petId, email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/requests/check/${petId}/${encodeURIComponent(email)}`,
  );
  return res.json();
};

// get requests for a specific pet for owner
export const getPetRequests = async (petId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/requests/pet/${petId}`,
  );
  return res.json();
};

// approve or reject a request
export const updateRequestStatus = async (requestId, status) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SEVER_URL}/requests/${requestId}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    },
  );
  return res.json();
};
