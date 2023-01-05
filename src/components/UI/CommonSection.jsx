import React from "react";
import { Container } from "reactstrap";
import "../../style/components/UI/CommonSection.scss";

const CommonSection = ({title}) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
