export const getAllPets = async () => {
  const res = await fetch("http://localhost:5000/all_pets");
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

export const addPetInfo = async (formData) => {
  const newPet = Object.fromEntries(formData.entries());
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/all_pets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newPet),
  });
  const data = await res.json();
  console.log("data submitted", data);
};
