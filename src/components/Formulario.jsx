import React, {useState} from 'react';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, guardarError] = useState(false);

    const {artista, cancion} = busqueda;

    //fuinion a cada input para leer su contenido
    const actualizarState = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //consultar las apis
    const buscarInformacion = e => {
        e.preventDefault();

        //validaicon

        if(artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        //todo bien, pasar al componente principal

        guardarBusquedaLetra(busqueda);
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                    {error ? <p className="alert alert-danger text-center p2">Todos los campos son obligatorios</p> : null}
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card  text-white bg-transparent mb-5 pt-5 pb-2"
                        >
                        <fieldset>
                            <legend className="text-center">
                                Buscador de canciones
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={actualizarState}
                                            value={artista}
                                            />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label htmlFor="">Cancion</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre cancion"
                                            onChange={actualizarState}
                                            value={cancion}
                                            />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">
                                Buscar
                            </button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;