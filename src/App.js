import React from "react";

export default function MainApp () {

    const [formData, setFormData] = React.useState({
        nameInput: ""
    })

    const [olArray, setOlArray] = React.useState([])

    function handleChange (e) {
        // console.log(formData.nameInput)
        const {name, value} = e.target
        setFormData(old => {
            return{
                ...old, 
                [name]: value
            }
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        // console.log(olArray)
        const {name} = e.target
        
        setOlArray(old => [...old, [formData.nameInput]])

        setFormData(old => {
            return{
                ...old,
                [name]: ""
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                type="text"
                placeholder="Names" 
                name="nameInput" 
                value={formData.nameInput.value}
                onChange={handleChange}>
                </input>

                <button>apple</button>
            </form>
            <h1>{formData.nameInput}</h1>
            <ol>{olArray}</ol>
        </div>
    )
}