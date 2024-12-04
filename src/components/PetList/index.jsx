import PetCard from "../PetCard";

const PetList = () => {
  const pets = [
    {
      name: "Batman",
      profilePicture: "../../../dist/img/CachorroCadastrado1.png",
      details: [
        "Ele tem alergia a amendoim.",
        "Ele é agressivo a pessoas agitadas.",
        "Se causa rápido de brincar. Adora carinho na barriga mas odeia carinho na cabeça.",
      ],
    },
    {
      name: "Thor",
      profilePicture: "../../../dist/img/CachorroCadastrado2.png",
      details: [
        "Nenhuma alergia.",
        "Ele não é agressivo com pessoas normais.",
        "Ele sorri muito.",
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800 p-4">
      <h2 className="text-2xl font-medium mb-4">Meus pets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
        Cadastrar novo Pet
      </button>
    </div>
  );
};

export default PetList;
