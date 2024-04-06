import React from 'react'

type FormType = {
    isCommanding: boolean;

}
const Form: React.FC<FormType> = ({ isCommanding }) => {
    return (
        <div style={{
            transition: ".3s",
            overflow: "hidden",
            width: isCommanding ? "0px" : "100%",
        }}>
            <form action="" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <label htmlFor="">Enter something</label>
                <input type="text" />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;