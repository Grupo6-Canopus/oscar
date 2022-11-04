const Header = () => {
    return (
        <header>
            <div className="px-3 py-2 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <a href="/" className="nav-link text-secondary">                                    
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="/clientes" className="nav-link text-white">
                                    Clientes
                                </a>
                            </li>
                            <li>
                                <a href="/asesores" className="nav-link text-white">
                                    Asesores
                                </a>
                            </li>
                            <li>
                                <a href="/productos" className="nav-link text-white">
                                    Productos
                                </a>
                            </li>
                            <li>
                                <a href="/servicios" className="nav-link text-white">
                                    Servicios
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-3 py-2 border-bottom mb-3">
                <div className="container d-flex flex-wrap justify-content-center">
                    <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                        <input type="search" class="form-control" placeholder="Búsqueda..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-light text-dark me-2">Ingreso</button>
                        <a href="/clientes/form" type="button" className="btn btn-primary">Registro</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;