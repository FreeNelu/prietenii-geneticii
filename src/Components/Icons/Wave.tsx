import React from 'react';

interface WaveProps {
    className?: string;
}

export const WaveSvg: React.FC<WaveProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={className}>
            <path
                d="M0,320L48,304C96,288,192,256,288,256C384,256,480,288,576,293.3C672,299,768,277,864,272C960,267,1056,277,1152,245.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    );
}

export default WaveSvg;