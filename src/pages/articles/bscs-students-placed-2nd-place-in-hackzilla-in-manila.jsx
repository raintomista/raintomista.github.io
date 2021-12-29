import React, { useEffect } from "react"
import SEO from "@components/SEO"

export default () => {
  useEffect(() => {
    window.location.href = 'http://www.ics.uplb.edu.ph/node/637'
  }, []);

  return (
    <SEO title="BSCS Students placed 2nd place in Hackzilla in Manila"
      description={`A team comprising of UPLB BSCS students placed second alongside a team from PUP in the "Hackzilla in Manila" competition last February 2-3, 2018 at the Freelancer Philippines office at BGC, Taguig City.`}
      author="RNCRecario"
      thumbnail="/bscs-students-placed-2nd-place-in-hackzilla-in-manila.jpg"
    />
  )
};