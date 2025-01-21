import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

export function SharedLayout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
export default SharedLayout;
