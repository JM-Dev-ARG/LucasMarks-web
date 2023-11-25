import { useState } from 'react';
import FormAuto from './FormAuto.jsx';
import FormOtros from './FormOtros.jsx';

const Contacto = () => {  const [showAutomotoresForm, setShowAutomotoresForm] = useState(false);
    const [showOtrosRiesgosForm, setShowOtrosRiesgosForm] = useState(false);
  
    const handleAutomotoresButtonClick = () => {
      setShowAutomotoresForm(true);
      setShowOtrosRiesgosForm(false);
    };
  
    const handleOtrosRiesgosButtonClick = () => {
      setShowAutomotoresForm(false);
      setShowOtrosRiesgosForm(true);
    };

  return (
    <div class="min-h-[400PX]  h-auto grid bg-black w-full">
        <div class="flex flex-col  items-center sm:justify-center md:justify-start flex-auto ">
            <div class="relative sm:w-1/2 xl:w-3/5  h-full  md:flex flex-auto flex-col items-center justify-center p-4 overflow-hidden text-white gap-6">
                <div  class="w-full">
                    <p class="text-6xl text-slate-100 text-center mb-6">Solicita tu Cotización</p>
                </div>
                <div  class="flex gap-5 flex-col md:flex-row w-full justify-center items-center">
                    <button class="btn glass" onClick={handleAutomotoresButtonClick} >Automotores</button>
                    <button class="btn glass" onClick={handleOtrosRiesgosButtonClick}>Otros Riesgos</button>
                </div>                
            </div>
            <div id="form" class="w-[90%] md:w-[60%] mb-5" >
            {showAutomotoresForm ? <FormAuto /> : null}
            {showOtrosRiesgosForm ? <FormOtros /> : null}

            </div>
        </div>
    </div>
  )
}

export default Contacto
