import { useFetch } from "../../hooks/useFetch";

export function CounterPropertiesCompany({id}) {
    const {data} = useFetch(`/autos/company/${id}`);

    return (
        <>
        { data?.length}
        </>
    )
}