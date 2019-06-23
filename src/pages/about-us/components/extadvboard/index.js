import React from 'react'

import AColombo from 'assets/images/people_acolombo.jpg'
import DMcFarlane from 'assets/images/people_dmcfarlane.jpg'
import Skarnouskos from 'assets/images/people_skarnouskos.jpg'

import Profile from 'layouts/main/components/profile'

const profileData = [
  {
    title: 'Armando W. Colombo',
    subtitle: 'Hochschule Emden-Leer, Germany',
    image: AColombo,
    bio: () => (
      <p>
        Prof. Dr.-Ing. <strong>Armando Walter Colombo</strong> (Fellow IEEE) joined the Department of Electrotechnical and Industrial Informatics at the University of Applied Sciences Emden-Leer, Germany, became Full Professor in August 2010 and Director of the Institute for Industrial Informatics, Automation and Robotics (I2AR) in 2012. He worked during
        the last 17 years as Manager for Collaborative Projects and also as Edison Level 2 Group Senior Expert at Schneider Electric, Industrial Business Unit.
        He received the BSc. on Electronics Engineering from the National Technological University of Mendoza, Argentina, in 1990, the MSc. on Control System Engineering from the National University of San Juan, Argentina, in 1994, and the Doctor degree in Engineering from the University of Erlangen-Nuremberg, Germany, in 1998. From 1999 to 2000 was Adjunct Professor in the Group of Robotic Systems and CIM, Faculty of Technical Sciences, New University of Lisbon, Portugal.
        Prof. Colombo has extensive experience in managing multi-cultural research teams in multi-regional projects. He has participated in leading positions in many international research and innovation projects, managing an R&D&I total (European Union authorized) budget of ~30,00 Mio EURO in the last 12 years.
        His research interests are in the fields of industrial cyber-physical systems, industrial digitalization and system-of-systems engineering, Internet-of-Services, Industry 4.0-compliant solutions. Prof. Colombo has over 30 industrial patents and more than 300 per-review publications in journals, books, chapters of books and conference proceedings (see https://scholar.google.com/citations?user=csLRR18AAAAJ). With his contributions, he has performed scientific and technical seminal contributions that are nowadays being used as one
        of the basis of what is recognized as “The 4th Industrial Revolution”: networked collaborative smart cyber-physical systems that are penetrating the daily life, producing visible societal changes and impacting all levels of the society.
        He is co-founder of the IEEE IES TC on Industrial Agents and TC on Industrial Informatics. He is founder and currently Chairman of the IEEE IES TC on Industrial Cyber-Physical Systems and member of the IEEE IES Administrative Committee (AdCom).
        Prof. Colombo served/s as advisor/expert for the definition of the R&amp;D&amp;I priorities within the Framework Programs FP6, FP7 and HORIZON 2020 of the European Union, and he is working as expert/evaluator in the European Research Executive Agency (REA), ECSEL, Eureka- and German BMBF/DLR IKT-Programs.
        Prof. Colombo is listed in Who’s Who in the World /Engineering 99-00/01 and in Outstanding People of the XX Century (Bibliographic Centre Cambridge, UK).
      </p>
    )
  },
  {
    title: 'Duncan McFarlane',
    subtitle: 'Cambridge University, UK',
    image: DMcFarlane,
    bio: () => (
      <p>
        <strong>Duncan McFarlane</strong> is Professor of Industrial Information Engineering at the University of Cambridge and Honorary Visiting Professor at University of Melbourne. He has been involved in the design and operation of industrial automation and information systems for twenty-five years.  His research work has been in distributed, intelligent industrial automation, reconfigurable control systems, resilient control, RFID integration, track and trace systems, IoT and valuing industrial information.  In 1993 he was a founding member of the Holonic Manufacturing Systems consortium examining the role of distributed AI in manufacturing control for the first time. Since 2000 he has been Director of the Auto ID Centre [2000-3] and Auto ID Labs [2003- present] – a programme which has led to the origins of ideas such as Internet of Things and Product Intelligence.  He is founder and Chairman of RedBite Solutions Ltd - an industrial RFID and track & trace solutions company and is involved in Innovate UK IoT demonstrator developments around the emerging Hypercat Standard. His research involves major companies such as Boeing, Laing O'Rourke, Unilever, GSK, BT, Siemens and Foxconn. He leads the Cambridge – Boeing research partnership. He is a member of the steering board of the Centre for Smart Infrastructure and Construction. He has recently led a study on Automation 2050 for the UK Ministry of Defence. He leads the Digital Manufacturing Programme at Cambridge, is currently part of the UK Digital For Industry D4I steering group and has recently been advising on digital aspects in the the Victorian Government's 2017 Advanced Manufacturing Statement in Australia. He is a member of the Management Board of the Centre for Digital Build Britain.
      </p>
    )
  },
  {
    title: 'Stamatis Karnouskos',
    subtitle: 'SAP, Germany',
    image: Skarnouskos,
    bio: () => (
      <p>
        <strong>Stamatis Karnouskos</strong> is with SAP (Germany) as an expert on emerging industrial technologies related to the Internet of Things and Enterprise systems. He investigates the added value of integrating networked embedded devices and enterprise systems. For more than 20 years Stamatis leads efforts in several European Commission and industry-funded projects related to industrial automation, smart grids, Internet/cloud-based services and architectures, software agents, security, and mobility. Stamatis has extensive experience with different units of the European Commission as well as national research funding bodies in Germany, France, Switzerland, Denmark & Greece. He has served on the technical advisory board of Internet Protocol for Smart Objects Alliance (IPSO), and the Permanent Stakeholder Group of the European Network and Information Security Agency (ENISA). He is a Senior Member of the IEEE and ACM. Stamatis has co-authored/edited several books, and published technical articles in leading journals and conferences.
      </p>
    )
  }
]

export default () => (
  <Profile profileData={profileData} />
)
