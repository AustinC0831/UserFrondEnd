import { EditOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { margin } from '@mui/system';
import { Avatar, Card ,InputNumber} from 'antd';

const { Meta } = Card;

const Number = () =>{
    return <div>1</div>
}

const Cards = (prop) => {

    const boardName = prop.boardName;
    const description = prop.des;
    
    return(
    <Card hoverable="true" style={{ width: 250 , margin: "3px"}}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <MinusCircleOutlined key="minus" />,
          <InputNumber />,
          <PlusCircleOutlined key="plus" />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={boardName}
          description={description}
        />
        {/* <InputNumber addonBefore={<MinusCircleOutlined />} addonAfter={<PlusCircleOutlined />} defaultValue={0} /> */}
      </Card>)
}

export default Cards