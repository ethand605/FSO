import React from 'react'

const Filter = ({value, onChange}) => {
    return <form>
    <div>filter shown with<input value={value} onChange={onChange}></input></div>
    </form>
}

export default Filter