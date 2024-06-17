import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function Show_Alert(message,icon,foco) {
    onFocus(foco)
    const mySwal = withReactContent(Swal);
    mySwal.fire({
        title:message,
        icon:icon
    });
}

function onFocus(foco){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }
}
