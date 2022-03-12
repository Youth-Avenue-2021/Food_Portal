import PageLink from "./PageLink";

const MessNavbar = () => {
  // const location = useLocation().messId;
  // const { messId } = useLocation();
  const linkData = [
    {
      icon: "fa-circle-info",
      title: "Info",
      link: `info`,
    },
    {
      icon: "fa-images",
      title: "Gallery",
      link: `gallery`,
    },
    {
      icon: "fa-utensils",
      title: "Food Menu",
      link: `food-menu`,
    },
    {
      icon: "fa-circle-exclamation",
      title: "Complains",
      link: `complains`,
    },
    {
      icon: "fa-square-check",
      title: "Food Standards",
      link: `food-Standards`,
    },
    {
      icon: "fa-eye",
      title: "Food Inspection",
      link: `food-inspection`,
    },
    {
      icon: "fa-star-half-stroke",
      title: "Review",
      link: `review`,
    },
    {
      icon: "fa-circle-question",
      title: "Q&A",
      link: `que-ans`,
    },
  ];
  return (
    <>
      <header className="bg-sky-100">
        <div className="container flex items-center justify-center px-16 py-5 mx-auto">
          <div className="flex flex-row items-center justify-start w-full">
            {linkData.map((item, index) => (
              <>
                <span className="mr-2">
                  <PageLink title={item.title} link={item.link} key={index} icon={item.icon} />
                </span>
              </>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default MessNavbar;
