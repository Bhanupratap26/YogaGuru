import { PersonSocialBlock } from "./PersonSocialBlock";

export const SocialMediaSection = () => {
  const sirSocials = [
    {
      icon: "/assests/Social/youtube.png",
      link: "https://www.youtube.com",
      label: "Sir YouTube",
    },
    {
      icon: "/assests/Social/instagram.webp",
      link: "https://www.instagram.com",
      label: "Sir Instagram",
    },
    {
      icon: "/assests/Social/facebook.webp",
      link: "https://www.facebook.com",
      label: "Sir Facebook",
    },
    {
      icon: "/assests/Social/linkedin.webp",
      link: "https://www.linkedin.com",
      label: "Sir LinkedIn",
    },
  ];

  const mamSocials = [
    {
      icon: "/assests/Social/youtube.png",
      link: "https://www.youtube.com",
      label: "Mam YouTube",
    },
    {
      icon: "/assests/Social/instagram.webp",
      link: "https://www.instagram.com",
      label: "Mam Instagram",
    },
    {
      icon: "/assests/Social/facebook.webp",
      link: "https://www.facebook.com",
      label: "Mam Facebook",
    },
    {
      icon: "/assests/Social/linkedin.webp",
      link: "https://www.linkedin.com",
      label: "Mam LinkedIn",
    },
  ];

  return (
    <section className="SocialMedia-Section">
      <h2 className="section-title">Connect With Us</h2>

      <div className="Social-container">
        <PersonSocialBlock name="Dr. Mohan Karki" socials={sirSocials} />
        <PersonSocialBlock name="Dr Neha Karki" socials={mamSocials} />
      </div>
    </section>
  );
};
