import React from "react";

import Concept from "./Concept";

const ConceptList = (props) => {
  return (
    <ul id="concepts">
      {props.concepts.map((concept) =>
        <Concept
          image={concept.image}
          title={concept.title}
          description={concept.description}
        />
      )}
  </ul>

  );
};

export default ConceptList;
