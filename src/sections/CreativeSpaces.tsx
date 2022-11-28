import React from 'react';
import styles from './CreativeSpaces.module.scss';
import indexStyles from './index.module.scss';
import { Tab, TabList, TabPanel, TabPanels } from '../components/Tabs';
import Tabs from '../components/Tabs/Tabs';
import { Container } from '../components/Container';
import { Header } from '../components/Headers';
import { uniqueId } from 'lodash';
import Img from 'react-cool-img';
import { placeholderImg } from '../assets';
import { Button } from '../components/Buttons';

const defaultData = [
  {
    link: 'https://dev-spitzer-arch.pantheonsite.io/landing-page/image-41/',
    title: 'Fabrication Shop',
    altText: 'Fabrication Shop',
    description:
      '<p>Located in a large dedicated space on the concourse level of the Spitzer School, the model shop is fully equipped with a wide variety of hand and power tools for working with wood, plastic and metal. Included are panel-, table-, band-, and jig-saws, sanders, and drills. A complement of four large-bed laser cutters and two CNC machines are located in the shop as well. After an orientation session emphasizing the safe use of equipment, students are allowed access under the supervision of monitors and the shop director. The laser and CNC equipment require additional training and are typically operated by monitors specially trained and experienced in the use of this equipment.</p>\n<p>Light tools including some power equipment are located in studios for limited model buidling.Health and safety facilities include facility-wide dust collection and filtering, spray booths and advanced filtration for the laser facility.</p>\n<p>As our access to SSA building and our shared spaces  in which we interact and exchange ideas and knowledge is limited due to current circumstances, continuing from the Spring semester, we would like to offer a support system in the efforts for distance learning.</p>\n',
  },
  {
    link: 'https://dev-spitzer-arch.pantheonsite.io/landing-page/image-42/',
    title: 'Digital Fabrication',
    altText: 'Digital Fabrication',
    description:
      '<p>The Model Shop boasts four large-bed laser cutters, two CNC machines, and MakerBot 3-D printers. Additionally, the M Arch studios house a Stratasys uPrint SE Plus, a 3-D printer, and a Roland MDX-540 Milling Machine.</p>\n',
  },
  {
    link: 'https://dev-spitzer-arch.pantheonsite.io/landing-page/image-44/',
    title: 'Robotics Lab',
    altText: 'Robotics Lab',
    description:
      '<p>The Spitzer School Robotics Lab has two ABB IRB 120 small but powerful, scalable, industrial-grade six-axis robotic arms, as well as a third, larger arm, an ABB IRB 15000. Two very large arms are also planned for, pending infrastructure development. Students in robotics-focused courses, including special edesign studios, use the lab to critically explore robotics and examine their potential to transform, and perhaps disrupt, modes of present and future design practice.</p>\n<p>At Spitzer, robotics is viewed as a design tool, not just a conventional fabrication device. Robots are approached as broadly applicable general-purpose motion devices. The number, scope, and elaboration of functions, processes, and tasks each arm can carry out are nearly endless. One determinant of this flexibility, and a source of great potential, is the physical interface a robotic arm presents to the world — the tools or effectors that, when attached to the end of the arm, allow work to be carried out. The movable end of the arm — the “wrist” — is “open” and flexible and to which can be attached an unlimited number and variety of tools, objects, and small systems. Possibilities include all manner of drawing instruments, scribing tools, light sources, image capture devices, grippers, virtually any hand or power tool, extruders, grinders, and milling equipment. Harnessing robots’ precise programmed motion control, connection to robotic arms of cameras, video screens, and other visual production devices opens an entire realm of possibilities for architectural conceptualization, representation, documentation, expression, and even entertainment.</p>\n<p>The lab utilizes several software tools including HAL, Robots GH plug-in, and Mimic. These interface with familiar design applications such as Rhino, Grasshopper, and Maya, providing a bridge to Robot Studio, an industrial-grade comprehensive robot control and simulation suite. The lab also has available advanced 3-D printers and a host of tools to serve students and faculty working in the Spitzer Robotics Lab.</p>\n',
  },
];

/**
 * Creative Spaces section with tablist content
 * @component
 */
const CreativeSpaces = () => (
  <Container>
    <div className={styles['container']}>
      <Header as="h2">CREATIVE SPACES</Header>
      <Tabs className={styles['tabs-container']}>
        <div className={styles['tabs-flex']}>
          <TabList className={styles['tablist']}>
            {defaultData.map(({ title }, i) => (
              <Tab key={uniqueId(title)} id={i}>
                {title}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {defaultData.map(({ title, link, altText, description }, i) => (
              <>
                <TabPanel key={uniqueId(title)} id={i}>
                  <span className={styles['small-screen-header']}>
                    <Header as="h3">{title}</Header>
                  </span>
                  <Img
                    lazy
                    cache
                    src={link}
                    placeholder={placeholderImg}
                    alt={altText}
                    sizes="(max-width: 648px) 100vw, 648px"
                    width="100%"
                    height="auto"
                  />
                  <div className={styles['content']}>
                    <span className={styles['large-screen-header']}>
                      <Header as="h3">{title}</Header>
                    </span>
                    <p>{description}</p>
                  </div>
                </TabPanel>
              </>
            ))}
          </TabPanels>
        </div>
        <div className={styles['info']}>
          <p>Join us for our scheduled info sessions</p>
          <div className={styles['btn-group']}>
            <Button className={styles['btn']}>Undergraduate</Button>
            <Button className={styles['btn']}>Graduate</Button>
          </div>
        </div>
      </Tabs>
    </div>
  </Container>
);

export default CreativeSpaces;
