import React from 'react';

export default function Layout({ children }) {

  return (
        <div className="app-wrapper">
       <header></header>
       <main>
       {children}
       </main>
       <footer></footer>
       </div>
  );
};
