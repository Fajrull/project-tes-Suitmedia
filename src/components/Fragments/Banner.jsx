const Banner = () => {
  return (
    <section>
      <div
        className="d-flex flex-column justify-content-center align-items-center "
        style={{
          height: "100vh",
          color: "white",
          backgroundImage: "url(assets/img/banner.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>IDEAS</h1>
        <p style={{ fontSize: "20px" }}>Where all our great things begin</p>
      </div>
    </section>
  );
};

export default Banner;
