import React from 'react';
import PropTypes from 'prop-types';
import Contacto from '../../models/class.contacto';
import ComponenteB from '../container/componenteB';



const ComponenteA = () => {

    const contacto = new Contacto('Diego', 'chavez', 'diego.ch@gmail.com', false)

    return (
        <div>
            <div>
                <ComponenteB contacto={contacto}></ComponenteB>
            </div>
        </div>  
    );
};

ComponenteA.propTypes = {

};


export default ComponenteA;
