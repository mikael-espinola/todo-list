import styled from "styled-components";

const detailsTheme = {
  padding: " 0.5em",
  borderRadius: "7px",
  primaryColor: "#fb9404",
  pendingColor: "#e80606",
  completedColor: "#1bed04",
};

interface StatusProp {
  status: boolean;
}

export const Tag = styled.label`
  color: black;
  font-style: italic;
  margin-right: 0.2em;
`;
export const Item = styled.li`
  border: 1px solid black;
  margin: 0.2em;
  border-radius: 5px;
  padding: 0 0.1em;
`;
export const Title = styled.h3`
  padding-left: 0.5em;
`;
export const Details = styled.p`
  padding: 1em;
  border-bottom: 1px solid black;
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 0.2em;
  font-size: 12px;

  @media screen and (min-width: 750px) {
    font-size: 15px;
  }
`;

export const Status = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${detailsTheme.primaryColor};
  padding: ${detailsTheme.padding};
  border-radius: ${detailsTheme.borderRadius};
  width: 95%;

  @media screen and (min-width: 750px) {
    width: 70%;
  }
`;

export const StatusColor = styled.div<StatusProp>`
  margin-left: 0.5em;
  width: 20px;
  height: 20px;
  background-color: ${(props) =>
    props.status ? detailsTheme.completedColor : detailsTheme.pendingColor};
  border-radius: 17px;
`;

export const Actions = styled.div`
  width: 80%;
  margin-left: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${detailsTheme.primaryColor};
  padding: ${detailsTheme.padding};
  border-radius: ${detailsTheme.borderRadius};

  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;

export const ActionButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
`;

export const FinalDate = styled.p`
  grid-column: span 2;
  justify-self: center;
  margin: 1em 0 0.5em 0;
  background-color: ${detailsTheme.primaryColor};
  padding: ${detailsTheme.padding};
  border-radius: ${detailsTheme.borderRadius};
`;
