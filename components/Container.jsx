import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='w-[1200px] m-auto'>
            {children}
        </div>
    )
}

export default Container