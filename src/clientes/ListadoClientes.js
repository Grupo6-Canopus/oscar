const ListadoClientes = () => {
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
                    <tr>
                        <td>79302982</td>
                        <td>Oscar Augusto</td>
                        <td>Camacho Alvarez</td>
                        <td>Centro</td>
                        <td>6015491042</td>
                        <td>o.camachoa@gmail.com</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListadoClientes;