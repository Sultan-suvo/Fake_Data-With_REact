import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../fakeDb/FakeDb';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])
    const total = getTotal(cosmetics)
    return (
        <div>
            <p>Money Neededd : {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key = {cosmetic.id}
                    cosmetic = {cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;