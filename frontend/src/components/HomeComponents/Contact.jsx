
const Contact = ({ContactData}) => {

  const canonical = document.querySelector("a[title=Share]");
  let title = "Kocoa Mania - Eggless Cloud Bakery"
  let text = `Where Taste Meets Art`
  let url = import.meta.env.VITE_REACT_URL
  const shareDetails = { url, title, text };

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share(shareDetails)
          
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };
  
  // Try to remove react helmet from the App and add it to index.html...make it faster
  return (
      <section className="section contact pt-7 pb-7" id="contact">
          <h2 className="heading heading-secondary text-red">Contact Us</h2>
          <div className="container reveal fade-bottom">
              <div className="top-row">
                  {/* <!-- Course info --> */}
                  <article className="contact-course-info text-center">
                      <h3 className="heading heading-tertiary text-red pb-2">
                          Baking is fun with Kocoa Mania!
                      </h3>
                      <h4 className="heading heading-tertiary text-red">
                          {ContactData.classTypeAHeading}:
                      </h4>
                      <p className="pb-3">
                          {ContactData.classTypeADescription}
                      </p>
                      <h4 className="heading heading-tertiary text-red">
                          {ContactData.classTypeBHeading}:
                      </h4>
                      <p className="pb-3">
                          {ContactData.classTypeBDescription}
                      </p>
                      <h4 className="heading heading-tertiary text-red">
                          {" "}
                          {ContactData.classTypeCHeading}:
                      </h4>
                      <p>{ContactData.classTypeCDescription}</p>
                  </article>
                  {/* <!-- Contact info --> */}
                  <div className="contact-info text-center">
                      <div>
                          <h4 className="heading heading-tertiary text-red">
                              Phone
                          </h4>
                          <a
                              href={`tel:+${ContactData.phone}`}
                              title="Telephone"
                          >
                              +{ContactData.phone}
                          </a>
                      </div>

                      <div>
                          <h4 className="heading heading-tertiary text-red">
                              Email
                          </h4>
                          <a
                              href={`mailto:${ContactData.email}`}
                              title="Email Address"
                          >
                              {ContactData.email}
                          </a>
                      </div>

                      {/* <!-- Social icons --> */}
                      <div className="contact-info--social-icons">
                          <a
                              href={ContactData.facebook}
                              title="Facebook"
                              className="btn btn-secondary"
                          >
                              <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                              ></i>
                          </a>
                          <a
                              href={ContactData.instagram}
                              title="Instagram"
                              className="btn btn-secondary"
                          >
                              <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                              ></i>
                          </a>
                          <a
                              href={`https://wa.me/${ContactData.phone}`}
                              title="What'sApp"
                              className="btn btn-secondary"
                          >
                              <i
                                  className="fa fa-whatsapp"
                                  aria-hidden="true"
                              ></i>
                          </a>
                          <a
                              title="Share"
                              className="btn btn-secondary"
                              onClick={handleSharing}
                          >
                              <i
                                  className="fa fa-share-alt"
                                  aria-hidden="true"
                              ></i>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="text-center pt-5">
                  <h3 className="heading heading-tertiary text-red">
                      Delivery available 24/7 across kolkata
                  </h3>
              </div>
          </div>
      </section>
  );
}

export default Contact