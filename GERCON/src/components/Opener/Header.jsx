import "./Header.css";
import { useEffect, useRef } from "react";
import atosAmplifyLogo from "../../ressources/Logo_Atos_Amplify_Coul_CMJN_page-0001.jpg";

function Header({ onMenuClick }) {
  const claimRef = useRef(null);
  const trackRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const trackElement = trackRef.current;
    const claimElement = claimRef.current;

    if (!trackElement || !claimElement) {
      return undefined;
    }

    const firstTextElement = trackElement.querySelector(".opener-header__claim-text");
    if (!firstTextElement) {
      return undefined;
    }

    const claimGap = parseFloat(window.getComputedStyle(trackElement).columnGap || "0");
    const cycleWidth = firstTextElement.getBoundingClientRect().width + claimGap;

    let animationFrameId = 0;
    let lastTimestamp = performance.now();
    let offset = 0;
    let speed = 56; // px/s
    const baseSpeed = 56;

    const animate = (timestamp) => {
      const deltaSeconds = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const targetSpeed = hoverRef.current ? 0 : baseSpeed;
      speed += (targetSpeed - speed) * Math.min(1, deltaSeconds * 4);
      offset += speed * deltaSeconds;

      if (offset >= cycleWidth) {
        offset -= cycleWidth;
      }

      trackElement.style.transform = `translateX(${-offset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header className="opener-header">
      <img src={atosAmplifyLogo} alt="Atos Amplify Logo" className="opener-header__logo" />
      <div
        ref={claimRef}
        className="opener-header__claim"
        aria-label="Driving Business transforamtion and digital innovation for more than 15 years"
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
      >
        <div ref={trackRef} className="opener-header__claim-track">
          <span className="opener-header__claim-text">
            Driving Business transforamtion and digital innovation for more than 15 years
            <span className="material-symbols-outlined opener-header__claim-icon">radio_button_unchecked</span>
          </span>
          <span className="opener-header__claim-text">
            Driving Business transforamtion and digital innovation for more than 15 years
            <span className="material-symbols-outlined opener-header__claim-icon">radio_button_unchecked</span>
          </span>
        </div>
      </div>
      <button type="button" className="opener-header__right" onClick={onMenuClick}>
        <span className="material-symbols-outlined opener-header__icon">add_2</span>
        <span className="opener-header__menu">MENU</span>
      </button>
    </header>
  );
}

export default Header;
