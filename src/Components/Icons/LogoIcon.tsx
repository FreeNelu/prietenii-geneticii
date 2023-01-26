import React from 'react';

interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

export const LogoIcon: React.FC<IconProps> = ({ className, width, height }) => {
    const logo = `${process.env.PUBLIC_URL}/logo192.png`;

    return (
        <img className={className} src={logo} alt='Logo' style={{ width: width, height: height }} />
    );
}

export default LogoIcon;