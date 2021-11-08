import React, { useEffect } from "react"
import SEO from "@components/SEO"

export default () => {
  useEffect(() => {
    window.location.href = 'http://www.ics.uplb.edu.ph/node/646'
  }, []);

  return (
    <SEO title="ICS to graduate 106 students, 10 Latin honors"
      description="ICS is proud to present its graduating class of 2019 consisting of 106 graduates. The said number of graduates is composed of 96 graduates in Bachelor of Science in Computer Science (BSCS), four in Master of Science in Computer Science (MSCS), four in Master of Information Technology (MIT), and two PhD in Computer Science. The BSCS graduates include one magna cum laude, 9 cum laude, and 29 honor roll awardees."
      author="RNCRecario"
      thumbnail="/ics-to-graduate-106-students-10-latin-honors.jpg"
    />
  )
};