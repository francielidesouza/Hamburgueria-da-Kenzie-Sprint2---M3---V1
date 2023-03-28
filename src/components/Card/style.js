import styled from "styled-components";

export const StyledListCard = styled.ul`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  padding: 10px 0;

  overflow-x: auto;
  overflow-y: hidden;
  background-color: var(--white-0);

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const StyledCard = styled.li`
  min-height: 346px;
  max-height: 346px;

  min-width: 250px;
  max-width: 300px;

  border: 2px solid var(--grey-20);
  border-radius: var(--radius-5);

  figure {
    height: 150px;
    min-width: 100%;

    background-color: var(--grey-0);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    padding: 20px 20px 10px 20px;

    h2 {
      font-family: var(--font-family);
      font-size: var(--font-size-3);
      color: var(--grey-100);
      font-weight: 700;
      line-height: 24px;
    }

    span {
      font-family: var(--font-family);
      font-size: var(--font-size-4);
      color: var(--grey-50);
      font-weight: 400;
      line-height: 16px;
    }

    p {
      font-family: var(--font-family);
      font-size: var(--font-size-5);
      color: var(--color-primary);
      font-weight: 600;
      line-height: 24px;
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
  }
`;
