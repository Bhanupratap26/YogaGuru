export const SocialIconCard = ({ icon, link, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="Social-Icon-Card"
      aria-label={label}
    >
      <img src={icon} alt={label} />
    </a>
  );
};
