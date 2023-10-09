import { useRouter } from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { useEffect } from "react";
import { ToastProvider } from "@/Context/ToastsContext";
import { AuthProvider } from "@/Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

config.autoAddCss = false;
export default function App({ Component, pageProps, initialTheme }) {
  const router = useRouter();
  const { table_id, restaurant_id } = router.query;

  useEffect(() => {
    const time = setInterval(() => {
      const currentTime = Date.now();
      const expirationTime = sessionStorage.getItem("expiration_time");
      const matchResult = router.pathname.match(
        /\/\[[a-zA-Z_]+\]\/\[[a-zA-Z_]+\]/
      );
      const desiredString = matchResult ? matchResult[0] : null;

      if (expirationTime && Number(expirationTime) <= currentTime) {
        sessionStorage.clear();
        localStorage.clear();
        if (desiredString === "/[table_id]/[restaurant_id]") {
          window.location.href = `/`;
          // router.push(`/${table_id}/${restaurant_id}`);
        } else {
          router.push("/admin/login");
          // window.location.href = "/admin/login";
        }
      }
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ToastProvider>
        <AuthProvider>
        <ToastContainer />
          {router.pathname.includes("/auth") ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthProvider>
      </ToastProvider>
    </>
  );
}
export const getServerSideProps = async () => {
  // get the initial theme from the server-side props
  const initialTheme = "light"; // set this to the system theme if you want to use it

  return { props: { initialTheme } };
};
