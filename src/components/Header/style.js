import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 139px;
  width: 100%;
  display: flex;
  background-color: var(--grey-0);
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 100%;

    display: flex;
    background-color: var(--grey-0);
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    gap: 20px;
  }

  form {
    height: 60px;
    width: 382px;

    border: 2px solid #e0e0e0;
    border-radius: var(--radius-8);

    background-color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    gap: 33px;
  }

  input {
    border: none;

    width: 185px;
    height: 40px;

    font-family: var(--font-family);
  }

  input::placeholder {
    color: var(--grey-20);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: 19px;
    padding: 0 10px;
  }

  input:focus {
    color: black;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: 19px;
    padding: 0 10px;
  }

  button {
    width: 106px;
    height: 40px;

    background: var(--color-primary);

    border: 2px solid var(--color-primary);
    border-radius: var(--radius-8);

    color: var(--white-0);
    font-weight: 600;
    font-size: var(--font-size-5);
    line-height: 17px;
  }

  @media (min-width: 800px) {
    div {
      width: 86%;
      flex-direction: row;
      justify-content: space-between;

      img {
        padding-left: 25px;
      }
    }
  }

  @media (min-width: 1444px) {
    div {
      width: 90%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
