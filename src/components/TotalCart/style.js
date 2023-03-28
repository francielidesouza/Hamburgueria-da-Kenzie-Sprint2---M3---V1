import styled from "styled-components";

export const SltyledTotalContainer = styled.div`
  .containerDescription {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    p,
    span {
      font-family: var(--font-family);
      font-size: var(--font-size-5);
      color: var(--grey-100);
      font-weight: 600;
      line-height: 24px;
    }

    span {
      color: var(--grey-50);
    }
  }

  button {
    width: 95%;
    height: 40px;

    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: var(--radius-8);
    font-family: var(--font-family);

    color: #828282;
    font-weight: 600;
    font-size: var(--font-size-4);
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
