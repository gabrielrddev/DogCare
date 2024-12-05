import React, { useState } from "react";

const PetList = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Batman",
      profilePicture: null,
      details: [
        "Ele tem alergia a amendoim.",
        "Ele é agressivo a pessoas agitadas.",
        "Se causa rápido de brincar. Adora carinho na barriga mas odeia carinho na cabeça.",
      ],
    },
    {
      id: 2,
      name: "Thor",
      profilePicture: null,
      details: [
        "Nenhuma alergia.",
        "Ele não é agressivo com pessoas normais.",
        "Ele sorri muito.",
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingPet, setEditingPet] = useState(null);
  const [newPet, setNewPet] = useState({
    id: 0,
    name: "",
    profilePicture: null,
    details: [],
  });

  const handleAddPet = () => {
    setEditingPet(null);
    setShowModal(true);
  };

  const handleEditPet = (pet) => {
    setEditingPet(pet);
    setNewPet(pet);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPet(null);
    setNewPet({
      id: 0,
      name: "",
      profilePicture: null,
      details: [],
    });
  };

  const handleInputChange = (e) => {
    setNewPet({
      ...newPet,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setNewPet({
      ...newPet,
      profilePicture: e.target.files[0],
    });
  };

  const handleSavePet = () => {
    if (editingPet) {
      // Update the existing pet
      setPets(
        pets.map((pet) =>
          pet.id === editingPet.id ? { ...pet, ...newPet } : pet
        )
      );
    } else {
      // Add a new pet
      setPets([...pets, { ...newPet, id: pets.length + 1 }]);
    }
    setShowModal(false);
    setEditingPet(null);
    setNewPet({
      id: 0,
      name: "",
      profilePicture: null,
      details: [],
    });
  };

  const handleRemovePet = (petId) => {
    setPets(pets.filter((pet) => pet.id !== petId));
  };

  return (
    <div className="bg-white text-gray-800 p-4">
      <h2 className="text-2xl font-medium mb-4">Meus pets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-gray-200 p-4 rounded-lg flex justify-between items-center"
          >
            <div className="flex items-center">
              {pet.profilePicture ? (
                <img
                  src={URL.createObjectURL(pet.profilePicture)}
                  alt={pet.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-400 rounded-full mr-4" />
              )}
              <div>
                <h3 className="text-xl font-medium">{pet.name}</h3>
                {pet.details.map((detail, index) => (
                  <p key={index} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEditPet(pet)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
              >
                Editar
              </button>
              <button
                onClick={() => handleRemovePet(pet.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-medium mb-4">
              {editingPet ? "Editar Pet" : "Cadastrar novo Pet"}
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newPet.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="profilePicture"
                className="block font-medium mb-2"
              >
                Foto de Perfil:
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              {newPet.profilePicture && (
                <img
                  src={URL.createObjectURL(newPet.profilePicture)}
                  alt="Pet Profile"
                  className="w-32 h-32 rounded-full mt-2"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="details" className="block font-medium mb-2">
                Detalhes:
              </label>
              <textarea
                id="details"
                name="details"
                value={newPet.details.join("\n")}
                onChange={(e) =>
                  setNewPet({
                    ...newPet,
                    details: e.target.value.split("\n"),
                  })
                }
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleSavePet}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleAddPet}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
      >
        Cadastrar novo Pet
      </button>
    </div>
  );
};

export default PetList;
