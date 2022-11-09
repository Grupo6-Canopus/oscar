const clientes = [
    {
        identificacion: "51694997",
        nombres: "Mónica Mariela",
        apellidos: "Aguirre Avellaneda",
        sede: "Centro",
        telefono: "3183757407",
        email: "monica.aguirre.avellaneda.1963@gmail.com",
        password: "Valeria$1012"
    },
    {
        identificacion: "1010190630",
        nombres: "Laura Carolina",
        apellidos: "Camacho Aguirre",
        sede: "Sur",
        telefono: "31748675098",
        email: "lacar230590@gmail.com",
        password: "SimoVale$1012"
    },
    {
        identificacion: "80118966",
        nombres: "Diego Mauricio",
        apellidos: "Camacho Aguirre",
        sede: "Occidental",
        telefono: "3246519898",
        email: "dimaca009@gmail.com",
        password: "Paola.Mao"
    },
    {
        identificacion: "80118967",
        nombres: "Sergio Hernando",
        apellidos: "Camacho Aguirre",
        sede: "Oriental",
        telefono: "32146519898",
        email: "sergio80118009@gmail.com",
        password: "Adriana.Cheche"
    },
    {
        identificacion: "1001067081",
        nombres: "Oscar Andrés",
        apellidos: "Camacho Aguirre",
        sede: "Centro",
        telefono: "3162489760",
        email: "oacamachoa515@gmail.com",
        password: "Oscama$2003"
    }
]

const ClientesServicios = {};

ClientesServicios.listarclientes = () => {
    return clientes;
}

export default ClientesServicios;