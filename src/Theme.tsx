import { css, Global } from '@emotion/react';

export const Theme = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        :root {
          --base-background: #f4f4f9;
          --base-foreground: rgb(32, 32, 32);

          --header-background: #383f51ff;
          --header-foreground: #f4f4f9;
          --header-active: #ce8147ff;

          --primary-background: #3c4f76ff;
          --primary-background-medium: #3c4f7677;
          --primary-background-light: #3c4f7644;
          --primary-background-lightest: #3c4f7611;
          --primary-foreground: #f4f4f9;
          --primary-active: #ce8147ff;
          --primary-outline: #dddbf1ff;
          --primary-ripple: #3c4f76cc;

          --menu-active: rgba(0, 0, 0, 0.04);

          --font-family: 'Poppins', sans-serif;
          --secondary-font-family: 'Open Sans', sans-serif;

          --surface-background: rgba(255, 255, 255, 1);
          --surface-foreground: #212121ff;
          --surface-foreground-medium: #212121aa;
          --surface-outline: var(--primary-outline);

          --well-background: #e4e6e7ff;
          --well-foreground: #595a5aff;
          --well-outline: #e4e6e7ff;

          --error-background: #b00020;
          --error-foreground: #ffffff;
          --error-outline: #b00020;

          --warning-background: #fab005;
          --warning-foreground: #ffffff;
          --warning-outline: #fab005;

          --success-background: #23b818;
          --success-foreground: #ffffff;
          --success-outline: #23b818;
        }

        button,
        a.button {
          font-family: var(--button-font-family);
          font-size: 1rem;
          font-weight: normal;
          outline: none;
          background: var(--surface-background);
          border: 1px solid transparent;
          border: 1px solid var(--primary-background-light);
          color: var(--primary-background);
          padding: 0.5rem;
          border-radius: 0.25rem;
          min-width: 5rem;
          user-select: none;
          cursor: pointer;
          background-position: center;

          transition: box-shadow 200ms ease-in-out, background 0.8s,
            color 200ms ease-in-out, border-color 320ms ease-in-out;

          &:disabled {
            cursor: auto;
          }

          &.primary {
            background-color: var(--primary-background);
            border-color: var(--primary-background);
            color: var(--primary-foreground);

            &:hover {
              background: var(--primary-background)
                radial-gradient(
                  circle,
                  transparent 1%,
                  var(--primary-background) 1%
                )
                center/15000%;
            }

            &:active {
              background-color: var(--primary-ripple);
              background-size: 100%;
              transition: background-color 0s, background-size 0s;
            }
          }

          &:hover {
            border-color: var(--primary-background);
            background: var(--primary-background-lightest)
              radial-gradient(
                circle,
                transparent 1%,
                var(--primary-background-lightest) 1%
              )
              center/15000%;
          }

          &:active {
            background-color: var(--surface-background);
            background-size: 100%;
            transition: background-color 0s, background-size 0s;
          }
        }

        button.link,
        a.button.link {
          background-color: transparent;

          min-height: 2rem;
          border-color: transparent;

          &:hover {
            color: var(--base-foreground);
            box-shadow: none;

            background: rgba(0, 0, 0, 0.05)
              radial-gradient(circle, transparent 1%, rgba(0, 0, 0, 0.05) 1%)
              center/18000%;
          }

          &:active {
            background-color: var(--surface-background);
            background-size: 100%;
            transition: background-color 0s, background-size 0s;
          }
        }

        .surface {
          border-radius: 2px;
          background-color: var(--surface-background);
          color: var(--surface-foreground);
        }

        *[class^='surface-level-'],
        *[class*=' surface-level-'] {
          transition: box-shadow 500ms ease-in-out;
        }

        .surface-level-1 {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .surface-hover.surface-level-1:hover {
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12),
            0 3px 4px rgba(0, 0, 0, 0.24);
        }

        .surface-level-2 {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }

        .surface-level-3 {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
            0 6px 6px rgba(0, 0, 0, 0.23);
        }

        .surface-level-4 {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        .surface-level-5 {
          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
        }

        body,
        html {
          padding: 0;
          margin: 0;
          height: 100%;
          width: 100%;

          font-family: var(--font-family);
          color: var(--base-foreground);
          background-color: var(--base-background);
          font-size: 16px;
        }

        #root {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        a,
        a:hover,
        a:visited,
        a:active {
          color: #008bf5ff;
          text-decoration: none;
          transition: color 200ms ease-in-out;
        }

        a:hover {
          color: #005ca3ff;
        }
      `}
    />
  );
};
