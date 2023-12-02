import { NavLink } from "react-router-dom";


function HeaderLink({ title, route }) {
  const activeClassHandling = ({ isActive, isPending }) => {
    
    return isPending ? "pending" : isActive ? "active" : "pending";
  };
  return (
    <div className="Header-link-item">
      {" "}
      <NavLink key={title} className={activeClassHandling} to={route}>
        {title}
      </NavLink>
    </div>
  );
}
HeaderLink.propTypes = {
  title: String,
  route: String,
};
export default HeaderLink;
