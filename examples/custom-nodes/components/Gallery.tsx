import React from 'react';
import styled from 'styled-components';

export const Gallery = ({ isPreview, viewData }) => (
  <Wrapper isPreview={isPreview}>
    {viewData.map(item => (
      <img
        key={item.title}
        title={item.title}
        src={item.wikipedia.imageinfo[0].url}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  overflow-y: scroll;
  & img {
    height: ${(props: { isPreview: boolean }) =>
      props.isPreview ? '50px' : '200px'};
    margin: 2px;
  }
`;
