import React from 'react'

import PLeitao from 'assets/images/people_pleitao.jpg'
import APereira from 'assets/images/people_apereira.jpg'
import JLima from 'assets/images/people_jlima.jpg'
import Profile from 'layouts/main/components/profile'

const profileData = [
  {
    title: 'Paulo Leitão',
    subtitle: 'Coordinator',
    image: PLeitao,
    bio: () => (
      <p>
        <strong>Paulo Jorge Pinto Leitão</strong> received the MSc and PhD degrees in Electrical and Computer Engineering,
        both from the University of Porto, in 1997 and 2004, respectively. He joined the Polytechnic Institute of Bragança
        in 1995, where he is Professor at the Department of Electrical Engineering. His research interests are in the field
        of intelligent and reconfigurable systems, cyber-physical systems, Internet of Things, multi-agent systems and self-organized
        systems. He participated in several R&amp;D projects (e.g., EU GO0DMAN, PERFoRM, ARUM and GRACE) and Networks of Excellence
        (e.g. IMS and CONET), served as general co-chair of several international conferences, namely IFAC IMS’10, HoloMAS’11, IEEE
        ICARSC’16 and SOHOMA'16, and published more than 200 papers in international scientific journals and conference proceedings.
        He is co-author of three patents and received four paper awards at INCOM’06, BASYS’06, INDIN’10 and INFOCOMP’13 conferences.
        Dr. Leitão is Senior member of IEEE Industrial Electronics Society (IES) and Systems, Man and Cybernetics Society (SMCS),
        past Chair of the IEEE IES Technical Committee on Industrial Agents and member at-large of the IEEE IES Administrative Committee (AdCom).
        Currently he is chair of the IEEE Standards Association P2660.1 Working Group.
      </p>
    )
  },
  {
    title: 'Ana Isabel Pereira',
    subtitle: 'Sub-coordinator',
    image: APereira,
    bio: () => (
      <p>
        <strong>Ana Isabel Pinheiro Nunes Pereira</strong>, Coordinator Professor at the Department of Mathematics,
        Polytechnic Institute of Bragança, and she is a member of the Research Centre in Digitalization and Intelligent Robotics
        (CeDRI) - Polytechnic Institute of Bragança - and Algorithm Research Centre – Minho University. She also is
        Direction Member of Braganza “Ciência Viva” Science Centre. She got her PhD at Minho University (2006)
        in ‘Numerical Optimization’ area. She is author or co-author of more than sixty journal papers, book
        chapters and conference proceedings. She participates in more than ten research projects in the
        areas of robotics, optimization and innovate tools in teaching. In particularly she was the IPB coordinator
        of the following projects: Strategic Partnerships “E-Learning from Nature” with objective to promote
        science among secondary students (2015-2017), “Games Laboratory”, financed by Agência Ciência Viva
        (2013-2015), “Braganza@Science”, financed by Agência Ciência Viva (2013-2016) and “Eureka –
        Mathematical Games” also financed by Agência Ciência Viva (2006-2008).
      </p>
    )
  },
  {
    title: 'José Lima',
    subtitle: 'Sub-coordinator',
    image: JLima,
    bio: () => (
      <p>
        <strong>José Luís Sousa de Magalhães Lima</strong>(male) received the M.Sc. and PhD in Electrical and Computer
        Engineering on Faculty of Engineering of University of Porto, Portugal in 2001 and 2009.
        He joined the Polytechnic Institute of Bragança in 2002, and currently he is a Professor in
        the Electrical Engineering Department of that school. He is also a senior researcher in
        Centre for Robotics in Industry and Intelligent Systems group of the INESC-TEC
        (Institute for Systems and Computer Engineering of Porto, Portugal).
        He has published more than 70 papers in international scientific journals and conference proceedings.
        In addition, he participated in some autonomous mobile robotics competitions and applications.
        Moreover, his research interests are in the field of robotics and automation: simulation, path planning,
        artificial vision, mobile robot localization and navigation, obstacle avoidance and perception.
        He participated in some national, FP7 and H2020 funded projects such as Produtech, Grace, Arum, Carlos,
        Stamina and ColRobot.
      </p>
    )
  }
]

export default () => (
  <Profile profileData={profileData} />
)
