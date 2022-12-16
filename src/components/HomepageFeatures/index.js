import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: "API",
    Svg: require("@site/static/img/dashboard.svg").default,
    description: (
      <>
        <Translate>
          Learn about the API that we have created at Green Cloud.
        </Translate>
      </>
    ),
  },
  {
    title: "The CLI",
    Svg: require("@site/static/img/home.svg").default,
    description: (
      <>
        <Translate>
          We created a powerful command line tool that allows you to control all
          of your Green Cloud assets. Its fully documentated on this site and
          its the fastest way to get started with Green Cloud!
        </Translate>
      </>
    ),
  },
  {
    title: "Guide",
    Svg: require("@site/static/img/account.svg").default,
    description: (
      <>
        <Translate>
        Green Cloud is a new way to perform serverless compute with the least
        amount of Carbon. As such this section is full of useful topics that
        will help you get the best out of your Green Cloud account!
        </Translate>
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
        <h3>{title}</h3>
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
