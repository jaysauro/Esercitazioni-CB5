import { useFetch } from "../../hook/use-hook";
import { ENDPOINTS } from "../../base_url/endpoint";

export function Bloods() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BLOOD_TYPES);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    if (!data) return '';

    return (<section>
        <h2>BLOOD TYPES</h2>
        <h3>Type: {data.type}{data.rh_factor}</h3>
        <h4>Group: {data.group}</h4>
        <button onClick={refetch}>New Bloodtype</button>
    </section>)
}