import WebViewPage from "../../components/screen";
import { URLs } from "../../lib/constants";

export default function BlogScreen() {
  return <WebViewPage url={URLs.blog} />;
}
