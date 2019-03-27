import React from 'react';
import './General.css';

const general = (props) => {
    return (
        <div className='GeneralStyle'>
            <div style={{ margin: 20, fontSize: 20}}>Mehisivu</div>
            <div style={{ margin: 5 }}>
                <p>Tietoja leppävirran läheistölle asennetusta mehiläis-vaasta</p>
            </div>

        </div>
    )
}

export default general;