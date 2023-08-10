import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import { Login } from "./login";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return <Login />;
};

export default Home;
