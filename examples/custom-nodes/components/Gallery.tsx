/**
 * Custom views in Cocoon have a node and a browser component.
 *
 * The browser part is a React component that will be rendered into the preview
 * area underneath as node in the editor (with a `isPreview={true}` prop), as
 * well as in its own, dedicated view.
 */

import React from 'react';
import styled from 'styled-components';

/**
 * Like nodes, Cocoon expects a named import, with the additional restriction
 * that the name of the export must match the node part of the view (see
 * `../views/Gallery.js`).
 *
 * The contents of the `viewData` prop is the data returned in
 * `serialiseViewData()` in the node part of the view.
 */
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
  height: 100%;
  text-align: center;
  overflow-y: scroll;
  & img {
    height: ${(props: { isPreview: boolean }) =>
      props.isPreview ? '50px' : '200px'};
    margin: 2px;
  }
`;
