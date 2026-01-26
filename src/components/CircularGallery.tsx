import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';
import "./CircularGallery.css";  // Sin asignar a variable

// Aquí va todo el código JS de ReactBits que me diste (desde "function debounce" hasta "export default function CircularGallery")

// ... (Pega el código completo aquí, incluyendo las clases App, Media, Title, etc.)

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.05
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const app = new App(containerRef.current, { items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase });
    return () => {
      app.destroy();
    };
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
  return <div className="circular-gallery" ref={containerRef} />;
}
