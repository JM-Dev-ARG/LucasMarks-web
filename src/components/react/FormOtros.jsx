
import emailjs from '@emailjs/browser';


const FormOtros = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_p6sbqmo", "template_uyyxn5f", e.target, "r9UZREt8sORkURZW_").then(res=>{
            alert("Mensaje enviado correctamente")
            e.target.reset()
        })
    }

    return (
    <div className="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">
        <form  onSubmit={sendEmail} className="flex flex-col justify-center  gap-3">
        
            <input type="text" placeholder="Nombre y Apellido" name="nombre"  className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" />
            
            <input type="email" placeholder="Email" name="email"  className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white"/>
            
            <input type="number"  placeholder="Teléfono" name="telefono" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />

            <select className="border rounded-lg py-3 px-3 mt-1 bg-black border-indigo-600 placeholder-white-500 text-slate-500" name="riesgo" defaultValue={'value1'}  >
                <option value="value1" disabled >Tipo de Riesgo</option>
                <option value="hogar" className="text-white">Hogar</option>
                <option value="vida" className="text-white">Vida</option>
                <option value="accidentes personales" className="text-white">Accidentes personales</option>
                <option value="caución" className="text-white">Caución</option>
                <option value="responsabilidad civil" className="text-white">Responsabilidad civil</option>
                <option value="integrales de comercio" className="text-white">Integrales de comercio</option>
                <option value="agrícola" className="text-white">Agrícola</option>
                <option value="cyber risk" className="text-white">Cyber risk</option>
                <option value="Flotas" className="text-white">Flotas</option>
                <option value="Construcción" className="text-white">Construcción</option>
                <option value="riesgos del trabajo" className="text-white">Riesgos del trabajo</option>
                <option value="transportes" className="text-white">Transportes</option>
                <option value="all risk" className="text-white">All risk</option>
            </select>

            {/* <button className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold md:hover:bg-slate-400 md:hover:text-black" >Solicitar Cotización</button> */}
            <button id="btn" className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibol duration-500 md:hover:bg-slate-400 md:hover:text-black" >Solicitar Cotización</button>
            </form>
        </div>
    )
}

export default FormOtros


