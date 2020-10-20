import React, { useState } from 'react';

function ReadMoreButton({ children, maxCharecterCount }) {
  const text = children;

  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxCharecterCount) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <p>
      {resultString}
      <span
        onClick={toggleIsTruncated}
        style={{ color: '#edd224', cursor: 'pointer' }}
      >

        {text.length > maxCharecterCount ? (isTruncated ? '...read more' : 'read less') : '' }
        {/* // {isTruncated ? '...read more' : 'read less'} */}
      </span>
    </p>
  );
}

export default function ReadMore(props) {
  return (
    <>
      <ReadMoreButton maxCharecterCount={props.maximumCount}>
        {props.content}
      </ReadMoreButton>
    </>
  );
}
