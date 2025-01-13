import React from 'react'

function SmallCards({title, type}) {
  return (
    <>
        <div className={`small-cards-continer ${type}`}>
            <h2 className="small-card-title">{title}</h2>
        </div>
    </>
  )
}

export default SmallCards