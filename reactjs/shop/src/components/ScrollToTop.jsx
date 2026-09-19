import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      className="scroll-top"
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}
      aria-label="Scroll to top"
    >
      <i className="lni lni-chevron-up"></i>
    </a>
  );
}

export default ScrollToTop;
