import { Link } from "react-router-dom";

const PageLink = ({ title, icon, link }) => {
  return (
    <>
      <Link to={link} className="mx-2 text-base duration-200 hover:text-sky-500">
        <i className={`mr-1 text-sky-600 fa-solid ${icon}`}></i>
        {title}
      </Link>
    </>
  );
};

PageLink.defaultProps = {
  title: "",
  icon: "",
  link: "/",
};

export default PageLink;
