import "./formAuto.css"
import emailjs from '@emailjs/browser';

const FormAuto = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_p6sbqmo", "template_tzgzdwt", e.target, "r9UZREt8sORkURZW_").then(res=>{
            alert("Mensaje enviado correctamente")
            e.target.reset()
        })
    }


    return (
        <div className="bg-black flex flex-col w-full border border-gray-900 rounded-lg px-8 py-10">

            <form  onSubmit={sendEmail} className="flex flex-col justify-center gap-3">

                <input type="text" placeholder="Nombre y Apellido" className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" name="nombre"/>

                <input type="email" placeholder="Email" className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" name="email"/>

                <input type="number"  placeholder="Teléfono" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" name="telefono"/>

                <label className="font-semibold text-sm text-white " >Fecha de Nacimiento</label>

                <input type="date"className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-slate-500 simbol" name="nacimiento" />
                
                <select className="border rounded-lg py-3 px-3 mt-1 bg-black border-indigo-600 placeholder-white-500 text-slate-500" defaultValue={'value1'} name="marca">
                    <option value="value1" disabled >Marca del Vehículo</option>
                    <option value="Audi" className="text-white">Audi</option>
                    <option value="BMW" className="text-white">BMW</option>
                    <option value="Chevrolet" className="text-white">Chevrolet</option>
                    <option value="Citroen" className="text-white">Citroën</option>
                    <option value="Fiat" className="text-white">Fiat</option>
                    <option value="Ford" className="text-white">Ford</option>
                    <option value="Honda" className="text-white">Honda</option>
                    <option value="Hyundai" className="text-white">Hyundai</option>
                    <option value="Jaguar" className="text-white">Jaguar</option>
                    <option value="Kia" className="text-white">Kia</option>
                    <option value="Mercedes-Benz" className="text-white">Mercedes-Benz</option>
                    <option value="Nissan" className="text-white">Nissan</option>
                    <option value="Peugeot" className="text-white">Peugeot</option>
                    <option value="Renault" className="text-white">Renault</option>
                    <option value="Toyota" className="text-white">Toyota</option>
                    <option value="Volkswagen" className="text-white">Volkswagen</option>
                    <option value="Otro" className="text-white">Otro</option>
                </select>
                

                <input type="text" placeholder="Modelo del Vehículo" className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" name="modelo" />

                <select className="border rounded-lg py-3 px-3 mt-1 bg-black border-indigo-600 placeholder-white-50 text-slate-500" defaultValue={'año'} name="año">
                <option value="año" disabled  className="text-blue-100" >Año</option>
                    <option value="2014" className="text-white">2014</option>
                    <option value="2015" className="text-white">2015</option>
                    <option value="2016" className="text-white">2016</option>
                    <option value="2017" className="text-white">2017</option>
                    <option value="2018" className="text-white">2018</option>
                    <option value="2019" className="text-white">2019</option>
                    <option value="2020" className="text-white">2020</option>
                    <option value="2021" className="text-white">2021</option>
                    <option value="2022" className="text-white">2022</option>
                    <option value="2023" className="text-white">2023</option>
                    <option value="2024" className="text-white">2024</option>   
                </select>

                <input type="text" placeholder="Localidad o Código Postal" className="border rounded-lg py-3 px-3  bg-black border-indigo-600 placeholder-white-500 text-white" name="ubicacion"/>

                <button id="btn" className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold duration-500 md:hover:bg-slate-400 md:hover:text-black" >Solicitar Cotización</button>
            </form>
        </div>
    )
}

export default FormAuto



