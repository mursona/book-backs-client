import React from 'react';
import { Button } from "@material-tailwind/react";
const PrimaryButton = ({ children, classes}) => {
    return (
        <div>
            <Button variant="gradient" color="pink" size="sm" className={` ${classes}`}>
            {children}
            </Button>
        </div>
    );
};

export default PrimaryButton;