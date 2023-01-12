import { useFetch } from "../../hook/use-hook";
import { ENDPOINTS } from "../../base_url/endpoint";

export function Beers() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BEERS);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    if (!data) return '';

    return (<section>
        <h2>BEERS</h2>
        <h3>{data.brand} - {data.name}</h3>
        <h4>{data.style} - {data.alcohol}</h4>
        <p>{data.malts} - {data.ibu}</p>  
        <button onClick={refetch}>New Beer</button>
    </section>)
}