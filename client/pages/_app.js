// import "../styles/globals.css";
// import store from "../redux/store";
// import { Provider } from "react-redux";
// import { ThemeProvider } from "@mui/material";
// import theme from "../styles/theme";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       </ThemeProvider>
//     </>
//   );
// }

// export default MyApp;

import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7G58TNWS39"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','G-7G58TNWS39');
    `}
      </Script>
    </>
  );
}

export default MyApp;
