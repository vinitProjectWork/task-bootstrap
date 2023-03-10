import { FolderIcon, SettingsIcon, StarIcon } from "../asset/js/icon";

const Sidebar = () => (
  <div
    className="d-flex flex-column flex-shrink-0 bg-primary"
    style={{ width: "4.5rem" }}
  >
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="py-4">
        <StarIcon />
      </li>
      <li className="py-4">
        <FolderIcon />
      </li>
      <li className="py-4">
        <SettingsIcon />
      </li>
    </ul>
  </div>
);
export default Sidebar;
