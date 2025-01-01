import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";

import { Header } from "./sections/header.tsx";
import { COLOR, FONT_FAMILY } from "./constants.ts";
import { Bullet } from "./elements/bullet.tsx";
import { Row } from "./elements/row.tsx";
import { SectionHeading } from "./elements/section-heading.tsx";
import { Experience } from "./sections/experience.tsx";
import { Ul, Li } from "./elements/ul.tsx";
import { B } from "./elements/b.tsx";
import { resolveFontPath } from "./utils/path/path.utils.ts";
import { A } from "./elements/a.tsx";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: FONT_FAMILY.COMPUTER_MODERN,
    color: COLOR.PRIMARY,
    backgroundColor: COLOR.SECONDARY,
    padding: "24pt 36pt",
    fontSize: 10,
    lineHeight: 1.2,
  },
});

Font.register({
  family: FONT_FAMILY.COMPUTER_MODERN,
  fonts: [
    {
      src: resolveFontPath("regular"),
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: resolveFontPath("bold"),
      fontStyle: "bold",
      fontWeight: "bold",
    },
  ],
});

export const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header fullName="Anton Konev">
        <Row>
          <Text>
            <A src="https://www.linkedin.com/in/antonkonevcom">LinkedIn</A>
          </Text>
          <Bullet />
          <Text>
            <A src="https://github.com/evilj0e">Github</A>
          </Text>
          <Bullet />
          <Text>London, UK</Text>
          <Bullet />
          <Text>info@antonkonev.com</Text>
          <Bullet />
          <Text>+44 75 7054 3541</Text>
        </Row>
      </Header>

      <SectionHeading>Summary</SectionHeading>
      <Row>
        <Text>
          <B>Engineering Leader</B> with over <B>10 years of expertise</B> in
          designing scalable solutions, managing cross-functional teams, and
          delivering impactful projects for global audiences. A{" "}
          <B>UK Global Talent visa holder</B>, recognized for driving
          innovation, optimizing workflows, and achieving measurable results.
          Passionate about solving complex challenges and leading
          high-performing teams to build the future of technology.
        </Text>
      </Row>

      <SectionHeading>Skills</SectionHeading>
      <Row>
        <Text>System Design</Text>
        <Bullet />
        <Text>Scalable Architecture</Text>
        <Bullet />
        <Text>TypeScript</Text>
        <Bullet />
        <Text>React</Text>
        <Bullet />
        <Text>Node.js</Text>
        <Bullet />
        <Text>Microservices</Text>
        <Bullet />
        <Text>Kubernetes</Text>
        <Bullet />
        <Text>API Development</Text>
        <Bullet />
      </Row>
      <Row>
        <Text>Cloud Computing (AWS, GCP)</Text>
        <Bullet />
        <Text>Performance Optimization</Text>
        <Bullet />
        <Text>Agile Leadership</Text>
        <Bullet />
        <Text>Cross-Functional Collaboration</Text>
        <Bullet />
      </Row>
      <Row>
        <Text>Team Mentorship</Text>
        <Bullet />
        <Text>Process Optimization</Text>
      </Row>

      <SectionHeading>Work Experience</SectionHeading>

      <Experience
        title="Recraft, Inc"
        subtitle="Engineering Team Lead"
        startDate="Nov 2022"
        hasDuration={true}
        hasDivider
      >
        <Text>
          Recraft AI is a cutting-edge image generation and editing platform,
          revolutionizing digital creativity with over 2M active users across
          200+ countries and more than 300M images created. Our image generation
          model is the best in the market.
        </Text>
        <Ul>
          <Li>
            Designed and implemented a <B>scalable UI</B>, achieving{" "}
            <B>2M+ users (200+ countries)</B> with over{" "}
            <B>300M image generations</B>.
          </Li>
          <Li>
            Honored as a <B>Top Contributor</B> for two consecutive years,
            driving innovation and market expansion.
          </Li>
          <Li>
            Established a <B>streamlined planning framework</B>, improving team
            collaboration and accelerating project timelines.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="Arrival"
        subtitle="Tech Lead"
        startDate="Dec 2019"
        endDate="Nov 2022"
        hasDuration={true}
        hasDivider
      >
        <Text>
          Arrival, a British EV start-up, went public on NASDAQ in 2021 with a
          valuation of $13 billion, marking the largest-ever listing for a UK
          tech company at that time growing up to 3000 employees across the
          globe at peak.
        </Text>
        <Ul>
          <Li>
            Directed the <B>expansion from 1 product to 8</B>, overseeing
            architecture and delivery across high-priority projects.
          </Li>
          <Li>
            Designed and implemented <B>Digital Assets Storage</B>, reducing
            data transfer size by <B>70%</B> and cutting deployment times from{" "}
            <B>12 to 5 minutes</B>, saving <B>23% in cloud costs</B>.
          </Li>
          <Li>
            Recognized as <B>Employee of the Year</B> for two consecutive years
            among <B>100+ Software Engineers</B>.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="Yandex"
        subtitle="Senior Frontend Developer"
        startDate="Jan 2015"
        endDate="Dec 2019"
        hasDivider
        hasDuration={true}
      >
        <Text>
          Yandex, one of the largest and leading technology companies in Russia.
        </Text>
        <Ul>
          <Li>
            Led the development of a <B>core platform</B> supporting{" "}
            <B>6,000+ developers (DAU)</B>, delivering <B>3 major projects</B>{" "}
            in a year.
          </Li>
          <Li>
            Reduced <B>time-to-market by 50%</B>, creating customizable
            platforms that optimized internal workflows and lowered
            infrastructure costs.
          </Li>
          <Li>
            Built platforms with <B>broad organizational impact</B>, reducing
            costs and improving workflows.
          </Li>
          <Li>
            Contributed to <B>Yandex Browser’s market expansion into Turkey</B>,
            driving a <B>5% market share growth in Russia</B>.
          </Li>
        </Ul>
      </Experience>

      <Experience
        title="Devdigital"
        subtitle="Co-Founder"
        startDate="Jun 2012"
        endDate="Jan 2015"
        hasDivider
        hasDuration={true}
        isLast
      >
        <Ul>
          <Li>
            Delivered <B>20+ successful projects</B> across diverse domains,
            including e-commerce and GIS systems.
          </Li>
          <Li>
            Secured a grant for developing a GIS from the Belgorod Regional
            Resource Innovation Center.
          </Li>
          <Li>
            Built and managed a team of <B>10 developers</B>, fostering a
            collaborative and innovative environment.
          </Li>
          <Li>
            Established a solid foundation in <B>technical leadership</B>,{" "}
            <B>business strategy</B>, and <B>innovative problem-solving</B>,
            driving long-term career success in tackling complex engineering
            challenges.
          </Li>
        </Ul>
      </Experience>

      <SectionHeading>Education</SectionHeading>
      <Experience
        title="Belgorod State Technological University"
        subtitle="Master’s Degree in Computer Science, Information Technology (GPA 4.6/5)"
        startDate="2008"
        endDate="2013"
        hasDuration={false}
        isLast
      />

      <SectionHeading>Professional Highlights</SectionHeading>
      <Experience
        title="UK Global Talent Endorsement"
        hasDuration={false}
        hasEndDate={false}
        startDate="2023"
      >
        <Text>
          Recognized for exceptional contributions in digital technology.
        </Text>
      </Experience>
      <Experience
        title="Program Committee Member – YaTalks Conference"
        hasDuration={false}
        hasEndDate={false}
        startDate="2019"
      >
        <Text>
          Curated <B>8 talks</B> for a leading Front-End developer conference
          with <B>19,000+ attendees and viewers</B>.
        </Text>
      </Experience>

      <Experience
        title="Community Organizer"
        hasDuration={false}
        startDate="2017"
        endDate="2019"
      >
        <Text>
          Founded and scaled BeerJS Ekaterinburg, hosting <B>48+ meetups</B> and
          mentoring <B>3 speakers</B>; contributed to <B>UralJS</B> with{" "}
          <B>9 events</B> attracting 100+ attendees.
        </Text>
      </Experience>

      <SectionHeading>Educational Initiatives</SectionHeading>
      <Experience
        title="Coursera Course Co-Author and Mentor"
        hasDuration={false}
        hasEndDate={false}
        startDate="2018"
      >
        <Text>
          Co-authored “JavaScript, Part 2: Prototypes and Async” with{" "}
          <B>7,400+ students</B> and contributed to “Mathematical Thinking in
          Computer Science” with <B>120,000+ students</B>.
        </Text>
      </Experience>

      <Experience
        title="Front-End Course (Ural Federal University)"
        hasDuration={false}
        hasEndDate={false}
        startDate="2016"
        endDate="2018"
      >
        <Text>
          Co-authored and taught JavaScript, HTML, and CSS to{" "}
          <B>410+ students</B>, with course materials earning{" "}
          <B>130+ GitHub stars</B>.
        </Text>
      </Experience>

      <SectionHeading>Awards and Grants</SectionHeading>
      <Experience
        title="Innovation Grant Winner"
        hasDuration={false}
        hasEndDate={false}
        startDate="2012"
      >
        <Text>
          Secured funding for a Geo-Information System (GIS) project from the
          Belgorod Regional Resource Innovation Center.
        </Text>
      </Experience>
    </Page>
  </Document>
);
