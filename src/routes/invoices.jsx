import { getInvoices } from "../data";
import { NavLink, useSearchParams, Outlet } from "react-router-dom";


export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams(); //Osea, si queremos cambiar el param usamos setSearchParams.
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices.filter((invoice) => { /*Filtra por nombre en la barrita buscadora*/
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                }).map((invoice) => (
                    <NavLink
                        style={({ isActive }) => { /*En lugar de un estilo estatico mandamos una funcion que recibe el param isActive. Esto lo sabemos por el router que nos lo dice. Si esta activo, se pone rojo*/
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}