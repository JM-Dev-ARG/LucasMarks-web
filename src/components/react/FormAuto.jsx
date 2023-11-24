import "./formAuto.css"

const FormAuto = () => {
    const form = document.getElementById("form")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })

    return (
        <div class="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">

            <form id="form" class="flex flex-col justify-center gap-3">

                <input type="text" placeholder="Nombre y Apellido" class="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white"/>

                <input type="email" placeholder="Email" class="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white"/>

                <input type="number"  placeholder="Teléfono" class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white"/>

                <label class="font-semibold text-sm text-white ">Fecha de Nacimiento</label>

                <input type="date"class="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-slate-500 simbol" />
                
                <select class="border rounded-lg py-3 px-3 mt-1 bg-black border-indigo-600 placeholder-white-500 text-slate-500">
                    <option value="value1" disabled selected>Marca del Vehículo</option>
                    <option value="Audi" class="text-white">Audi</option>
                    <option value="BMW" class="text-white">BMW</option>
                    <option value="Chevrolet" class="text-white">Chevrolet</option>
                    <option value="Citroen" class="text-white">Citroën</option>
                    <option value="Fiat" class="text-white">Fiat</option>
                    <option value="Ford" class="text-white">Ford</option>
                    <option value="Honda" class="text-white">Honda</option>
                    <option value="Hyundai" class="text-white">Hyundai</option>
                    <option value="Jaguar" class="text-white">Jaguar</option>
                    <option value="Kia" class="text-white">Kia</option>
                    <option value="Mercedes-Benz" class="text-white">Mercedes-Benz</option>
                    <option value="Nissan" class="text-white">Nissan</option>
                    <option value="Peugeot" class="text-white">Peugeot</option>
                    <option value="Renault" class="text-white">Renault</option>
                    <option value="Toyota" class="text-white">Toyota</option>
                    <option value="Volkswagen" class="text-white">Volkswagen</option>
                    <option value="Otro" class="text-white">Otro</option>
                </select>
                

                <input type="text" placeholder="Modelo del Vehículo" class="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" />

                <select class="border rounded-lg py-3 px-3 mt-1 bg-black border-indigo-600 placeholder-white-50 text-slate-500">
                <option value="año" disabled selected class="text-blue-100" >Año</option>
                    <option value="2014" class="text-white">2014</option>
                    <option value="2015" class="text-white">2015</option>
                    <option value="2016" class="text-white">2016</option>
                    <option value="2017" class="text-white">2017</option>
                    <option value="2018" class="text-white">2018</option>
                    <option value="2019" class="text-white">2019</option>
                    <option value="2020" class="text-white">2020</option>
                    <option value="2021" class="text-white">2021</option>
                    <option value="2022" class="text-white">2022</option>
                    <option value="2023" class="text-white">2023</option>
                    <option value="2024" class="text-white">2024</option>   
                </select>

                <input type="text" placeholder="Localidad o Código Postal" class="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white"/>

                <button id="btn" class="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold md:hover:bg-slate-400 md:hover:text-black" >Solicitar Cotización</button>
            </form>
        </div>
    )
}

export default FormAuto



