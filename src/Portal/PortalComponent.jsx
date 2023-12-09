import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const PortalComponent = () => {
  const [showPortal, setShowPortal] = useState(false)

  const handleClick = () => {
    setShowPortal(!showPortal)
  }

  const portalContainer = document.getElementById('portal-container')

  return (
    <div>
      <button onClick={handleClick}>
        {showPortal ? 'Скрыть портал' : 'Показать портал'}
      </button>
      {showPortal &&
        createPortal(
          <div className="portal-content">
            <p>может пригодится для уведомлении, или всплывающих диалоговых окон,а так же для всяких виджетов и тп.</p>
          </div>,
          portalContainer
        )}
    </div>
  );
};

export default PortalComponent;