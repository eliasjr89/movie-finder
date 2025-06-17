import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { id } = useParams();

  // Aquí iría la llamada a la API para buscar la película por id y mostrar info detallada
  // Por ahora, mock simple:

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Movie Detail: {id}</h2>
      <p>Detalles de la película irán aquí.</p>
    </div>
  );
};
