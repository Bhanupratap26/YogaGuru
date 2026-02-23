import { AcademicTrainingCard } from "./AcademicTrainingCard"
import { useState } from "react";

export const AcademicTrainingSection = () => {
    const Trainings = [
        {
            image: "/assests/Academic-Trainings-images/img1.jpeg",
            Name: "RYT200",
            price: "999",
        },
        {
            image: "/assests/Academic-Trainings-images/img1.jpeg",
            Name: "RYT500",
            price: "999",
        },
        {
            image: "/assests/Academic-Trainings-images/img1.jpeg",
            Name: "RYT1000",
            price: "999",
        },
        {
            image: "/assests/Academic-Trainings-images/img1.jpeg",
            Name: "Pregnancy",
            price: "999",
        },
        {
            image: "/assests/Academic-Trainings-images/img1.jpeg",
            Name: "Fertility Yoga",
            price: "999",
        },
    ];

    const[search,setSearch] = useState("");

    const filteredTrainings = Trainings.filter((training) => 
    training.Name.toLowerCase().includes(search.toLowerCase()));



  // ✨ Highlight matched text
  const highlightText = (text) => {
    if (!search) return text;

    const parts = text.split(new RegExp(`(${search})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

    return(
        <section className="Training-Section">
            {/* Header + Search */}
            <div className="training-header">
                <h2 className="section-title">Our Trainings</h2>

                <input
                 type="text"
                 placeholder="Search Book.."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 />
            </div>

            <div className="Training-row">
                {filteredTrainings.length > 0 ? (
                    filteredTrainings.map((training,index) => (
                        <AcademicTrainingCard
                        key={index}
                        {...training}
                        highlight={highlightText}
                        />
                    )
                )):
                (
                    <p>No Trining Found</p>
                )
                }
            </div>
        </section>

    )
}
