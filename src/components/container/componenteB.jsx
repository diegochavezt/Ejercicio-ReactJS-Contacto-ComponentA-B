import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Contacto from '../../models/class.contacto'

const ComponenteB = ({contacto}) => {

    const [conectado, setconectado] = useState(false);

    const changeState = () => {
        setconectado (!conectado);
    }

    return (
        <div>
            <div>
                <h2>
                    Nombre: { contacto.nombre }
                </h2>
            </div>
            <div>
                <h2>
                    Apellido: { contacto.apellido }
                </h2>
            </div>
            <div>
                <h3>
                    Email: { contacto.email }
                </h3>
            </div>
            <div>
                <h4>
                    Estado en línea: { contacto.conectado ? 'En línea':'desconectado' }
                </h4>
            </div>
            <div>
                <button onClick={ changeState }>Cambiar estado</button>
            </div>
        </div>
    );
};

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};


export default ComponenteB;
