import React, { useState, useEffect, useRef } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "Office & Chaos",
    caption: "Visual collage, abstraction study",
    image: "/images/office-chaos.png",
    description: "This project explores a visual collage created by combining the concepts of office and chaos through abstraction. In the poster, I aimed to create a chaotic office environment. I sourced various images to establish a general office setting, while deliberately using different scales for people and details. Absurd expressions and contrasting colors were employed to emphasize the sense of chaos. In particular, the use of red and metal mesh-textured fabric was intended to create a harsher and more intense atmosphere.",
    year: "2024",
    medium: "Digital collage",
    size: "large"
  },
  {
    id: 2,
    title: "The Platform",
    caption: "Film atmosphere interpretation",
    image: "/images/platform.png",
    description: "This project presents a collage interpreting a film's atmosphere and interior architectural elements through abstraction. I chose The Platform as the film reference. To convey its atmosphere and spatial conditions, I abstracted the dark, concrete prison-like room where most of the film takes place. The floor levels were connected to the central platform, using grey tones to emphasize oppression and red tones toward the lower levels to represent increasing brutality. At the bottom, an insatiable mouth and head consuming everything were placed, while at the top, chefs and workers serving the system were positioned. The film's narrative was expressed through this vertical hierarchy, showing the growing violence and insatiability as one descends.",
    year: "2024",
    medium: "Digital collage, film analysis",
    size: "tall"
  },
  {
    id: 3,
    title: "Morico Café Moodboard",
    caption: "Interior atmosphere study",
    image: "/images/morico-moodboard.png",
    description: "This project focuses on designing a menu and moodboard for a selected café, restaurant, or bar. I selected Morico Café as the venue and aimed to reflect the atmosphere created by its materials, furniture, and decorative elements. A color palette was developed as the base of the design, and one of the café's key features—the green curved staircase—was integrated into the menu. The sense of curvature was further carried into the graphic details to maintain visual continuity.",
    year: "2024",
    medium: "Moodboard, graphic design",
    size: "medium"
  },
  {
    id: 4,
    title: "Morico Café Menu",
    caption: "Menu design system",
    image: "/images/morico-menu.png",
    description: "This project focuses on designing a menu and moodboard for a selected café, restaurant, or bar. I selected Morico Café as the venue and aimed to reflect the atmosphere created by its materials, furniture, and decorative elements. A color palette was developed as the base of the design, and one of the café's key features—the green curved staircase—was integrated into the menu. The sense of curvature was further carried into the graphic details to maintain visual continuity.",
    year: "2024",
    medium: "Menu design, typography",
    size: "medium"
  },
  {
    id: 5,
    title: "Punkraft Bar Menu",
    caption: "Food & beverage venue design",
    image: "/images/punkraft-menu.png",
    description: "This project involves designing a menu for a remotely studied food and beverage venue. I selected Punkraft Craft Beer Bar as the venue and focused on translating its key design and functional elements into the menu. Visual references from the bar area—particularly the lighting and the ceiling structure that also functions as a suspended element—were incorporated, along with the graffiti on the walls. Drawing inspiration from the vaulted ceiling, the menu's visual language was designed accordingly, aiming to capture the overall atmosphere of the space.",
    year: "2024",
    medium: "Menu design, visual identity",
    size: "small"
  },
  {
    id: 6,
    title: "Punkraft Bar Drinks",
    caption: "Beverage menu design",
    image: "/images/punkraft-drinks.png",
    description: "This project involves designing a menu for a remotely studied food and beverage venue. I selected Punkraft Craft Beer Bar as the venue and focused on translating its key design and functional elements into the menu. Visual references from the bar area—particularly the lighting and the ceiling structure that also functions as a suspended element—were incorporated, along with the graffiti on the walls. Drawing inspiration from the vaulted ceiling, the menu's visual language was designed accordingly, aiming to capture the overall atmosphere of the space.",
    year: "2024",
    medium: "Menu design, typography",
    size: "small"
  },
  {
    id: 7,
    title: "Punkraft Moodboard",
    caption: "Spatial analysis & materials",
    image: "/images/punkraft-moodboard.png",
    description: "This project focuses on a moodboard and schematic poster designed for a remotely studied food and beverage venue. I selected Punkraft Craft Beer Bar as the venue and created a moodboard reflecting the space through its visuals, furniture, wall treatments, decorative elements, and color palette. For the schematic poster, I developed diagrams that illustrate the functional characteristics of the venue, marking the functions of different areas on the plan.",
    year: "2024",
    medium: "Moodboard, material study",
    size: "large"
  },
  {
    id: 8,
    title: "Punkraft Spatial Diagrams",
    caption: "Zoning & circulation analysis",
    image: "/images/punkraft-diagrams.png",
    description: "This project focuses on a moodboard and schematic poster designed for a remotely studied food and beverage venue. I selected Punkraft Craft Beer Bar as the venue and created a moodboard reflecting the space through its visuals, furniture, wall treatments, decorative elements, and color palette. For the schematic poster, I developed diagrams that illustrate the functional characteristics of the venue, marking the functions of different areas on the plan.",
    year: "2024",
    medium: "Architectural diagrams, spatial analysis",
    size: "large"
  },
  {
    id: 9,
    title: "AI Rendering: Chair Design",
    caption: "Sketch to render workflow",
    image: "/images/ai-chair.png",
    description: "This project explores AI-generated renderings based on previous models and a furniture sketch, emphasizing effective prompt use. I used a furniture sketch I designed in Procreate and generated the render using ChatGPT. I wrote down the process of the programs that are included and the prompts that I use to achieve the desired result.",
    year: "2024",
    medium: "AI rendering, furniture design",
    size: "medium"
  },
  {
    id: 10,
    title: "AI Rendering: Guide Dogs Association",
    caption: "SketchUp to render workflow",
    image: "/images/ai-building.png",
    description: "This project explores AI-generated renderings based on previous models and a furniture sketch, emphasizing effective prompt use. I used a SketchUp model from a previous project and uploaded it to a re-rendering application, where I achieved the desired result by entering detailed prompts. The building is a project of the Guide Dogs Association featuring walnut wooden flooring, beige and yellow walls, with different shades of yellow as details throughout. The windows allow people walking with guide dogs to be visible, and screens on the walls show information about dogs and accessibility.",
    year: "2024",
    medium: "AI rendering, architectural visualization",
    size: "medium"
  }
];

// Custom cursor component
function CustomCursor({ isHovering }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: isHovering ? '80px' : '8px',
        height: isHovering ? '80px' : '8px',
        borderRadius: '50%',
        backgroundColor: isHovering ? 'transparent' : '#1A1A18',
        border: isHovering ? '1px solid #1A1A18' : 'none',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mixBlendMode: isHovering ? 'normal' : 'difference',
      }}
    >
      {isHovering && (
        <span style={{
          fontSize: '10px',
          fontFamily: "'Karla', sans-serif",
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#1A1A18',
        }}>
          View
        </span>
      )}
    </div>
  );
}

// Animated grid item with intersection observer
function GridItem({ item, index, onSelect, onHover }) {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sizeStyles = {
    large: { gridColumn: 'span 5' },
    medium: { gridColumn: 'span 4' },
    small: { gridColumn: 'span 3' },
    tall: { gridColumn: 'span 4' },
  };

  return (
    <div
      ref={itemRef}
      className="grid-item"
      style={{
        ...sizeStyles[item.size],
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`,
        cursor: 'none',
      }}
      onClick={() => onSelect(item)}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="image-container">
        <img
          src={item.image}
          alt={item.title}
          className="item-image"
          loading="lazy"
        />
        <div className="image-overlay" />
      </div>
      <div className="item-meta">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-caption">{item.caption}</p>
      </div>
    </div>
  );
}

// Modal component with enhanced animations
function Modal({ item, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 400);
  };

  return (
    <div
      className={`modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal-content">
        <button className="close-button" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-grid">
          <div className="modal-image-container">
            <div className={`image-loader ${imageLoaded ? 'loaded' : ''}`}>
              <div className="loader-bar" />
            </div>
            <img
              src={item.image}
              alt={item.title}
              className={`modal-image ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className="modal-text">
            <div className="modal-header">
              <span className="modal-index">№ {String(item.id).padStart(2, '0')}</span>
              <span className="modal-year">{item.year}</span>
            </div>
            
            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-medium">{item.medium}</p>
            
            <div className="modal-divider" />
            
            <p className="modal-description">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Karla:wght@300;400;500&display=swap');
        
        * {
          box-sizing: border-box;
          cursor: none;
        }
        
        a, button, .grid-item {
          cursor: none;
        }
        
        body {
          margin: 0;
          padding: 0;
          background: #FAFAF8;
          overflow-x: hidden;
        }
        
        .app {
          min-height: 100vh;
          background-color: #FAFAF8;
          font-family: 'Karla', sans-serif;
        }
        
        /* Progress bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #1A1A18 0%, #8B8680 100%);
          z-index: 1000;
          transition: width 0.1s ease-out;
        }
        
        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: rgba(250, 250, 248, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .header-inner {
          max-width: 1600px;
          margin: 0 auto;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1A1A18;
          margin: 0;
        }
        
        .nav {
          display: flex;
          gap: 40px;
        }
        
        .nav-item {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: 'uppercase;
          color: #888;
          cursor: none;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #1A1A18;
          transition: width 0.3s ease;
        }
        
        .nav-item:hover {
          color: #1A1A18;
        }
        
        .nav-item:hover::after {
          width: 100%;
        }
        
        /* Intro */
        .intro {
          max-width: 800px;
          margin: 0 auto;
          padding: 180px 48px 80px;
          text-align: center;
        }
        
        .intro-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #AAA;
          margin-bottom: 24px;
        }
        
        .intro-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 300;
          line-height: 1.7;
          color: #3A3A38;
          margin: 0;
        }
        
        /* Grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 32px;
          padding: 40px 48px 120px;
          max-width: 1600px;
          margin: 0 auto;
        }
        
        .grid-item {
          position: relative;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background-color: #E8E8E4;
        }
        
        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.05);
          transition: filter 0.6s ease, transform 0.6s ease;
        }
        
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(250, 250, 248, 0.1) 100%);
          pointer-events: none;
        }
        
        .grid-item:hover .item-image {
          filter: grayscale(40%) contrast(1.02);
          transform: scale(1.02);
        }
        
        .item-meta {
          padding: 20px 0 12px;
        }
        
        .item-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: #1A1A18;
          margin: 0 0 6px 0;
          letter-spacing: 0.01em;
          transition: color 0.3s ease;
        }
        
        .grid-item:hover .item-title {
          color: #4A4A48;
        }
        
        .item-caption {
          font-size: 11px;
          font-weight: 400;
          color: #999;
          margin: 0;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        
        /* Footer */
        .footer {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding: 40px 48px;
          background-color: #F5F5F3;
        }
        
        .footer-content {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-text {
          font-size: 11px;
          color: #999;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        
        .footer-links {
          display: flex;
          gap: 32px;
        }
        
        .footer-link {
          font-size: 11px;
          color: #999;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #1A1A18;
        }
        
        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(250, 250, 248, 0.97);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          overflow-y: auto;
          animation: overlayIn 0.4s ease forwards;
          cursor: none;
        }
        
        .modal-overlay.closing {
          animation: overlayOut 0.4s ease forwards;
        }
        
        @keyframes overlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes overlayOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        .modal-content {
          position: relative;
          width: 100%;
          max-width: 1300px;
          animation: modalIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        
        .modal-overlay.closing .modal-content {
          animation: modalOut 0.4s ease forwards;
        }
        
        @keyframes modalIn {
          from { 
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes modalOut {
          from { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
        }
        
        .close-button {
          position: absolute;
          top: -48px;
          right: 0;
          background: none;
          border: none;
          cursor: none;
          padding: 12px;
          color: #1A1A18;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .close-button:hover {
          opacity: 0.5;
          transform: rotate(90deg);
        }
        
        .modal-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: start;
        }
        
        .modal-image-container {
          position: relative;
          width: 100%;
          background-color: #E8E8E4;
          overflow: hidden;
        }
        
        .image-loader {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #E8E8E4;
          overflow: hidden;
          transition: opacity 0.3s ease;
        }
        
        .image-loader.loaded {
          opacity: 0;
        }
        
        .loader-bar {
          height: 100%;
          width: 30%;
          background-color: #1A1A18;
          animation: loading 1s ease-in-out infinite;
        }
        
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        
        .modal-image {
          width: 100%;
          height: auto;
          display: block;
          opacity: 0;
          transition: opacity 0.6s ease, filter 0.8s ease;
          filter: grayscale(100%);
        }
        
        .modal-image.loaded {
          opacity: 1;
          filter: none;
        }
        
        .modal-text {
          padding-top: 8px;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-index {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: #BBB;
          letter-spacing: 0.15em;
        }
        
        .modal-year {
          font-size: 11px;
          color: #999;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        
        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 400;
          color: #1A1A18;
          margin: 0 0 12px 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        
        .modal-medium {
          font-size: 12px;
          color: #888;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .modal-divider {
          width: 50px;
          height: 1px;
          background-color: #D4D4D0;
          margin: 36px 0;
        }
        
        .modal-description {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.9;
          color: #4A4A48;
          margin: 0;
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #D4D4D0;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #BBB;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .grid {
            grid-template-columns: repeat(8, 1fr);
            gap: 24px;
            padding: 40px 32px 100px;
          }
          
          .grid-item[style*="span 5"] { grid-column: span 4; }
          .grid-item[style*="span 4"] { grid-column: span 4; }
          .grid-item[style*="span 3"] { grid-column: span 4; }
          
          .modal-grid {
            gap: 48px;
          }
        }
        
        @media (max-width: 900px) {
          .header-inner {
            padding: 20px 24px;
          }
          
          .intro {
            padding: 140px 24px 60px;
          }
          
          .intro-text {
            font-size: 20px;
          }
          
          .grid {
            grid-template-columns: repeat(6, 1fr);
            padding: 24px 24px 80px;
          }
          
          .grid-item[style*="span 5"],
          .grid-item[style*="span 4"],
          .grid-item[style*="span 3"] { 
            grid-column: span 3; 
          }
          
          .modal-overlay {
            padding: 24px;
          }
          
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .modal-title {
            font-size: 32px;
          }
          
          .footer {
            padding: 32px 24px;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
        
        @media (max-width: 600px) {
          .nav {
            gap: 24px;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
          
          .grid-item[style*="span 5"],
          .grid-item[style*="span 4"],
          .grid-item[style*="span 3"] { 
            grid-column: span 1; 
          }
          
          * {
            cursor: auto;
          }
        }
      `}</style>

      <CustomCursor isHovering={isHovering} />
      
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <header className="header">
        <div className="header-inner">
          <h1 className="logo">Portfolio</h1>
          <nav className="nav">
            <span className="nav-item" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Works</span>
            <span className="nav-item" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>About</span>
            <span className="nav-item" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Contact</span>
          </nav>
        </div>
      </header>

      <section className="intro">
        <span className="intro-label">Interior Architecture Portfolio</span>
        <p className="intro-text">
          A collection of visual collages, spatial analyses, menu designs, and AI-rendered explorations. 
          Each project examines atmosphere, materiality, and the relationship between graphic design 
          and architectural space.
        </p>
      </section>

      <main className="grid">
        {portfolioItems.map((item, index) => (
          <GridItem
            key={item.id}
            item={item}
            index={index}
            onSelect={setSelectedItem}
            onHover={setIsHovering}
          />
        ))}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-text">© 2024 Portfolio</span>
          <div className="footer-links">
            <span className="footer-link">Instagram</span>
            <span className="footer-link">Email</span>
          </div>
        </div>
      </footer>

      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
