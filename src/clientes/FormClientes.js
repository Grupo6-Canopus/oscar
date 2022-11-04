const FormClientes = () => {
    return (
        <div className="container mt-3">
            <h3>Formulario de Registro de Clientes</h3>
            <form className="container" action="">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="tipo">Seleccione tipo de documento *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value=""></option>
                            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                            <option value="Cédula de extranjería">Cédula de extranjería</option>
                            <option value="Pasaporte">Pasaporte</option>
                            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label htmlFor="tipo">Ingrese documento *</label>
                        <input className="form-control" type="text" name="identificacion" id="identificacion" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="tipo">Ingrese sus nombres completos *</label>
                        <input className="form-control" type="text" name="nombres" id="nombres" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="tipo">Ingrese sus apellidos completos *</label>
                        <input className="form-control" type="text" name="apellidos" id="apellidos" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="tipo">Seleccione la Sede *</label>
                        <select className="form-select" type="text" name="area" id="area" required>
                            <option value=""></option>
                            <option value="Centro">Centro</option>
                            <option value="Sur">Sur</option>
                            <option value="Norte">Norte</option>
                            <option value="Occidental">Occidental</option>
                            <option value="Oriental">Oriental</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label htmlFor="tipo">Ingrese el número telefónico *</label>
                        <input className="form-control" type="text" name="telefono" id="telefono" />
                    </div>
                    <div className="col-3">
                        <label htmlFor="tipo">Ingrese su Correo Electrónico *</label>
                        <input className="form-control" type="text" name="email" id="email" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormClientes;