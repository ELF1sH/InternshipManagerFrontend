import React from 'react';

import DndFileUpload, { DndFileUploadProps } from 'pages/profile/modals/uploadReport/content/components/DndFIleUpload';

const UploadReportModalContent: React.FC<DndFileUploadProps> = (props) => (
  <DndFileUpload {...props} />
);

export default UploadReportModalContent;
