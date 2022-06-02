// import { useParams } from "react-router-dom";
// import { getInvoice } from "../data";


// export default function Invoice() {
//     let params = useParams();
//     let invoice = getInvoice(parseInt(params.invoiceId, 10)); {/*Basicamente llamamos a la funcion que nos trae ese invoice mandando como param lo que esta en la url.. Tenemos que parsear a in porque viene tipo string en el url.*/ }
//     return (
//         <main style={{ padding: "1rem" }}>
//             <h2>Total Due: {invoice.amount}</h2>
//             <p>
//                 {invoice.name}: {invoice.number}
//             </p>
//             <p>Due Date: {invoice.due}</p>
//         </main>
//     );
// }

import { useParams } from "react-router-dom";
import { getPelicula } from "../data";

const Pelicula = () => {
    let params = useParams();
    let pelicula = getPelicula(parseInt(params.peliculaId, 10));
    
}

export default Pelicula;