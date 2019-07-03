import React, { createRef, useEffect } from 'react';
import './index.scss';

const Skills = () => {
  const techCardsContainerRef = createRef();
  const techCardRefs = Array.from({ length: techList.length }, () =>
    createRef(),
  );
  const langCardsContainerRef = createRef();
  const langCardRefs = Array.from({ length: programmingLangList.length }, () =>
    createRef(),
  );

  useEffect(() => {
    const techContainerObserver = new IntersectionObserver(showTechList, {
      threshold: 0.8,
    });
    const langContainerObserver = new IntersectionObserver(showLangList, {
      threshold: 0.8,
    });

    techContainerObserver.observe(techCardsContainerRef.current);
    langContainerObserver.observe(langCardsContainerRef.current);
  });

  function showTechList(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        techCardRefs.forEach((ref, index) => {
          setTimeout(() => {
            ref.current.classList.add('Skills-item--entered');
          }, 50 * index);
        });
        observer.unobserve(techCardsContainerRef.current);
      }
    });
  }

  function showLangList(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        langCardRefs.forEach((ref, index) => {
          setTimeout(() => {
            ref.current.classList.add('Skills-item--entered');
          }, 50 * index);
        });
        observer.unobserve(langCardsContainerRef.current);
      }
    });
  }

  return (
    <section className="Skills">
      <div className="Skills-background" />
      <div className="Skills-itemsContainer">
        <h1 className="Skills-title"> Skills / Technologies </h1>
        <h2 className="Skills-subTitle"> Technologies: </h2>
        <ul
          className="Skills-itemsList Skills-itemsList--tech"
          ref={techCardsContainerRef}>
          {techList.map((tech, index) => {
            return (
              <li className="Skills-item" ref={techCardRefs[index]}>
                <a target="_blank" href={tech.url}>
                  <img
                    className="Skills-itemImg"
                    src={require('../../assets/' + tech.imgUrl)}
                    alt={tech.imgUrl}
                  />
                  <h3 className="Skills-itemName">{tech.name}</h3>
                </a>
              </li>
            );
          })}
        </ul>
        <h2 className="Skills-subTitle"> Programming Languages: </h2>
        <ul
          className="Skills-itemsList Skills-itemsList--programming"
          ref={langCardsContainerRef}>
          {programmingLangList.map((lang, index) => {
            return (
              <li className="Skills-item" ref={langCardRefs[index]}>
                <a target="_blank" href={lang.url}>
                  <img
                    className="Skills-itemImg"
                    src={require('../../assets/' + lang.imgUrl)}
                    alt={lang.imgUrl}
                  />
                  <h3 className="Skills-itemName">{lang.name}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

const techList = [
  {
    name: 'React',
    imgUrl: 'react.svg',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    imgUrl: 'redux.svg',
    url: 'https://redux.js.org/',
  },
  {
    name: 'Node.js / Express',
    imgUrl: 'nodejs.svg',
    url: 'https://nodejs.org/en/about/',
  },
  {
    name: 'webpack 4',
    imgUrl: 'webpack.svg',
    url: 'https://webpack.js.org/',
  },
  {
    name: 'Git',
    imgUrl: 'git.svg',
    url: 'https://git-scm.com/',
  },
  {
    name: 'Jest',
    imgUrl: 'jest.svg',
    url: 'https://jestjs.io/',
  },
  {
    name: 'Enzyme',
    imgUrl: 'enzyme.svg',
    url: 'https://airbnb.io/enzyme/',
  },
];

const programmingLangList = [
  {
    name: 'HTML5',
    imgUrl: 'html.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
  },
  {
    name: 'CSS3',
    imgUrl: 'css.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    imgUrl: 'javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    imgUrl: 'typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Python',
    imgUrl: 'python.svg',
    url: 'https://www.python.org/',
  },
  {
    name: 'C++',
    imgUrl: 'cpp.svg',
    url: 'http://www.cplusplus.com/',
  },
  {
    name: 'Java',
    imgUrl: 'java.svg',
    url: 'http://www.oracle.com/technetwork/java/index-138747.html',
  },
];
