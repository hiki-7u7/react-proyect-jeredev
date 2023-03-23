import '../App.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contáctame</h2>
            <form method="POST" target="_blank">

                <div className='clearfix'></div>

                <label htmlFor="name">Nombre :</label>
                <input type="text" id="name" className='form-control' placeholder="ej: gero" required />
            
                <label htmlFor="project">Tipo de proyecto :</label>
                <input type="text" id="project" className='form-control' placeholder="ej: Formulario Interactivo" required />

                <label htmlFor="contact">Email :</label>
                <input type="mail" id="mail" className='form-control' 
                placeholder="ej: gero...@.com" required />

                <label htmlFor="number">Teléfono :</label>
                <input type="number" id="number" className='form-control'
                placeholder="ej: 655 12 .. .." required />

                <button className='btn btn-info' type="submit">Solicitar</button>
            </form>
        </div>
    );
}

export default Contact