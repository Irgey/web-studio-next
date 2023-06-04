import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <section className="hero">
        {" "}
        <div className="hero__content">
          <h1 className="hero__title">404</h1>{" "}
          <p className="hero__text">
            Ooops, something went wrong. You will be redirected to Home Page in
            3 seconds...
          </p>
        </div>
      </section>
    </>
  );
};

export default Error;
