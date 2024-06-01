import { useState } from 'react';
import FormAuto from './FormAuto.jsx';
import FormOtros from './FormOtros.jsx';

const Contacto = () => {
  const [showAutomotoresForm, setShowAutomotoresForm] = useState(false);
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
    <div className="min-h-[400PX]  h-auto grid bg-[#030303ff] w-full">
      <div className="flex flex-col  items-center sm:justify-center md:justify-start flex-auto ">
        <div className="relative sm:w-1/2 xl:w-3/5  h-full  md:flex flex-auto flex-col items-center justify-center p-4 overflow-hidden text-white gap-6">
          <div className="w-full">
            <p className="text-6xl text-slate-100 text-center my-8 md:mt-0 ">Solicita tu Cotización</p>
          </div>
          <div className="flex gap-5 flex-col md:flex-row w-full justify-center items-center">
            <button className="btn glass" onClick={handleAutomotoresButtonClick} >Automotores</button>
            <button className="btn glass" onClick={handleOtrosRiesgosButtonClick}>Otros Riesgos</button>
          </div>
        </div>
        <div id="form" className="w-[90%] md:w-[60%] mb-5" >
          {showAutomotoresForm ? <FormAuto /> : null}
          {showOtrosRiesgosForm ? <FormOtros /> : null}

        </div>
      </div>
    </div>
  )
}

export default Contacto

