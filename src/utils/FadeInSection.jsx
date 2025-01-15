import { useState, useEffect, useRef } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-900 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
