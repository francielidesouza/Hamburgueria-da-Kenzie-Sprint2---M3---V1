import styled from "styled-components";

export const StyledListCart = styled.ul`
  width: 100%;
  height: 360px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: var(--grey-0);
  border-bottom: 2px solid #e0e0e0;
  padding: 0 33px;
`;

export const StyledCart = styled.li`
  min-height: 80px;
  width: 100%;

  background-color: var(--grey-0);

  display: flex;
  align-items: center;

  gap: 10px;

  figure {
    min-width: 70px;

    background-color: var(--grey-20);
    border-radius: var(--radius-5);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 60px;
    }
  }

  h2 {
    font-family: var(--font-family);
    font-size: var(--font-size-3);
    color: var(--grey-100);
    font-weight: 700;
    line-height: 24px;

    white-space: nowrap;
  }

  span {
    font-family: var(--font-family);
    font-size: var(--font-size-4);
    color: var(--grey-50);
    font-weight: 400;
    line-height: 16px;
  }

  button {
    width: 90px;
    height: 57%;

    align-self: flex-start;

    background-color: var(--grey-0);
    border: none;
    color: #bdbdbd;
    font-weight: 500;
    font-size: var(--font-size-6);
    line-height: 17px;
  }
`;
