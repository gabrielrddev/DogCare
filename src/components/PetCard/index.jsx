const PetCard = ({ pet }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <img
        src={pet.profilePicture}
        alt={pet.name}
        className=" h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-medium">{pet.name}</h3>
        {pet.details.map((detail, index) => (
          <p key={index} className="text-gray-600">
            {detail}
          </p>
        ))}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
          Editar
        </button>
      </div>
    </div>
  );
};

export default PetCard;
