import { useState } from 'react';

export const Pet = ({ name, isVaccinated }) => {
  const [loading, setIsLoading] = useState(false);
  const [vaccinated, setVaccinated] = useState(isVaccinated);

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const updatedStatus = !vaccinated;
      const response = await fetch('/api/pets', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          isVaccinated: updatedStatus
        })
      })
      if (!response.ok) {
        throw new Error(`Failed to set vaccinated status for ${name} to ${updatedStatus}`);
      }
      setVaccinated(updatedStatus);
      
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="Pet">
      {name} - Vaccinated: <button onClick={handleClick}>{loading ? '...' : `${vaccinated}`}</button>
    </div>
  )
}