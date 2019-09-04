// React
import React from 'react'

// React Semantic
import {
  Icon
} from 'semantic-ui-react'

// React Timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
  return (
    <VerticalTimeline
      className="vertical-timeline">

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="feb 2010"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="fire"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">The Spark Behind My Career</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Washington, DC</h4> */}
        <p>As a young adult, experiencing overwhelming stressors from college life, I was diagnosed with an episode of Major Depression. Subsequently, I saw the interpersonal and systemic factors which had failed to prevent my illness. I resolved to live openly about my experiences and advocate on behalf of others, helping them avoid (and conquer) the same challenges.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="may 2011"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="wordpress"
      //     className="timeline-icon" />}
      >
        <h3 className="vertical-timeline-element-title">My First Website</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">The George Washington University</h4> */}
        <p>Before departing for my first international travels, a 3 month backpacking journey across Russia, Mongolia, China, and Nepal– and receiving the nickname I now go by– I created my first website. <em>The Task Eternal</em> was a WordPress-based travel blog, giving me my first taste of WordPress implementation and CSS customization.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="aug 2013"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="university"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">The Bachelor's Degree</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">The George Washington University</h4> */}
        <p>I joined the George Washington University's Human Services & Social Justice program, later graduating with 5 internships in social work, event organizing, research, and nonprofit development. This laid the groundwork for a career focused on social justice while giving me opportunities to improve mental health policies.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="jun 2013"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="certificate"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">The Student Voice of Mental Health Award</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">The Jed Foundation</h4> */}
        <p>The Jed Foundation bestowed me with this prestigious honor for my advocacy efforts at GWU, including my research thesis into youth suicide prevention programming.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="jun 2013"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="microscope"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">The Guideline Development Panel for Depressive Disorders</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">The American Psychological Association</h4> */}
        <p>Joining an international panel of 12 world-renowned clinicians and researchers, I continue to provide insights and expertise, contributing to– and co-authoring– the next generation of psychological and therapeutic treatment guidelines for depressive disorders from the American Psychological Association.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="apr 2014"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="microphone"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">New Voices of Attempt Survivors</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">The Annual American Association of Suicidology Conference</h4> */}
        <p>At the American Association of Suicidology’s Annual Conference, a panel of all suicide attempt survivors was approved and presented for the first time ever. With Dese’Rae L. Stage, Samantha Nadler, and Craig Miller, I testified to the importance of including survivors’ voices in the field of suicide prevention.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="nov 2015"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="briefcase"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">My First Startup</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
        <p>With both my lived and academic experience, I began developing a startup to research strategic treatment referral systems for people seeking a therapist. I continue to develop and research this system with a goal of one day using psychometric data and advanced full stack applications to optimize treatment compatibility and adherence on a large scale.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="may 2017"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="university"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">Testifying to Congress</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>Alongside Congresswoman Grace Napolitano, Congressman John Katko, and titans in the suicide prevention field including David Covington, Jerry Reid, and John Draper, I testified before Congress on the improvement and integration of truly comprehensive crisis care services in preventing suicide.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="oct 2017"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="mountain"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">Climbing Mt. Kilimanjaro for Suicide Prevention</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>While preparing to climb Mount Kilimanjaro, I came to realize it could be bigger than just a vacation. From the depths of my mental health challenges, to standing on the highest peaks in the world, I wanted to use my mountaineering as an analogy for recovery from my challenges. I subsequently launched “Seven Summits for Suicide Prevention.”</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="may 2019"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="mountain"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">Live On Stage From the Grammys</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>As Logic, Alessia Cara, and Khalid performed their Grammy-nominated “1-800-273-8255”, a suicide prevention anthem named after the National Suicide Prevention Lifeline’s crisis number, I stood with 25 other loss and attempt survivors to send the message that those suffering and grieving are not alone.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="may 2019"
        iconStyle={{ background: '#28afb0' }}
      // icon={
      //   <Icon
      //     inverted
      //     fitted
      //     size="big"
      //     name="mountain"
      //     className="timeline-icon" />} 
      >
        <h3 className="vertical-timeline-element-title">Going All In On Software Engineering</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
        <p>After starting a WordPress development firm and becoming frustrated by not having a greater understanding of full stack development, I committed to learning and further enabling my mission of creating mental health technology. This began my 3 month software engineering immersive at General Assembly.</p>
      </VerticalTimelineElement>
    </VerticalTimeline >
  )
}
