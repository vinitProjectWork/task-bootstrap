import { BellIcon, QuestionMark } from "../asset/js/icon";
import "../asset/scss/header.scss";

const Header = () => (
  <header className="pt-2 pb-3 w-100 bg-light border-bottom h-auto header">
    <div
      className="container-fluid d-grid gap-3 align-items-center"
      style={{ gridTemplateColumns: "1fr 2fr" }}
    >
      <div className="d-flex align-items-center">
        <span className="fw-bold fs-5">Projects</span>
        <span class="badge mx-1 rounded-pill bg-secondary">27</span>
      </div>
      <div className="d-flex justify-content-end">
        <div className="mx-2">
          <BellIcon />
        </div>
        <div className="mx-2">
          <QuestionMark />
        </div>
        <div className="d-block link-dark text-decoration-none mx-2">
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
