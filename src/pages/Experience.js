import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

const Experience = () => {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date="2007-2011"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className='vertical-timeline-element-title'>Telecommunication</h3>
                    <h4 className='vertical-timeline-element-subtitle'>ZSE Kielce</h4>
                    <p>Technician</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date="2011-2015"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className='vertical-timeline-element-title'>Power Engineering</h3>
                    <h4 className='vertical-timeline-element-subtitle'>Kielce University of Technology</h4>
                    <p>Bachelor of Engineering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                    date="2015-2016"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}>
                    <h3 className='vertical-timeline-element-title'>Electrotechnics</h3>
                    <h4 className='vertical-timeline-element-subtitle'>Kielce University of Technology</h4>
                    <p>Master of Science</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date="2016-2018"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className='vertical-timeline-element-title'>Design Engineer</h3>
                    <h4 className='vertical-timeline-element-subtitle'>ZPUE S.A.</h4>
                    <p>Designing LV, MV switchgears and transformer substations. Creating Technical and Operating Documentation. Technical support for the sales department.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                    date="2018-present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}>
                    <h3 className='vertical-timeline-element-title'>Revit Expert / Senior Assistant Electrical Engineer </h3>
                    <h4 className='vertical-timeline-element-subtitle'>PM Group</h4>
                    <p> Preparation of layouts, diagrams and calculations for industrial facilities in the food, pharmaceutical, manufacturing and aviation industries. 3D modeling using the Autodesk Revit environment, model managment and multidiscipline coordination. Conducting Autodesk Revit trainings for electrical team</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience