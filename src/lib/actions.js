export const getAllPets = async () => {
  const res = await fetch("http://localhost:5000/all_pets");
  const pets = await res.json();
  return pets;
};

export const getPetById = async (id) => {
  const res = await fetch(`http://localhost:5000/all_pets/${id}`);
  const pet = await res.json();
  return pet;
};
