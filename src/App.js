// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import Settings from "./components/settings";
import RtlLayout from "./components/RtlLayout";
import ScrollToTop from "./components/ScrollToTop";
import { ProgressBarStyle } from "./components/ProgressBar";
import ThemeColorPresets from "./components/ThemeColorPresets";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";

// utils
import { useSetRecoilState } from "recoil";
import { dataAtom, loadingAtom, errorAtom } from "./recoil/atoms";
import axios from "axios";
import { useEffect } from "react";

// ----------------------------------------------------------------------

const INTERVAL_FETCH = 10000; // 10 seconds
const REST_URL = "http://localhost:9996/all";

export default function App() {
  const setDataRecoil = useSetRecoilState(dataAtom);
  const setErrorRecoil = useSetRecoilState(errorAtom);
  const setLoadingRecoil = useSetRecoilState(loadingAtom);

  const getData = () => {
    setLoadingRecoil(true);
    setErrorRecoil(null);

    axios
      .get(REST_URL)
      .then((response) => {
        setDataRecoil({ ...response.data, refreshTime: new Date() });
        setLoadingRecoil(false);
      })
      .catch((err) => setErrorRecoil(err));
  };

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
    }, INTERVAL_FETCH);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider>
      <ThemeColorPresets>
        <RtlLayout>
          <MotionLazyContainer>
            <ProgressBarStyle />
            <Settings />
            <ScrollToTop />
            <Router />
          </MotionLazyContainer>
        </RtlLayout>
      </ThemeColorPresets>
    </ThemeProvider>
  );
}
