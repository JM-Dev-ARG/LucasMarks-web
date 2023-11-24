
const FormOtros = () => {
    const form = document.getElementById("form")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })

    return (
    <div class="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">
        <form id="form" class="flex flex-col justify-center  gap-3">
        
            <input type="text" placeholder="Nombre y Apellido" class="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" />
            
            <input type="email" placeholder="Email" class="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white"/>
            
            <input type="number"  placeholder="Teléfono" class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"/>

            <select class="border rounded-lg py-3 px-3 mt-1 bg-black border-indigo-600 placeholder-white-500 text-slate-500">
            <option value="value1" disabled selected>Tipo de Riesgo</option>
                <option value="HOGAR" class="text-white">Hogar</option>
                <option value="automotores" class="text-white">Automotores</option>
                <option value="vida" class="text-white">Vida</option>
                <option value="accidentes personales" class="text-white">Accidentes personales</option>
                <option value="caución" class="text-white">Caución</option>
                <option value="responsabilidad civil" class="text-white">Responsabilidad civil</option>
                <option value="integrales de comercio" class="text-white">Integrales de comercio</option>
                <option value="agrícola" class="text-white">Agrícola</option>
                <option value="cyber risk" class="text-white">Cyber risk</option>
                <option value="Flotas" class="text-white">Flotas</option>
                <option value="Construcción" class="text-white">Construcción</option>
                <option value="riesgos del trabajo" class="text-white">Riesgos del trabajo</option>
                <option value="transportes" class="text-white">Transportes</option>
                <option value="all risk" class="text-white">All risk</option>
            </select>

            <button  class="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold md:hover:bg-slate-400 md:hover:text-black" >Solicitar Cotización</button>
            </form>
        </div>
    )
}

export default FormOtros


