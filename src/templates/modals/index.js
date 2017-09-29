import React from 'react';
import ReactDOM from 'react-dom';
import ModalsWrapper from "./ModalsWrapper";
import './modals.scss';


ReactDOM.render(
  <ModalsWrapper itemId='scheduleShowing-1'/>,
  document.getElementById('scheduleShowing-1')
);
ReactDOM.render(
  <ModalsWrapper itemId='scheduleShowing-2'/>,
  document.getElementById('scheduleShowing-2')
);