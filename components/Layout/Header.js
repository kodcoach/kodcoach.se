import React from 'react';

const Header = () => {
 
  return (
    <header>
        <div className="flex justify-between md:flex-row items-center p-5 bg-gray-300">
            <nav>
                Navigation 1
            </nav>
            <div>
                Logotyp
            </div>
            <nav>
                Navigation 2
            </nav>
        </div>
    </header>
  );
};

export default Header;