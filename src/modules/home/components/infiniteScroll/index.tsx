import React from 'react';

const textItems = [
  { text: "LIMITED TIME OFFER FASHION SALE YOU CAN'T RESIST" },
  { text: 'EASY SHIPPING' },
  { text: "NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS" },
];

const InfiniteScroll = () => {
  return (
    <div className="bg-yellow-200 scroller flex overflow-hidden" data-speed="fast">
      <ul className="tag-list flex animate-scroll whitespace-nowrap gap-8 py-2 items-center" role="list">
        {textItems.map((item, index) => (
          <React.Fragment key={index}>
            <li className="px-4 py-2 text-base flex items-center">
              {item.text}
            </li>
            {index !== textItems.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="self-end"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z"></path>
              </svg>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScroll;