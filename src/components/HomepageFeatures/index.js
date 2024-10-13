import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Promesas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aprende cómo manejar operaciones asíncronas en JavaScript con Promesas y sus métodos asociados.
      </>
    ),
  },
  {
    title: 'Fetch API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Descubre cómo realizar solicitudes HTTP con la Fetch API y manejar respuestas de manera sencilla.
      </>
    ),
  },
  {
    title: 'Ejercicios',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Practica tus habilidades con una serie de ejercicios que cubren desde lo básico hasta niveles avanzados.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
        

      <h2>Objetivos de la Documentación</h2>
      <ul>
        <li>Entender los conceptos de Promesas y Fetch API.</li>
        <li>Aprender a utilizar estas herramientas a través de ejemplos prácticos.</li>
        <li>Proporcionar ejercicios y soluciones para reforzar el aprendizaje.</li>
      </ul>

      <h2>Índice de Contenidos</h2>
      <ul>
        <li><a href="/docs/promesas/introduccion">Promesas</a></li>
        <li><a href="/docs/fetch-api/introduccion">Fetch API</a></li>
        <li><a href="/docs/ejercicios">Ejercicios</a></li>
        <li><a href="/docs/soluciones">Soluciones</a></li>
        <li><a href="/docs/recursos">Recursos Adicionales</a></li>
      </ul>

     

     
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h2>Recursos Adicionales</h2>
      <ul className=''>
        <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">MDN Web Docs</a></li>
        <li><a href="https://javascript.info">JavaScript.info</a></li>
      </ul>
      </div>
    </section>
  );
}
