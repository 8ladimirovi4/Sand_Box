import { Upload, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

const FileUpload = () => {
  const [filePath, setFilePath] = useState('');

  const handleChange = info => {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      // Ant Design doesn't provide direct access to file path due to security reasons,
      // but you can set the file name as a placeholder.
      setFilePath(info.file.name);
    }
  };

  return (
    <div>
      <Upload beforeUpload={() => false} onChange={handleChange}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};

export default FileUpload;