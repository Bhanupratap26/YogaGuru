export const CentreCard = ({ image, CentreName, isNearest }) => {
  return (
    <div className="Centre-Card">
      <img src={image} alt="Centre Location" />

      <div className="centre-info">
        <p className="Centre-name">{CentreName}</p>

        {isNearest && (
          <span className="nearest-badge">Nearest</span>
        )}
      </div>
    </div>
  );
};
