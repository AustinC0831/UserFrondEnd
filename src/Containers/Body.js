import { useState } from 'react';
import { Button, message, Steps } from 'antd';
import styled from 'styled-components';
import Cards from './Cards';

const Page = styled.div`
  margin: auto;
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap
`;

const defaultDescription = "This is the description";

const Body = () => {
  const steps = [
    {
      title: '1.挑選開發版',
    },
    {
      title: '2.確認清單'
    },
    {
      title: '3.成功'
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {setCurrent(current + 1);};

  const prev = () => {setCurrent(current - 1);};
  
  const items = steps.map(item => ({ key: item.title, title: item.title }));

  const page1 = <Page>
                  <Cards boardName="Arduino" des={defaultDescription}/>
                  <Cards boardName="STM32" des={defaultDescription} />
                  <Cards boardName="主機板" des={defaultDescription} /> 
                  <Cards boardName="主機板" des={defaultDescription} /> 
                  <Cards boardName="主機板" des={defaultDescription} /> 
                  <Cards boardName="主機板" des={defaultDescription} /> 
                  <Cards boardName="主機板" des={defaultDescription} /> 
                  <Cards boardName="主機板" des={defaultDescription} /> 
                </Page>
  const page2 = <Page></Page>
  const page3 = <Page></Page>

  var pages = [page1,page2,page3]




  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{pages[current]}</div> {/* 等等換 */}
     
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Body;
