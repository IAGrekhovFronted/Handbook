import React from 'react';

interface DangerJITProps {
    content: string;
}

const DangerJIT: React.FC<DangerJITProps> = ({ content }) => {
    return (
        <>
        <br />
           <h1>Тест dangerouslySetInnerHTML</h1>
           <div dangerouslySetInnerHTML={{ __html: content ?? '' }}></div>
        </>
    );
};

export default DangerJIT;
