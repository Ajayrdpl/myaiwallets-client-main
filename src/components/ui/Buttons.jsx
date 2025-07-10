/* eslint-disable react/prop-types */
export const ButtonLinear = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="ButtonLinear">
      {name}
    </button>
  );
};

/* eslint-disable react/prop-types */
export const Button1 = ({ className, name, dataAos, onClick }) => {
  return (
    <button
      onClick={onClick}
      data-aos={dataAos}
      className={`Button1 ss-button2 ${className}`}
    >
      {name}
    </button>
  );
};
export const ButtonGlow = ({ className, name, dataAos, onClick }) => {
  return (
    <button
      onClick={onClick}
      data-aos={dataAos}
      className={`ss-glowBTN ButtonGlow ${className}`}
    >
      {name}
    </button>
  );
};
export const Button2 = ({ className, name, dataAos, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      data-aos={dataAos}
      disabled={disabled}
      className={`Button2 ${className}`}
    >
      {name}
    </button>
  );
};
export const Button5 = ({ className, name, dataAos, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      data-aos={dataAos}
      className={`Button5 ${className}`}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export const ToggleButton = ({ className, dataAos, onClick }) => {
  return (
    <div
      data-aos={dataAos}
      onClick={onClick}
      className={`ToggleButton ${className}`}
    >
      <input type="checkbox" />
    </div>
  );
};
