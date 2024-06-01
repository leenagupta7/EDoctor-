import React from 'react'
import Services from './Services'
import PaymentIcon from '@mui/icons-material/Payment';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import VideoCallIcon from '@mui/icons-material/VideoCall';
const Provide = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Services icon={<GroupIcon style={{ color: "rgb(46, 200, 150)", fontSize:'56px'}} />} heading={"Certified doctors"} para={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque expedita."}/>
      <Services icon={<PaymentIcon style={{ color: "rgb(46, 200, 150)", fontSize:'56px'}} />} heading={"Card Payments"} para={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque expedita."}/>
      <Services icon={<CalendarTodayIcon style={{ color: "rgb(46, 200, 150)", fontSize:'56px'}} />} heading={"Short terms"} para={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque expedita."}/>
      <Services icon={<MedicalServicesIcon style={{ color: "rgb(46, 200, 150)", fontSize:'56px'}} />} heading={"Natural medicine"} para={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque expedita."}/>
      <Services icon={<WorkHistoryIcon style={{ color: "rgb(46, 200, 150)", fontSize:'56px'}} />} heading={"Patient History"} para={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque expedita."}/>
      <Services icon={<VideoCallIcon style={{ color: "rgb(46, 200, 150)", fontSize:'56px'}} />} heading={"Online Conference"} para={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque expedita."}/>
    </div>
  )
}

export default Provide
