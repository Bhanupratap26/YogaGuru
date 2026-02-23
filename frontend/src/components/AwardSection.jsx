import { AwardsCard } from "./AwardsCard";

export const AwardSection = () => {
  const Awards = [
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    { image: "/assests/course2.jpg" },
    // add 20+ safely
  ];

  return (
    <section className="AwardSection">
      <h2 className="section-title">Awards and Achievement</h2>

      {/* SCROLL CONTAINER */}
      <div className="Award-scroll">
        <div className="Award-row">
          {Awards.map((award, index) => (
            <AwardsCard key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};
