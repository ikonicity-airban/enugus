import WebViewPage from "../../components/screen";
import { URLs } from "../../lib/constants";

export default function HomeScreen() {
  return <WebViewPage url={URLs.home} />;
}
