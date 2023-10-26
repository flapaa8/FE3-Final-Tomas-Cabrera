import { useState } from "react"
import styles from "../Form/form.module.css"

function Form(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    

        function handlerSubmit(e) {
            e.preventDefault()

            
            let hasSomeError = false
            if (name.length <= 3) {
                setErrorName('La longitud del nombre debe ser mayor a 3 caracteres')
                hasSomeError = true
            } else {
                setErrorName()
            }
                    
            if (email.length < 6) {
                hasSomeError = true
                setErrorEmail('Revisa bien el correo')
            } else {
                setErrorEmail()
            }

            if (hasSomeError) {
                return 
            }

       

        props.onSubmit({name: name, email: email})
        }  

            function handlerChangeName(e) {
                setName(e.target.value)
                
            }

            function handlerChangeEmail(e) {
                setEmail(e.target.value)
        
    }

    return (
        <>
            <form className={styles.father} onSubmit={handlerSubmit}>

                <label htmlFor="nombre">Ingrese su nombre</label>

                <input
                    className={styles.input} 
                    type="text" 
                    id="nombre" 
                    placeholder='Nombre' 
                    value={name} 
                    onChange={handlerChangeName}
                />

                {errorName ? <span className={styles.spanError}>{errorName}</span> : undefined}

                <label htmlFor="Email">Correo electrónico</label>

                <input 
                    className={styles.input}
                    type="text" 
                    id="email" 
                    placeholder='Correo electrónico' 
                    value={email} 
                    onChange={handlerChangeEmail}
                />

                {errorEmail ? <span className={styles.spanError}>{errorEmail}</span> : undefined}


                <button className={styles.buttonSubmit} type="submit">Enviar</button>
            </form>

                
        </>
    )
}

export default Form;