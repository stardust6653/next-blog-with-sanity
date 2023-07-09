import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 flex justify-center mt-10">
      Copyright&copy; {new Date().getFullYear()}.soyepark.All rights reserved.
    </footer>
  );
};

export default Footer;
