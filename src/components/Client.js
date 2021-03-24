import { Pet } from './Pet'

export const Client = ({ name, pets }) => {
  return (<div className="Client">
    <div>{name}</div>
    {pets.map((pet, i) => (
      <Pet key={pet.name + i} name={pet.name} isVaccinated={pet.isVaccinated} />
    ))}
  </div>)
}