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
        date="2011 - present"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#28afb0' }}
        icon={
          <Icon
            inverted
            size="big"
            name="university"
            className="timeline-icon" />} />
    </VerticalTimeline >
  )
}
