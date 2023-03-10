import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }

  > svg {
    width: 2rem;
    height: 2rem;
    color: #2c7cda;
    opacity: 0.8;
    margin: 2rem 0 1rem;
  }
`;

export const Title = styled.h3`
  color: #ffffff;
  opacity: 0.8;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  opacity: 0.8;
  font-weight: 300;
`;
