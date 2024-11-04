import React from 'react';
import { useParams } from 'react-router-dom';

const GadgetDetail = () => {
    const {product_id} = useParams();
    
    return (
        <div>
            details
        </div>
    );
};

export default GadgetDetail;