import React from 'react';

const LoadingBar: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-0.5 z-100 overflow-hidden bg-transparent">
            <div className="h-full bg-[#C6A75E] animate-loading-bar-progress shadow-[0_0_10px_rgba(198,167,94,0.5)]"></div>
        </div>
    );
};

export default LoadingBar;
