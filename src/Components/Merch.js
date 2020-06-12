import React from 'react'

function Merch(props) {
    return(
        <div className='merch-container'>
            Merch
            <div className='products-container'>
                <div className='product'>
                    <img/>
                    <div className='product-info'>
                        <h2 id='product-name'>Product Name</h2>
                        <p id='product-price'>$50</p>
                    </div>
                </div>
            </div>
            <img 
                className='back-arrow'
                height='20px'
                src={'https://w0.pngwave.com/png/548/321/computer-icons-arrow-symbol-arrow-png-clip-art-thumbnail.png'}
                onClick={() => props.history.goBack()}>
            </img>
            <img 
                className='next-arrow'
                height='20px'
                src={'https://w0.pngwave.com/png/806/754/arrow-symbol-direction-position-or-indication-sign-stencil-arrow-png-clip-art.png'}
                onClick={() => props.history.push('/merch')}>
            </img>
        </div>
    )
}

export default Merch