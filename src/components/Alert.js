import React from 'react'

 function Alert(Props) {
  return (     
    Props.Alert &&    <div className={`alert alert-${Props.Alert.type} alert-dismissible fade show`} role="alert">
           {Props.Alert.type }:{Props.Alert.msg}
           
        </div>
     
  )
}
export default Alert;