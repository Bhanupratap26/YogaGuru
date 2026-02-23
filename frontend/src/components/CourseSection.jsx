import { CourseCard } from "./CourseCard";
import { useState } from "react";

export const CourseSection = () => {
    const courses = [
    {
      image: "/assests/course1.jpeg",
      Name: "Online Yoga Classes",
      price: "6568",
      
    },
    {
      image: "/assests/course2.jpg",
      Name: "Offline Yoga Classes",
      price: "3999",
      
    },
    {
      image: "/assests/course3.jpg",
      Name: "Fertility Yoga Classes",
      price: "2999",
      
    },
     {
      image: "/assests/course4.jpg",
      Name: "Kids Yoga Classes",
      price: "4999",
      
    },
    {
      image: "/assests/course5.jpg",
      Name: "Pregnancy Yoga Classes",
      price: "3999",
      
    },
    ];

    const[search,setSearch] = useState("");

    // 🔍 Filter products
  const filteredCourses = courses.filter((course) =>
    course.Name.toLowerCase().includes(search.toLowerCase())
  );

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
        <section className="course-section">
            {/* Header + Search */}
            <div className="course-header">
                <h2 className="section-title">Our Programs</h2>

                <input
                 type="text"
                 placeholder="Search Program..."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 />
            </div>

            <div className="course-row">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course,index) => (
                        <CourseCard
                        key={index}
                        {...course}
                        highlight={highlightText}
                        />
                    )
                )):
                (
                    <p>No Product Found</p>
                )
                }
            </div>
        </section>
    )
}