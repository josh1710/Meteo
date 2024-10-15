"use client";

// app/components/Header.js
import React from 'react';

const Header = ({ onSearch, searchQuery, setSearchQuery }) => {
  return (
    <header>
      <div className="logo">Météo France</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher une ville..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={onSearch}>
          Rechercher
        </button>
      </div>
    </header>
  );
};

export default Header;

