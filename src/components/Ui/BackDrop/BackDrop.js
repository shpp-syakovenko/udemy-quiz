import React from 'react';
import '../../../scss/components/Ui/BackDrop/BackDrop.scss';

const BackDrop = props =>{
    return(
        <div onClick={props.onBackDrop} className="backDrop"/>
    )
};

export default BackDrop;