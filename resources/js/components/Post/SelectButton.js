import React from 'react';

const SelectButton = props => {
    return (
        <div>
            {props.select ? (
                <button onClick={() => props.handleSelectButton()}>전체글보기</button>
            ) : (
                <button onClick={() => props.handleSelectButton()}>내것만보기</button>
            )}
        </div>
    );
};

export default SelectButton;
