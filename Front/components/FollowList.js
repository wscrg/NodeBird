import React from 'react';
import { Card, List, Button } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></List>
  );
};

FollowList.propTypes = {
  header: PropTypes.toString.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
