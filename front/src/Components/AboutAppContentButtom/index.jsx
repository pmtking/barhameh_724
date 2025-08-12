import AboutCard from "../ui/AboutCard";

const AboutAppContentButton = ({ id }) => {
  return (
    <>
      {id === 1 && (
        <>
          <AboutCard />
        </>
      )}
    </>
  );
};

export default AboutAppContentButton;
