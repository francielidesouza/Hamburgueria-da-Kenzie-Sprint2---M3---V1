import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  background-color: var(--white-0);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    width: 100%;

    .clearSearch {
      width: 90%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-family: var(--font-family);
        color: var(--grey-100);
        font-size: var(--font-size-1);
        font-weight: 700;
        line-height: 34px;

        span {
          font-family: var(--font-family);
          color: var(--grey-50);
          font-size: var(--font-size-1);
          font-weight: 700;
          line-height: 34px;
          padding: 10px;
        }
      }

      button {
        width: 130px;
        height: 40px;

        background: var(--color-primary);

        border: 2px solid var(--color-primary);
        border-radius: var(--radius-8);

        font-family: var(--font-family);
        color: var(--white-0);
        font-weight: 400;
        font-size: var(--font-size-5);
        display: none;
      }
    }
  }

  aside {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    div {
      width: 90%;

      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      padding-bottom: 20px;
      margin: 12px;
      gap: 10px;

      background-color: var(--grey-0);
      border-radius: var(--radius-5);
      border-radius: 0px 0px 5px 5px;

      h3 {
        height: 70px;
        width: 100%;
        background: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
        text-align: left;
        font-family: var(--font-family);
        font-size: var(--font-size-3);
        color: var(--white-0);
        font-weight: 700;
        line-height: 24px;
        padding-left: 30px;
        padding-top: 20px;
      }

      h2 {
        font-family: var(--font-family);
        font-size: var(--font-size-3);
        color: var(--grey-100);

        font-weight: 700;
        line-height: 24px;
        text-align: center;
      }

      span {
        font-family: var(--font-family);
        font-size: var(--font-size-5);
        color: var(--grey-50);

        font-weight: 400;
        line-height: 24px;
        text-align: center;
      }

      .divCartDescription {
        width: 200px;
        height: 76%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-direction: column;
      }
    }
  }

  @media (min-width: 800px) {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;

    section {
      width: 50%;

      .clearSearch {
        button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    aside {
      width: 50%;
      padding-top: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media (min-width: 800px) {
    section {
      width: 60%;
    }

    aside {
      width: 30%;
    }
  }
`;
