import { useFetch } from "../../hook/use-hook";
import { ENDPOINTS } from "../../base_url/endpoint";

export function Cards() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.CREDIT_CARDS);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    if (!data) return '';

    return (<section>
        <h2>CREDIT CARDS</h2>
        <h3>{data.credit_card_number}</h3>
        <h4>{data.credit_card_expiry_date}</h4>
        <button onClick={refetch}>New Credit card</button>
    </section>)
}