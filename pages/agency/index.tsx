import Footer from "../../components/Footer";
import styles from "../../styles/agency.module.scss";
import { ownerImg } from "../../mock/data";
import AnimatedSection from "../../components/AnimatedSection";
import Image from "next/image";
import cls from "classnames";

export default function Agency() {
  return (
    <AnimatedSection className={styles.agency}>
      <div className={styles.agency__wrapper}>
        <div className={styles.agency__wrapper__top}>
          <div className={styles.agency__wrapper__top__img}>
            <Image
              layout="fill"
              className=""
              src={ownerImg}
              alt="owner of the website, the architect stef ammerlaan"
            />
          </div>
        </div>
        <div className={styles.agency__wrapper__bottom}>
          <div
            className={cls(
              styles.agency__wrapper__bottom__text,
              styles["agency__wrapper__bottom__text--left"]
            )}
          >
            <p className={styles.agency__wrapper__bottom__text__sub}>
              De nationalité néerlandaise, Stef Ammerlaan est né et a grandi
              dans le sud de la France. Imprégné de ces deux cultures
              européennes, il a su développer un attrait et un double regard sur
              une langue universelle : l’architecture.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              Titulaire d’un MASTER de l’École Nationale Supérieure
              d’Architecture de Montpellier en 2017, c’est en Alsace que Stef
              Ammerlaan fait ses premières armes dans la Maitrise d’Oeuvre.
              Terre connue pour son avance dans les savoir-faire constructifs
              (bâtiments passifs / constructions bois), il se forge une base
              solide.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              Il finalise sa mise en situation dans un cabinet d’architecte de
              Nîmes dans lequel il se forme au chantier, aux marchés publics,
              ainsi qu’au BIM. Les connaissances acquises et les expériences
              vécues permettent à Stef Ammerlaan de soutenir son Habilitation à
              la Maitrise d’Oeuvre en son Nom Propre (H.M.O.N.P.) en 2021 et de
              s’inscrire à l’ordre des architectes.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              Ammerlaan Stef Architecture est créée le 24/01/2022,
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              L’architecture mise en place se veut conceptuelle, contemporaine
              et respectueuse du terroir. Implanté à Nîmes, Ammerlaan Stef
              Architecture connaît les enjeux et les contraintes du milieu
              méditerranéen d’aujourd’hui sur les constructions et les
              habitants.
            </p>
            Le défi relevé est de bâtir pour demain à l’aube de l’accélération
            du dérèglement climatique. Que ce soit dans le neuf et
            particulièrement dans la rénovation, une attention particulière est
            apportée sur la gestion de la ressource. Qu’il s’agisse des
            matériaux ou bien des éléments &quot;déjà là&quot;, ceux-ci seront
            mis au centre de la conception. La notion de fonctionnalité paraîtra
            logique et intuitive. L’articulation des espaces ne laissera aucun
            obstacle afin de permettre des traversées, des ambiances
            confortables.
          </div>
          <div
            className={cls(
              styles.agency__wrapper__bottom__text,
              styles["agency__wrapper__bottom__text--right"]
            )}
          >
            <p className={styles.agency__wrapper__bottom__text__default}>
              As a Dutch born and raised in south of France,
            </p>
            <p className={styles.agency__wrapper__bottom__text__default}>
              Stef Ammerlaan became imbued with those two cultures.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              He developed an interest in architecture, which is a universal
              language.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              After being graduated from Montpellier’s Architecture School
              (ENSAM) in 2017, Stef Ammerlaan made his firsts steps into
              professional architecture in Alsace nearby Germany and
              Switzerland. This French region is known for it’s advanced
              building engineering (passive houses / wood constructions). His
              skills in architecture rise to solid knowledge.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              Back to the South of France, he finished his professionalizing
              cursus in an architecture office located in Nîmes, in which he led
              constructions sites, competed for public offers and was initiated
              to BIM. These experiences allowed Stef Ammerlaan to complete his
              ability to practice architecture in his own name (H.M.O.N.P.) in
              2021 and to join the French architect’s order.
            </p>
            <p className={styles.agency__wrapper__bottom__text__sub}>
              Ammerlaan Stef Architecture is created the 24/01/2022,
              (dd/mm/yyyy)
            </p>
            <p className={styles.agency__wrapper__bottom__text__default}>
              The architectural style proposed is and always will be conceptual,
              contemporary and respectful of what may already exist. Located in
              Nîmes, Ammerlaan Stef Architecture knows the Mediterranean climate
              with its hazards and risks on buildings and people.
            </p>
            <p className={styles.agency__wrapper__bottom__text__default}>
              The challenge is to think the future while our world is changing.
              Whether the project is new or old, a specific attention will be
              applied on the resource.
            </p>
            <p className={styles.agency__wrapper__bottom__text__default}>
              Materials and element’s already in place will be in the center of
              the conception.
            </p>
            The application of functionality will bring logical and intuitive
            floor plans, the connections between spaces will be smooth and
            straight.
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedSection>
  );
}
