import React, { useEffect, useState } from "react";

import { Container, FirstContainer } from "./style";
import FormTemplate from "../../form/FormTemplate";

function CreateTodo() {
  return (
    <FirstContainer>
      <Container>
        <FormTemplate />
      </Container>
    </FirstContainer>
  );
}

export default CreateTodo;
