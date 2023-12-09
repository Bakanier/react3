import React from 'react';

const ParentComponent = (props) => {
  return (
    <div>
      <h2>Родительский компонент</h2>
      <p>Родительский компонент можно переиспользовать, тк. не зависит от конкретных дочерних компонентов</p>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default ParentComponent;