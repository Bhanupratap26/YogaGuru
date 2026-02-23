import { SocialIconCard } from "./SocialIconCard";

export const PersonSocialBlock = ({ name, socials }) => {
  return (
    <div className="Person-Social">
      <h3 className="Person-name">{name}</h3>

      <div className="Social-row">
        {socials.map((social, index) => (
          <SocialIconCard key={index} {...social} />
        ))}
      </div>
    </div>
  );
};
