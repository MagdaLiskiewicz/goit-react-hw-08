import { Helmet } from "react-helmet-async";

export default function DocumentTitle({ children }) {
  return (
    <div className="application">
      <Helmet>
        <title>{children}</title>
      </Helmet>
    </div>
  );
}
