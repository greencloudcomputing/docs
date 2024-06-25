import React, { useEffect } from 'react';
import OriginalDocPage from '@theme-original/DocPage';
import { useLocation } from 'react-router-dom';

export default function DocPage(props) {
  const location = useLocation();
  const isApiCategory = location.pathname === '/category/-api'; // Adjust the path as necessary

  useEffect(() => {
    if (isApiCategory) {
      const articleElement = document.querySelector('article.margin-top--lg');
      if (articleElement && !document.querySelector('.api-info')) {
        const apiInfoDiv = document.createElement('div');
        apiInfoDiv.className = 'api-info';
        apiInfoDiv.innerHTML = `
          <p>
            The base URL for the API is <a href="https://api.greencloud.dev/v1">https://api.greencloud.dev/v1</a>
            </p>
            <p>
            The base URL to access your created public endpoints is <a href="https://api.greencloud.dev/gc">https://api.greencloud.dev/gc</a>
          </p>
        `;
        articleElement.parentNode.insertBefore(apiInfoDiv, articleElement);
      }
    }
  }, [location.pathname]); // Re-run the effect when the pathname changes

  return <OriginalDocPage {...props} />;
}
