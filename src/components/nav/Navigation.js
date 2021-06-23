import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Desconectar </p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Conectar-se </p>
                <p onClick={() => onRouteChange('signup')} className='f3 link dim black underline pa3 pointer'>Registrar-se </p>
            </nav>
        );
    }

}

export default Navigation;