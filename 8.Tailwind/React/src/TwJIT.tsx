import React from 'react';

export const TwJIT:React.FC = () => {
    const gradientColor:string = 'bg-amber-';
    const gradientColorNumber:number = 500;
    const resultStyle = `${gradientColor + gradientColorNumber}`
    return (
        <>
        <div className='prose'>
            <h2 className={resultStyle}>Тест Tailwind</h2>
            <p className='bg-amber-700'>Тестовый параграф</p>
        </div>
        </>
    )
}

export default TwJIT;