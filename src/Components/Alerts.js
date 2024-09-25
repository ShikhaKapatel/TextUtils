import React from 'react'

export default function Alerts(props) {
    //to capitalize the first char of the bootstap class wgich is coming from the prop-type
    const capitaliz=(word)=>{
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
        <div style={{height:'50px'}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitaliz(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
        </div>
  )
}
