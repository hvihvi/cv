import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hugo Vinet</h1>
      <h2>Développeur senior full stack</h2>
      <hr />
      <h3>Expérience</h3>
      <p>
        7 ans chez <em>LesFurets.com</em>
        <h4>2013</h4>
        <ul>
          <li>
            Expansion du panel de partenaires (Java 8, REST, SOAP, Kanban...)
          </li>
          <li>
            Automatisation des mises en production et de l'intégration continue
            (Node, bash, Git, Go...)
          </li>
        </ul>
        <h4>2016</h4>
        Lead d'une équipe de 3 développeurs chargée d'intégrer de nouveaux
        partenaires
        <ul>
          <li>Animation des rituels Kaizen journalier</li>
          <li>Onboarding de développeurs externes</li>
          <li>Prospection en binôme avec commercial</li>
          <li>Livraison en flux tendu, expérimentation de process Lean</li>
        </ul>
        <h4>2017</h4>
        <ul>
          <li>Création d'un dashboard partenaire (React/Redux, Kotlin)</li>
          <li>Animation de Katas et d'ateliers autour de React</li>
        </ul>
        <h4>2018</h4>
        Développements full stack (React, Java 8...) sur les nouveaux produits
        <ul>
          <li>Onboarding de nouveaux développeurs</li>
          <li>Cadrage technique de l'internalisation du produit énergie</li>
        </ul>
        <h4>2019</h4>
        Refonte des pages de résultats (React/Redux, scrum...)
        <ul>
          <li>Architecture du code</li>
          <li>Mise en place d'un design-system</li>
          <li>Travaux de webperf (code-splitting)</li>
        </ul>
        Animation de la communauté front
        <ul>
          <li>Présentation à l'équipe des sujets et nouveautés</li>
        </ul>
      </p>
      <hr />
      <h3>Compétences</h3>
      <ul>
        <li>
          <span style={{ color: "orange" }}>&#9733;&#9733;&#9733;</span>{" "}
          Javascript ES2020, Typescript, React, Redux, Jest, HTML/CSS, Git, Java
          8, Webpack, Kanban
        </li>
        <li>
          <span style={{ color: "orange" }}>&#9733;&#9733;&#9734;</span> Node,
          Go, Kotlin, bash, Docker, SQL, Lean/Kaizen, Scrum
        </li>
      </ul>
    </div>
  );
}
