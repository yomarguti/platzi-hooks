import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col items-center pb-5 md:pb-3 bg-${theme}-100 text-${theme}-200`}>
      <h1 className="text-5xl font-bold py-4">React Hooks!!!</h1>
      <div className="flex flex-row">
        <button
          className="focus:outline-none border-2 border-gray-900 rounded-md px-4 py-2 mr-2 bg-gray-800 text-gray-50"
          onClick={() => setTheme('dark')}
        >
          Dark Mode
        </button>
        <button
          className="focus:outline-none border-2 border-gray-900 rounded-md px-4 py-2 bg-gray-300 text-gray-900"
          onClick={() => setTheme('light')}
        >
          Light Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
