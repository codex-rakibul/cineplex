import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store/store";
import LayoutCom from "@/components/layout";
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <Provider store={store}>
        {
          Component.getLayout(
            <Component {...pageProps} />)
        }
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <LayoutCom>
        <Component {...pageProps} />
      </LayoutCom>
    </Provider>
  );
}
