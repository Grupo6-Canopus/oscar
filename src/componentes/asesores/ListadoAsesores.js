const ListadoAsesores = () => {
    return(
        <div className="container">
            <h3 className="mt-3">Lista de Agentes</h3>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Cargo</th>
                        <th>Área</th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>Oscar Andrés</td>
                        <td>Camacho Aguirre</td>
                        <td>Asesor Técnico</td>
                        <td>Mesa de Ayuda</td>
                        <td>3162489760</td>
                        <td>oacamachoa515@gmail.com</td>
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

export default ListadoAsesores;