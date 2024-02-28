import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  line-height: 1;
}

p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: ${({ theme }) => theme.fonts.spacings.letterSpacing};
}

h1 {
  font-size: clamp(2rem, 5vw, 5rem); /* Large heading */
}

h2 {
  font-size: clamp(1.5rem, 3vw, 3rem); /* Medium heading */
}

h3 {
  font-size: clamp(1.25rem, 2.5vw, 2.5rem); /* Small heading */
}

h4 {
  font-size: clamp(1rem, 2vw, 2rem); /* Extra small heading */
}

h5 {
  font-size: clamp(0.875rem, 1.5vw, 1.5rem); /* Tiny heading */
}

.text {
  margin-bottom: 1.5rem;
  max-width: 40em;
}

small,
.text-small {
  font-size: ${({ theme }) => theme.fonts.size.smallText};
}

a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* buttons */
.btn {
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary500};
  border: transparent;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  letter-spacing: ${({ theme }) => theme.fonts.spacings.letterSpacing};
  padding: 0.65rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  transition: ${({ theme }) => theme.transitions.fast};
  text-transform: capitalize;
  display: inline-block;
}

.btn:hover {
  background: ${({ theme }) => theme.colors.primary700};
  box-shadow: ${({ theme }) => theme.shadows.shadow3};
}

.btn-hipster {
  color: ${({ theme }) => theme.colors.primary500};
  background: ${({ theme }) => theme.colors.primary200};
}

.btn-hipster:hover {
  color: ${({ theme }) => theme.colors.primary200};
  background: ${({ theme }) => theme.colors.primary700};
}

.btn-block {
  width: 100%;
}

button:disabled {
  cursor: wait;
}

.danger-btn {
  color: ${({ theme }) => theme.colors.redDark};
  background: ${({ theme }) => theme.colors.redLight};
}

.danger-btn:hover {
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.redDark};
}

/* alerts */
.alert {
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
}

.alert-danger {
  color: ${({ theme }) => theme.colors.redDark};
  background: ${({ theme }) => theme.colors.redLight};
}

.alert-success {
  color: ${({ theme }) => theme.colors.greenDark};
  background: ${({ theme }) => theme.colors.greenLight};
}

/* form */
.form {
  width: 90vw;
  max-width: ${({ theme }) => theme.widths.fixedWidth};
  background: ${({ theme }) => theme.colors.backgroundSecondaryColor};
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.shadow2};
  padding: 2rem 2.5rem;
  margin: 3rem auto;
}

.form-label {
  display: block;
  font-size: ${({ theme }) => theme.fonts.size.smallText};
  margin-bottom: 0.3rem;
  text-transform: capitalize;
  letter-spacing: ${({ theme }) => theme.fonts.spacings.letterSpacing};
  line-height: 1.5;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.textColor};
}

.form-input,
.form-select,
.form-btn {
  height: 35px;
}

.form-row {
  margin-bottom: 1rem;
}

.form-textarea {
  height: 7rem;
}

::placeholder {
  font-family: inherit;
  color: ${({ theme }) => theme.colors.gray400};
}

.form-alert {
  color: ${({ theme }) => theme.colors.redDark};
  letter-spacing: ${({ theme }) => theme.fonts.spacings.letterSpacing};
  text-transform: capitalize;
}

/* alert */
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primary500};
  animation: spinner 0.6s linear infinite;
}

/* title */
.title {
  text-align: center;
}

.title-underline {
  background: ${({ theme }) => theme.colors.primary500};
  width: 7rem;
  height: 0.25rem;
  margin: 0 auto;
  margin-top: 1rem;
}

.container {
  width: ${({ theme }) => theme.widths.fluidWidth};
  max-width: ${({ theme }) => theme.widths.maxWidth};
  margin: 0 auto;
}

/* BUTTONS AND BADGES */
.pending {
  background: #fef3c7;
  color: #f59e0b;
}

.interview {
  background: #e0e8f9;
  color: #647acb;
}
.declined {
  background: #ffeeee;
  color: #d66a6a;
}
`;
