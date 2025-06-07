import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lower;
        if (lower === "danger") return "Error";
        lower = word.toLowerCase();
        lower = lower.charAt(0).toUpperCase() + lower.slice(1);

        return lower
    }

    return (
        <>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
                
            </div>}
        </>
    )

}