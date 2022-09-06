import styles from "../../styles/single-project.module.scss";
import { projects } from "../../mock/data";
import { ProjectModel } from "../../types/index";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";
import Head from "next/head";

const SingleProject = (project: ProjectModel) => {
  return (
    <AnimatedSection className={styles.single__container}>
      <Head>
        <title>Stef Ammerlaan - Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
        <meta
          name="keywords"
          content="site, architecture, stef, ammerlaan, architecte, nîmes, gard, avignon, montpellier, construction, maison, bâtiment, permis de construire, chantier, projet, image, art, balcon, Nîmes"
        />
        <meta
          name="description"
          content="Chaque maison développée  chez Ammerlaan Stef Architecture démarre par la prise en compte d’un programme établi du Maitre d’Ouvrage (client).
          L’architecture proposée répond aux attentes escomptées ainsi que les contraintes du site."
        />
        <meta
          property="og:title"
          content="Stef Ammerlaan Architecture - Projets"
        />
        <meta
          property="og:description"
          content="Chaque maison développée  chez Ammerlaan Stef Architecture démarre par la prise en compte d’un programme établi du Maitre d’Ouvrage (client).
          L’architecture proposée répond aux attentes escomptées ainsi que les contraintes du site."
        />
      </Head>
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
