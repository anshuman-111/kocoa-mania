import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="overlay popup-hidden">
      <div className="popup">
        <span className="popup-close">&times;</span>
        <h4 className="heading heading-tertiary text-red">
          Privacy Policy for Kocoa Mania
        </h4>

        {/* <!-- Popup text --> */}
        <article className="popup-text">
          <p>
            Effective date: [Insert Date] <br />
            At Kocoa Mania, we respect your privacy and are committed to
            maintaining the confidentiality of your personal information. This
            Privacy Policy outlines our practices regarding the collection, use,
            and disclosure of information on our website, which does not use
            cookies and does not collect any personal information.
          </p>
          <h4>1. Information Collection:</h4>
          <p>
            Our website does not use cookies or any other tracking technologies
            to collect information about your visit or your interactions with
            our site. We do not collect any personal information such as your
            name, email address, or any other identifying details.
          </p>
          <h4>2. Information Usage:</h4>
          <p>
            Since we do not collect any information from our visitors, we do not
            use any collected information for any purpose.
          </p>
          <h4>3. Information Disclosure:</h4>
          <p>
            As we do not collect any information from our visitors, we do not
            disclose any information to third parties.
          </p>
          <h4>4. External Links:</h4>
          <p>
            Our website may contain links to external websites that are not
            operated or controlled by us. Please note that we are not
            responsible for the privacy practices of these third-party websites.
            We encourage you to review their respective privacy policies upon
            visiting them.
          </p>
          <h4>5. Children's Privacy:</h4>
          <p>
            Our website is not directed towards children under the age of 13,
            and we do not knowingly collect any personal information from
            individuals under 13 years of age. If you are a parent or guardian
            and believe that your child has provided any personal information on
            our website, please contact us, and we will promptly delete that
            information.
          </p>
          <h4>6. Changes to the Privacy Policy:</h4>
          <p>
            We reserve the right to modify or update this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised Privacy Policy on our website. We encourage you to review
            this Privacy Policy periodically for any updates.
          </p>
          <h4>7. Contact Us:</h4>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our practices regarding your personal information, please contact us
            using the contact information provided on our website. By using our
            website, you signify your acceptance of this Privacy Policy. If you
            do not Effective date: [Insert Date] At Kocoa Mania, we respect your
            privacy agree to this policy, please refrain from using our website.
          </p>
        </article>
      </div>
    </div>
  )
}

export default PrivacyPolicy