import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useState } from "react";
import projects from "../../../public/data/projects/projects";
import filterCategories from "../../../public/data/projects/filterCategories";
import FilterBtn from "@/components/FilterBtn/FilterBtn";

const Portfolio = () => {
  const [filterType, setFilterType] = useState("Усі");
  return (
    <>
      {/* <!-- Projects section --> */}
      <section className="product section">
        <div className="container">
          <h1 className="visually-hidden">Проєкти</h1>
          <ul className="categories">
            {filterCategories.map((category, index) => (
              <FilterBtn
                key={index}
                {...category}
                setFilter={setFilterType}
                actualFilter={filterType}
              />
            ))}
          </ul>
          {/* <!-- Products --> */}
          {projects ? (
            <ul className="product__list">
              {projects
                .filter((project) => {
                  if (filterType === "Усі") return project;

                  return project.type === filterType;
                })
                .map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
            </ul>
          ) : (
            <h2>Вибачте, ведуться технічні роботи</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
