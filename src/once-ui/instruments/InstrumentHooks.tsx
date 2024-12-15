import { useState } from 'react';

export const useDrumPatterns = () => {

    const [kickPattern, setKickPattern] = useState([
            true, false, false, false, false, true, false, false,
            true, false, false, false, false, true, false, false,
        ]);
    
        const [snarePattern, setSnarePattern] = useState([
            false, false, true, false, false, false, true, false,
            false, false, true, false, false, false, true, false,
        ]);
    
        const [hihatPattern, setHihatPattern] = useState([
            false, true, false, true, false, true, false, true,
            false, true, false, true, false, true, false, true
    
        ]);
    
        const [tomsPattern, setTomsPattern] = useState([
            false, false, false, false, false, false, false, false,
            true, false, false, false, false, false, false, true,
        ]);
    
        const [pianoPattern, setPianoPattern] = useState([
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
            true, false, false, false,
        ]);
    


    return {
        kickPattern, setKickPattern,
        snarePattern, setSnarePattern,
        hihatPattern, setHihatPattern,
        tomsPattern, setTomsPattern,
        pianoPattern, setPianoPattern
      };
}