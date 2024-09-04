import { Col, InputNumber, Row, Slider, Typography } from 'antd';
import { useState } from 'react';

export const IntegerStep = () => {
  const [inputValue, setInputValue] = useState<number>(1);

  const onChange = (newValue: number | null) => {
    if (newValue !== null) {
      setInputValue(newValue);
    }
  };

  return (
    <Row align="middle">
      <Typography className="spatial-filters">Sharpness</Typography>
      <Col span={12}>
        <Slider min={1} max={100} onChange={onChange} value={inputValue} />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={100}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
