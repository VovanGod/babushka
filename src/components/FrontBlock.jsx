import React from 'react';

const FrontBlock = () => {
    return (
        <div className="front-block">
            <img src="./img/picture.jpeg" alt="picture" className='picture'/>
            <div className="inf">
                <h1>Бабушка свяжет</h1>
                <img src="./img/knitting.png" alt="knitting" className='knitting' />
                <div className="subtitle">Проект, направленный на реализацию изделий, созданных руками бабушек</div>
            </div>
        </div>
    );
};

export default FrontBlock;