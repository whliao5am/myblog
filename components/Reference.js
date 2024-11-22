// components/Reference.js
import React from 'react';

const convertMarkdownLinkToHtml = (text) => {
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const replacement = '<a href="$2" style="color: gray; text-decoration: none;">$1</a>';
  return text.replace(markdownLinkRegex, replacement);
};

const Reference = ({ id, index, children }) => {
  // Ensure children is a string before converting
  const content = typeof children === 'string' ? convertMarkdownLinkToHtml(children) : children;

  return (
    <div id={id} style={{ color: 'gray' }}>
      <span style={{ color: 'gray' }}>[{index}]</span>
      <span style={{ marginLeft: '5px' }}>
        {typeof content === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
      </span>
    </div>
  );
}

export default Reference;