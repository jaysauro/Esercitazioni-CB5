import { useFetch } from "../../hook/use-hook";
import { ENDPOINTS } from "../../base_url/endpoint";

export function Banks() {

    const {data, error, loading, refetch} = useFetch(ENDPOINTS.BANKS);

    if (loading) return `Loading...`;

    if (error) return `Errore!`;

    return (<section>
        <h2>BANKS</h2>
        <h3>{data.bank_name}</h3>
        <h4>Account N°{data.account_number}</h4>
        <p>IBAN: {data.iban}</p>
        <button onClick={refetch}>New Bank</button>
    </section>)
}