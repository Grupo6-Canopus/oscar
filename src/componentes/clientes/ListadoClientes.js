import Estados from "../../enums/Estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

    let estado = Estados.CARGANDO;
    const listadoClientes = ClientesServicios.listarclientes();
    console.log(listadoClientes);
    if (listadoClientes.length > 0) {
        estado = Estados.OK;
    }
    else {
        estado = Estados.VACIO;
    }
    //estado = Estados.CARGANDO;

    return(
        <div className="container">
            
            <h3 className="mt-3">Lista de Clientes</h3>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Identificación</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Sede</th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {   estado == Estados.CARGANDO ?
                            (<div>Cargando ...</div>)
                        :
                        estado == Estados.VACIO ? 
                            (<div>La Lista de Clientes está vacia</div>) 
                        : 
                        listadoClientes.map((cliente) => (
                            <tr>
                                <td>{ cliente.identificacion }</td>
                                <td>{ cliente.nombres }</td>
                                <td>{ cliente.apellidos }</td>
                                <td>{ cliente.sede }</td>
                                <td>{ cliente.telefono }</td>
                                <td>{ cliente.email }</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListadoClientes;