import React from 'react';
import { connect } from 'react-redux';


interface Alert {
  id: number;
  alertType: string;
  msg: string;
}

interface AlertProps {
  alerts: Alert[];
}

const Alert: React.FC<AlertProps> = ({ alerts }) => (
  <div className="alert-wrapper">
    {alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ))}
  </div>
);

const mapStateToProps = (state: { alert: Alert[] }) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);






