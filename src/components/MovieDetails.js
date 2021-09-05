import { useParams } from "react-router-dom";
export default function MovieDetails() {
  let { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
