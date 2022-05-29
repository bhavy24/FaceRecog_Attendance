
import { Card, } from 'antd';
import { LoadingOutlined, CheckOutlined } from '@ant-design/icons';
import React from 'react';
import {
  isFaceDetectionModelLoaded,
  isFeatureExtractionModelLoaded,
  isFacialLandmarkDetectionModelLoaded,
} from '../faceUtil';

const tick = {
    backgroundColor:"green",
    color:"white",
    borderRadius: "1000px",
    padding: "4px"
}
export default ({ errorMessage }) => (
  <Card style={{ opacity: 0.8 }}>
    <p>
      Face Detector:{' '}
      {isFaceDetectionModelLoaded() ? (
        <span style ={tick}><CheckOutlined /></span>
      ) :
        errorMessage && errorMessage.length > 0 ?
          (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              ERROR
            </span>
          ) :
          (
            <>
              <strong>Loading</strong> <LoadingOutlined />
            </>)}
    </p>
    <p>
      Facial Landmark Detector:{' '}
      {isFacialLandmarkDetectionModelLoaded() ? (
        <span style ={tick}><CheckOutlined /></span>
      ) :
        errorMessage && errorMessage.length > 0 ?
          (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              ERROR
            </span>
          ) : (
            <>
              <strong>Loading</strong> <LoadingOutlined />
            </>)}
    </p>
    <p>
      Feature Extractor:{' '}
      {isFeatureExtractionModelLoaded() ? (
        <span style ={tick}><CheckOutlined /></span>
      ) :
        errorMessage && errorMessage.length > 0 ?
          (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              ERROR
            </span>
          ) : (
            <>
              <strong>Loading</strong> <LoadingOutlined />
            </>)}
    </p>
  </Card>
);
