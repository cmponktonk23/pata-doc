import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CustomImage from '@site/src/components/CustomImage';

const FeatureList = [
  {
    title: 'Room Building Starter Kit',
    src: '/img/rbsklogo.png',
    description: (
      <>
        The Room Building Starter Kit is a professional-grade solution engineered specifically
        for indoor tycoon game development.
      </>
    ),
  },
  {
    title: 'Card Game Interact UI',
    src: '/img/card.png',
    description: (
      <>
        Card Game Interact UI provides everything needed to create professional-grade
        card game animations and interactions.
      </>
    ),
  },
  {
    title: 'Dynamic Pixel Cloud',
    src: '/img/cloudlogo.jpg',
    description: (
      <>
        Dynamic Pixel Cloud delivers high-performance,
        customizable 3D pixel clouds for your game environments.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <CustomImage src={src} alt="Pata Assistant" className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
