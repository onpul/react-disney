import { useQuery } from "react-query";
import { fetchCharacters } from "../api";
import { Link } from "react-router-dom";

function Home() {
  const { isLoading, data } = useQuery("what", fetchCharacters);
  console.log(data);
  //   return <div></div>;
  return (
    <div>
      <ul>
        {isLoading
          ? "Loading..."
          : data
              ?.map((item: { id: string; name: string; imageUrl: string }) => (
                <li key={item.id}>
                  <div>
                    <Link to={{ pathname: `/${item.id}`, state: { id: item.id } }}>
                      <img src={item.imageUrl} alt="" />
                      {item.name}
                    </Link>
                  </div>
                </li>
              ))
              .slice(0, 20)}
      </ul>
    </div>
  );
}

export default Home;
