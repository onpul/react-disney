import { useQuery } from "react-query";
import { fetchDetails } from "../api";
import { useParams } from "react-router-dom";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function Detail() {
  const { id } = useParams();
  console.log(id);
  const { isLoading, data } = useQuery(["id", id], () => fetchDetails(id));
  console.log(data);
  return (
    <>
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div>
            <ul>
              <li>{data.id}</li>
              <li>{data.name}</li>
              <li>{data.films}</li>
              <li>
                <img src={data.imageUrl} alt={data.name} />
              </li>
              <li>{data.sourceUrl}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
