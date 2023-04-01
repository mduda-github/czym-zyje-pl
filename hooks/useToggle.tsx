import * as React from 'react';

export const useToggle = (isOnInitValue: boolean): [boolean, () => void] => {
    const [isOn, setIsOn] = React.useState(isOnInitValue);

    const toggler = () => { 
        setIsOn(!isOn) 
    };

    return [isOn, toggler]
};