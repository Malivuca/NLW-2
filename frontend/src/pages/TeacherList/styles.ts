import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  overflow-x: hidden;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`
export const Form = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: absolute;
    column-gap: 16px;
    bottom: -28px;
  }
`
export const InputBlock = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;

    @media (min-width: 700px) {
      margin-top: 0;
    }
  }

  label {
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem 'Archivo';
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`
export const Main = styled.div`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 1.4rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`
