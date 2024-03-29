import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as BookmarkSvg } from '../../resources/bookmark.svg';
import KakaoInterfaceContext from '../../context/kakaoInterface.js';

const Wrapper = styled.div`
  position: relative;
  &:hover {
    button {
      display: inline-block;
    }
    time {
      display: none;
    }
  }
`;

const Text = styled.span`
  display: inline-block;
  min-height: 32px;
  max-width: calc(100% - 80px);
  word-break: break-all;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--text-dark);
`;

const Timestamp = styled.time`
  font-size: 14px;
  vertical-align: -50%;
  color: var(--text-light-medium);
  display: inline-block;
`;

const BookmarkIcon = styled( BookmarkSvg )`
  fill: var(--text-dark);
  left: 50%;
  top: 50%;
  position: absolute;
  width: 18px;
  transform: translate(-50%, -50%);
`;

const BookmarkButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  opacity: 0.6;
  background: var(--color-light);
  position: relative;
  bottom: 8px;
  position: absolute;
  outline: none;
  display: none;
  cursor: pointer;
  &:active {
    background: var(--color-point);
  }
`;

const TIME_SPLITTER = / (?=오)/;

function SpeechBubble({ className, text, timestamp, cursor }) {
  
  const {toggleBookmark} = useContext( KakaoInterfaceContext );
  const currentTime = timestamp.split( TIME_SPLITTER )[1];

  const toggle = e => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark({ text, timestamp, cursor });
  };

  return (
    <Wrapper className={className}>
      <Text>
        {text}
      </Text>
      <Timestamp>
        {currentTime}
      </Timestamp>
      <BookmarkButton onClick={toggle}>
        <BookmarkIcon />
      </BookmarkButton>
    </Wrapper>
  );
}

export default SpeechBubble;
