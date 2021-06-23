import React from 'react';
import './ImgLinkForm.css'

const ImgLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {"O Acha Rosto vai encontrar rostos em qualquer imagem para você."}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-100 center input-reset ba bg-white hover-bg-white hover-black' placeholder="Insira a URL da imagem" type='text' onChange={onInputChange} />
                <button 
                className='w-30 grow f6 link ph2 pv2 dib b pv2 ba b--black bg-transparent pointer'
                onClick={onButtonSubmit}
                >Detectar!</button>
                </div>
            </div>
        </div>
    );
}

export default ImgLinkForm;