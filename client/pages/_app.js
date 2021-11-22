
import Navbar from '../src/components/layout/NavBar'
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from '../theme';
import Footer from '../src/components/layout/Footer';
import React from 'react';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>AllOFArt</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <style jsx global>
          {`
            html,
            body {
              background: #f7c73b !important;
              overflow-x: hidden;
              padding: 0 !important;
            }
            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            main {
              flex: 1;
            }
          `}
        </style>

      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};