import styles from "../../styles/single-project.module.scss";
import { projects } from "../../mock/data";
import { useEffect, useState } from "react";
import { ProjectModel } from "../../types/index";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";
import { useRouter } from "next/router";

const SingleProject = (project: ProjectModel) => {
  return (
    <AnimatedSection className={styles.single__container}>
      <div className={styles.single__container__top}>
        <h1 className={styles.single__container__top__title}>
          {project.title}
        </h1>
        {project.description?.map((item) => (
          <p
            className={styles.single__container__top__description}
            key={item.lan}
          >
            {item.content}
          </p>
        ))}
      </div>
      <div className={styles.single__container__bottom}>
        <Slider images={project.images} />
      </div>
      <Footer />
    </AnimatedSection>
  );
};

export const getStaticPaths = async () => {
  const services = [...projects];
  const paths = services.map((item) => ({
    params: { id: item.id },
  }));
  return {
    paths: [...paths],
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const project = projects.filter((item) => item.id === id)[0] ?? null;

  console.log(project);

  if (!project)
    return {
      props: {},
    };
  return {
    props: { ...project },
  };
};

export default SingleProject;
