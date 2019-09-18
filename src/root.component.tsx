import React from "react";
import openmrsRootDecorator from "@openmrs/react-root-decorator";
import styles from "./root.styles.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function ShowHomeIcon() {
  return (
    <Router>
      <Link to="/openmrs/spa/home">
        <svg className={`omrs-icon ${styles.menuIcon}`}>
          <use xlinkHref="#omrs-icon-home" />
        </svg>
      </Link>
    </Router>
  );
}

function Root() {
  const [sidenavOpen, setSidenavOpen] = React.useState(false);

  React.useEffect(() => {
    const operation = sidenavOpen ? "add" : "remove";
    document.body.classList[operation]("omrs-sidenav-expanded");

    return () => {
      document.body.classList.remove("omrs-sidenav-expanded");
    };
  }, [sidenavOpen]);

  return (
    <nav className={styles.topNav}>
      <Router>
        <Route path="/openmrs/spa/home/" strict component={ShowHomeIcon} />
      </Router>
      <div className={styles.avatar}>AB</div>
    </nav>
  );

  function toggleSidenav() {
    setSidenavOpen(!sidenavOpen);
  }
}

export default openmrsRootDecorator({ featureName: "primary navigation" })(
  Root
);
