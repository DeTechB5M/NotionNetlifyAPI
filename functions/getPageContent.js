
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const NotionRenderer = require('react-notion-x').NotionRenderer;
const NotionAPI = require('notion-client').NotionAPI;

const notion = new NotionAPI();
//const notionStyles = require('../helpers/styles.css')
let css = `.notion {
    --fg-color: rgb(55, 53, 47);
    --fg-color-0: rgba(55, 53, 47, 0.09);
    --fg-color-1: rgba(55, 53, 47, 0.16);
    --fg-color-2: rgba(55, 53, 47, 0.4);
    --fg-color-3: rgba(55, 53, 47, 0.6);
    --fg-color-4: #000;
    --fg-color-5: rgba(55, 53, 47, 0.024);
    --fg-color-6: rgba(55, 53, 47, 0.8);
    --fg-color-icon: var(--fg-color);
  
    --bg-color: #fff;
    --bg-color-0: rgba(135, 131, 120, 0.15);
    --bg-color-1: rgb(247, 246, 243);
    --bg-color-2: rgba(135, 131, 120, 0.15);
  
    --select-color-0: rgb(46, 170, 220);
    --select-color-1: rgba(45, 170, 219, 0.3);
    --select-color-2: #d9eff8;
  
    --notion-red: rgb(224, 62, 62);
    --notion-pink: rgb(173, 26, 114);
    --notion-blue: rgb(11, 110, 153);
    --notion-purple: rgb(105, 64, 165);
    --notion-teal: rgb(15, 123, 108);
    --notion-yellow: rgb(223, 171, 1);
    --notion-orange: rgb(217, 115, 13);
    --notion-brown: rgb(100, 71, 58);
    --notion-gray: rgb(155, 154, 151);
  
    --notion-red_background: rgb(251, 228, 228);
    --notion-pink_background: rgb(244, 223, 235);
    --notion-blue_background: rgb(221, 235, 241);
    --notion-purple_background: rgb(234, 228, 242);
    --notion-teal_background: rgb(221, 237, 234);
    --notion-yellow_background: rgb(251, 243, 219);
    --notion-orange_background: rgb(250, 235, 221);
    --notion-brown_background: rgb(233, 229, 227);
    --notion-gray_background: rgb(235, 236, 237);
  
    --notion-red_background_co: rgba(251, 228, 228, 0.3);
    --notion-pink_background_co: rgba(244, 223, 235, 0.3);
    --notion-blue_background_co: rgba(221, 235, 241, 0.3);
    --notion-purple_background_co: rgba(234, 228, 242, 0.3);
    --notion-teal_background_co: rgba(221, 237, 234, 0.3);
    --notion-yellow_background_co: rgba(251, 243, 219, 0.3);
    --notion-orange_background_co: rgba(250, 235, 221, 0.3);
    --notion-brown_background_co: rgba(233, 229, 227, 0.3);
    --notion-gray_background_co: rgba(235, 236, 237, 0.3);
  
    --notion-item-blue: rgba(0, 120, 223, 0.2);
    --notion-item-orange: rgba(245, 93, 0, 0.2);
    --notion-item-green: rgba(0, 135, 107, 0.2);
    --notion-item-pink: rgba(221, 0, 129, 0.2);
    --notion-item-brown: rgba(140, 46, 0, 0.2);
    --notion-item-red: rgba(255, 0, 26, 0.2);
    --notion-item-yellow: rgba(233, 168, 0, 0.2);
    --notion-item-default: rgba(206, 205, 202, 0.5);
    --notion-item-purple: rgba(103, 36, 222, 0.2);
    --notion-item-gray: rgba(155, 154, 151, 0.4);
  }
  
  .notion-dark {
    --fg-color: rgba(255, 255, 255, 0.9);
    --fg-color-0: var(--fg-color);
    --fg-color-1: var(--fg-color);
    --fg-color-2: var(--fg-color);
    --fg-color-3: var(--fg-color);
    --fg-color-4: var(--fg-color);
    --fg-color-5: rgba(255, 255, 255, 0.7);
    --fg-color-icon: #fff;
  
    --bg-color: #2f3437;
    --bg-color-0: rgb(71, 76, 80);
    --bg-color-1: rgb(63, 68, 71);
    --bg-color-2: rgba(135, 131, 120, 0.15);
  
    --notion-red: rgb(255, 115, 105);
    --notion-pink: rgb(226, 85, 161);
    --notion-blue: rgb(82, 156, 202);
    --notion-purple: rgb(154, 109, 215);
    --notion-teal: rgb(77, 171, 154);
    --notion-yellow: rgb(255, 220, 73);
    --notion-orange: rgb(255, 163, 68);
    --notion-brown: rgb(147, 114, 100);
    --notion-gray: rgba(151, 154, 155, 0.95);
    --notion-red_background: rgb(89, 65, 65);
    --notion-pink_background: rgb(83, 59, 76);
    --notion-blue_background: rgb(54, 73, 84);
    --notion-purple_background: rgb(68, 63, 87);
    --notion-teal_background: rgb(53, 76, 75);
    --notion-yellow_background: rgb(89, 86, 59);
    --notion-orange_background: rgb(89, 74, 58);
    --notion-brown_background: rgb(67, 64, 64);
    --notion-gray_background: rgb(69, 75, 78);
    --notion-red_background_co: rgba(89, 65, 65, 0.3);
    --notion-pink_background_co: rgba(83, 59, 76, 0.3);
    --notion-blue_background_co: rgba(120, 162, 187, 0.3);
    --notion-purple_background_co: rgba(68, 63, 87, 0.3);
    --notion-teal_background_co: rgba(53, 76, 75, 0.3);
    --notion-yellow_background_co: rgba(89, 86, 59, 0.3);
    --notion-orange_background_co: rgba(89, 74, 58, 0.3);
    --notion-brown_background_co: rgba(67, 64, 64, 0.3);
    --notion-gray_background_co: rgba(69, 75, 78, 0.3);
  }
  
  .notion {
    font-size: 16px;
    line-height: 1.5;
    color: var(--fg-color);
    caret-color: var(--fg-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  
  .notion > * {
    padding: 3px 0;
  }
  
  .notion * {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  
  .notion *::selection {
    background: var(--select-color-1);
  }
  
  .notion *,
  .notion *:focus {
    outline: 0;
  }
  
  .notion-app {
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: var(--bg-color);
  }
  
  .notion-cursor-listener {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex: 1 1 0%;
    background: var(--bg-color);
  }
  
  .medium-zoom-overlay {
    z-index: 100;
  }
  
  .medium-zoom-image {
    border-radius: 0;
    z-index: 101;
  }
  
  .notion-frame {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
  
  .notion-page-scroller {
    display: flex;
    flex-direction: column;
    z-index: 1;
    flex-grow: 1;
    position: relative;
    align-items: center;
    overflow: hidden auto;
    margin-right: 0;
    margin-bottom: 0;
  }
  
  .notion-red,
  .notion-red_co {
    color: var(--notion-red);
  }
  .notion-pink,
  .notion-pink_co {
    color: var(--notion-pink);
  }
  .notion-blue,
  .notion-blue_co {
    color: var(--notion-blue);
  }
  .notion-purple,
  .notion-purple_co {
    color: var(--notion-purple);
  }
  .notion-teal,
  .notion-teal_co {
    color: var(--notion-teal);
  }
  .notion-yellow,
  .notion-yellow_co {
    color: var(--notion-yellow);
  }
  .notion-orange,
  .notion-orange_co {
    color: var(--notion-orange);
  }
  .notion-brown,
  .notion-brown_co {
    color: var(--notion-brown);
  }
  .notion-gray,
  .notion-gray_co {
    color: var(--notion-gray);
  }
  .notion-red_background {
    background-color: var(--notion-red_background);
  }
  .notion-pink_background {
    background-color: var(--notion-pink_background);
  }
  .notion-blue_background {
    background-color: var(--notion-blue_background);
  }
  .notion-purple_background {
    background-color: var(--notion-purple_background);
  }
  .notion-teal_background {
    background-color: var(--notion-teal_background);
  }
  .notion-yellow_background {
    background-color: var(--notion-yellow_background);
  }
  .notion-orange_background {
    background-color: var(--notion-orange_background);
  }
  .notion-brown_background {
    background-color: var(--notion-brown_background);
  }
  .notion-gray_background {
    background-color: var(--notion-gray_background);
  }
  .notion-red_background_co {
    background-color: var(--notion-red_background_co);
  }
  .notion-pink_background_co {
    background-color: var(--notion-pink_background_co);
  }
  .notion-blue_background_co {
    background-color: var(--notion-blue_background_co);
  }
  .notion-purple_background_co {
    background-color: var(--notion-purple_background_co);
  }
  .notion-teal_background_co {
    background-color: var(--notion-teal_background_co);
  }
  .notion-yellow_background_co {
    background-color: var(--notion-yellow_background_co);
  }
  .notion-orange_background_co {
    background-color: var(--notion-orange_background_co);
  }
  .notion-brown_background_co {
    background-color: var(--notion-brown_background_co);
  }
  .notion-gray_background_co {
    background-color: var(--notion-gray_background_co);
  }
  
  .notion-item-blue {
    background-color: var(--notion-item-blue);
  }
  .notion-item-orange {
    background-color: var(--notion-item-orange);
  }
  .notion-item-green {
    background-color: var(--notion-item-green);
  }
  .notion-item-pink {
    background-color: var(--notion-item-pink);
  }
  .notion-item-brown {
    background-color: var(--notion-item-brown);
  }
  .notion-item-red {
    background-color: var(--notion-item-red);
  }
  .notion-item-yellow {
    background-color: var(--notion-item-yellow);
  }
  .notion-item-default {
    background-color: var(--notion-item-default);
  }
  .notion-item-purple {
    background-color: var(--notion-item-purple);
  }
  .notion-item-gray {
    background-color: var(--notion-item-gray);
  }
  
  .notion b {
    font-weight: 600;
  }
  
  .notion-title {
    width: 100%;
    font-size: 2.5em;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .notion-h1,
  .notion-h2,
  .notion-h3 {
    font-weight: 600;
    line-height: 1.3;
    padding: 3px 2px;
    margin-bottom: 1px;
  
    max-width: 100%;
    width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  .notion-h1 {
    font-size: 1.875em;
    margin-top: 1.08em;
  }
  
  .notion-title + .notion-h1,
  .notion-title + .notion-h2,
  .notion-title + .notion-h3 {
    margin-top: 0;
  }
  /* TODO: notion-page-content */
  .notion-h1:first-child {
    margin-top: 0;
  }
  /* .notion-h1:first-of-type {
    margin-top: 2px;
  } */
  .notion-h2 {
    font-size: 1.5em;
    margin-top: 1.1em;
  }
  .notion-h3 {
    font-size: 1.25em;
    margin-top: 1em;
  }
  
  .notion-h1:hover .notion-hash-link,
  .notion-h2:hover .notion-hash-link,
  .notion-h3:hover .notion-hash-link {
    opacity: 1;
  }
  
  .notion-hash-link {
    opacity: 0;
    text-decoration: none;
    float: left;
    margin-left: -20px;
    padding-right: 4px;
  }
  
  .notion-page-cover {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 30vh;
    min-height: 30vh;
    padding: 0;
  }
  
  .notion-page {
    position: relative;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: flex-start;
    width: 708px;
    max-width: 100%;
  }
  
  .notion-full-page {
    padding-bottom: calc(max(10vh, 120px));
  }
  
  .notion-page-offset {
    margin-top: 96px;
  }
  
  span.notion-page-icon-cover {
    display: block;
    height: 78px;
    width: 78px;
    font-size: 78px;
    line-height: 1.1;
    margin-left: 0;
    color: var(--fg-color-icon);
  }
  
  span.notion-page-icon-offset {
    margin-top: -42px;
  }
  
  img.notion-page-icon-cover {
    display: block;
    border-radius: 3px;
    width: 124px;
    height: 124px;
    margin: 8px;
  }
  
  img.notion-page-icon-offset {
    margin-top: -80px;
  }
  
  .notion-full-width {
    width: 100%;
    padding: 0 calc(min(96px, 8vw));
  }
  
  .notion-small-text {
    font-size: 14px;
  }
  
  .notion-quote {
    white-space: pre-wrap;
    word-break: break-word;
    border-left: 3px solid currentcolor;
    padding: 0.2em 0.9em;
    margin: 6px 0;
    font-size: 1.2em;
  }
  
  .notion-hr {
    width: 100%;
    margin: 6px 0;
    padding: 0;
    border-top: none;
    border-color: var(--fg-color-0);
  }
  
  .notion-link {
    color: inherit;
    word-break: break-word;
    text-decoration: inherit;
    border-bottom: 0.05em solid;
    border-color: var(--fg-color-2);
    opacity: 0.7;
    transition: border-color 100ms ease-in, opacity 100ms ease-in;
  }
  
  .notion-link:hover {
    border-color: var(--fg-color-6);
    opacity: 1;
  }
  
  .notion-collection .notion-link {
    opacity: 1;
  }
  
  .notion-blank {
    width: 100%;
    min-height: 1rem;
    padding: 3px 2px;
    margin-top: 1px;
    margin-bottom: 1px;
  }
  
  .notion-page-link {
    display: flex;
    color: var(--fg-color);
    text-decoration: none;
    width: 100%;
    height: 30px;
    margin: 1px 0;
    transition: background 120ms ease-in 0s;
  }
  
  .notion-page-link:hover {
    background: var(--bg-color-0);
  }
  
  .notion-page-icon {
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', NotoColorEmoji,
      'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji', EmojiSymbols;
    font-size: 1.1em;
    margin: 2px 4px 0 2px;
    fill: var(--fg-color-6);
    color: var(--fg-color-icon);
  }
  
  img.notion-page-icon,
  svg.notion-page-icon {
    display: block;
    object-fit: cover;
    border-radius: 3px;
    /* padding: 1px; */
    max-width: 22px;
    max-height: 22px;
  }
  
  .notion-icon {
    display: block;
    width: 18px;
    height: 18px;
    color: var(--fg-color-icon);
  }
  
  .notion-page-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    line-height: 1.3;
    border-bottom: 1px solid var(--fg-color-1);
    margin: 4px 0;
  }
  
  .notion-inline-code {
    color: #eb5757;
    padding: 0.2em 0.4em;
    background: var(--bg-color-2);
    border-radius: 3px;
    font-size: 85%;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
  }
  
  .notion-inline-underscore {
    text-decoration: underline;
  }
  
  .notion-list {
    margin: 0;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }
  
  .notion-list-disc {
    list-style-type: disc;
    padding-inline-start: 1.7em;
    margin-top: 0;
    margin-bottom: 0;
  }
  .notion-list-numbered {
    list-style-type: decimal;
    padding-inline-start: 1.6em;
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .notion-list-disc li {
    padding-left: 0.1em;
  }
  
  .notion-list-numbered li {
    padding-left: 0.2em;
  }
  
  .notion-list li {
    padding: 6px 0;
    white-space: pre-wrap;
  }
  
  .notion-asset-wrapper {
    margin: 0.5rem 0;
    max-width: 100vw;
    min-width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
  }
  
  .notion-asset-wrapper-image {
    max-width: 100%;
  }
  
  .notion-asset-wrapper-full {
    max-width: 100vw;
  }
  
  .notion-asset-wrapper img {
    width: 100%;
    max-height: 100%;
  }
  
  .notion-asset-wrapper iframe {
    border: none;
    background: rgb(247, 246, 245);
  }
  
  .notion-text {
    width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    padding: 3px 2px;
    margin: 1px 0;
  }
  
  .notion-text:first-child {
    margin-top: 2px;
  }
  
  .notion-text-children {
    padding-left: 1.5em;
    display: flex;
    flex-direction: column;
  }
  
  .notion-block {
    padding: 3px 2px;
  }
  
  .notion .notion-code {
    font-size: 85%;
  }
  
  .notion-code {
    width: 100%;
    padding: 30px 16px 30px 20px;
    margin: 4px 0;
    border-radius: 3px;
    tab-size: 2;
    display: block;
    box-sizing: border-box;
    overflow: auto;
    background: var(--bg-color-1);
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
  }
  
  .notion-column {
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  
  .notion-column > *:first-child {
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
  }
  
  .notion-column > *:last-child {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
  
  .notion-row {
    display: flex;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
  }
  
  .notion-bookmark {
    margin: 4px 0;
    width: 100%;
    box-sizing: border-box;
    text-decoration: none;
    border: 1px solid var(--fg-color-1);
    border-radius: 3px;
    display: flex;
    overflow: hidden;
    user-select: none;
  }
  
  .notion-bookmark > div:first-child {
    flex: 4 1 180px;
    padding: 12px 14px 14px;
    overflow: hidden;
    text-align: left;
    color: var(--fg-color);
  }
  
  .notion-bookmark-title {
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 24px;
    margin-bottom: 2px;
  }
  
  .notion-bookmark-description {
    font-size: 12px;
    line-height: 16px;
    opacity: 0.8;
    height: 32px;
    overflow: hidden;
  }
  
  .notion-bookmark-link {
    display: flex;
    margin-top: 6px;
  }
  
  .notion-bookmark-link > img {
    width: 16px;
    height: 16px;
    min-width: 16px;
    margin-right: 6px;
  }
  
  .notion-bookmark-link > div {
    font-size: 12px;
    line-height: 16px;
    color: var(--fg-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notion-bookmark-image {
    flex: 1 1 180px;
    position: relative;
  }
  
  .notion-bookmark-image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  
  .notion-column .notion-bookmark-image {
    display: none;
  }
  
  .notion-spacer {
    width: calc(min(46px, 4vw));
  }
  
  .notion-spacer:last-child {
    display: none;
  }
  
  .notion-asset-object-fit {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 1px;
  }
  
  .notion-image {
    display: block;
    width: 100%;
    border-radius: 1px;
  }
  
  .notion-asset-caption {
    padding: 6px 0 6px 2px;
    white-space: pre-wrap;
    word-break: break-word;
    caret-color: var(--fg-color);
    font-size: 14px;
    line-height: 1.4;
    color: var(--fg-color-3);
  }
  
  .notion-callout {
    padding: 16px 16px 16px 12px;
    display: inline-flex;
    width: 100%;
    border-radius: 3px;
    border-width: 1px;
    align-items: center;
    box-sizing: border-box;
    margin: 4px 0;
    border: 1px solid var(--fg-color-0);
  }
  
  .notion-callout .notion-page-icon {
    align-self: flex-start;
    width: 24px;
    height: 24px;
    font-size: 1.3em;
  }
  
  .notion-callout-text {
    margin-left: 8px;
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  .notion-toggle {
    padding: 3px 2px;
  }
  .notion-toggle > summary {
    cursor: pointer;
    outline: none;
  }
  .notion-toggle > div {
    margin-left: 1.1em;
  }
  
  .notion-collection {
    align-self: center;
    min-width: 100%;
  }
  
  .notion-collection-header {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 4px 2px;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .notion-collection-header-title {
    display: inline-flex;
    align-items: center;
    font-size: 1.25em;
    line-height: 1.2;
    font-weight: 600;
    white-space: pre-wrap;
    word-break: break-word;
    margin-right: 0.5em;
  }
  
  .notion-collection-view-dropdown {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 3px;
    transition: background 120ms ease-in 0s;
  }
  
  .notion-collection-view-dropdown:hover {
    background: var(--bg-color-0);
  }
  
  .notion-collection-view-dropdown-icon {
    position: relative;
    top: 2px;
    margin-left: 4px;
  }
  
  .notion-collection-view-type-menu-item {
    cursor: pointer;
  }
  
  .notion-collection-view-type-menu-item .notion-collection-view-type {
    width: 340px;
    max-width: 100%;
    min-width: 100px;
  }
  
  .notion-collection-view-type {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  .notion-collection-view-type-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    /* fill: var(--fg-color); */
    fill: rgba(55, 53, 47);
    margin-right: 6px;
  }
  
  .notion-collection-view-type-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--fg-color);
  }
  
  .notion-table {
    width: 100vw;
    max-width: 100vw;
    align-self: center;
    overflow: auto hidden;
  }
  
  .notion-table-view {
    position: relative;
    float: left;
    min-width: 708px;
    padding-left: 0;
    transition: padding 200ms ease-out;
  }
  
  .notion-table-header {
    display: flex;
    position: absolute;
    z-index: 82;
    height: 33px;
    color: var(--fg-color-3);
    min-width: 708px;
  }
  
  .notion-table-header-inner {
    width: 100%;
    display: inline-flex;
    border-top: 1px solid var(--fg-color-1);
    border-bottom: 1px solid var(--fg-color-1);
    /* box-shadow: white -3px 0 0, rgba(55, 53, 47, 0.16) 0 1px 0; */
  }
  
  .notion-table-header-placeholder {
    height: 34px;
  }
  
  .notion-table-th {
    display: flex;
    position: relative;
  }
  
  .notion-table-view-header-cell {
    display: flex;
    flex-shrink: 0;
    overflow: hidden;
    height: 32px;
    font-size: 14px;
    padding: 0;
  }
  
  .notion-table-view-header-cell-inner {
    user-select: none;
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    border-right: 1px solid var(--fg-color-0);
  }
  
  .notion-table-th:last-child .notion-table-view-header-cell-inner {
    border-right: 0 none;
  }
  
  .notion-collection-column-title {
    display: flex;
    align-items: center;
    line-height: 120%;
    min-width: 0;
    font-size: 14px;
  }
  
  .notion-collection-column-title-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    min-width: 14px;
    min-height: 14px;
    fill: var(--fg-color-2);
    margin-right: 6px;
  }
  
  .notion-collection-column-title-body {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notion-table-body {
    position: relative;
    min-width: 708px;
  }
  
  .notion-table-row {
    display: flex;
    border-bottom: 1px solid var(--fg-color-1);
  }
  
  .notion-table-cell {
    min-height: 32px;
    padding: 5px 8px 6px;
    font-size: 14px;
    line-height: 1;
    white-space: normal;
    overflow: hidden;
    word-break: break-word;
    border-right: 1px solid var(--fg-color-1);
  }
  
  .notion-table-cell:last-child {
    border-right: 0 none;
  }
  
  .notion-table-cell-title {
    font-weight: 500;
  }
  
  .notion-table-cell-text {
    white-space: pre-wrap;
  }
  
  .notion-table-cell-text,
  .notion-table-cell-number,
  .notion-table-cell-url,
  .notion-table-cell-email,
  .notion-table-cell-phone_number {
    line-height: 1.5;
  }
  
  .notion-table-cell-number {
    white-space: pre-wrap;
  }
  
  .notion-table-cell-select,
  .notion-table-cell-multi_select {
    padding: 7px 8px 0;
  }
  
  .notion-property-select,
  .notion-property-multi_select {
    display: flex;
    flex-wrap: wrap;
  }
  
  .notion-property-select-item,
  .notion-property-multi_select-item {
    display: flex;
    align-items: center;
    padding: 0 6px;
    border-radius: 3px;
    height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 120%;
  }
  
  .notion-property-multi_select-item {
    margin: 0 6px 6px 0;
  }
  
  .notion-collection-card .notion-property-multi_select-item {
    margin: 0 6px 0 0;
  }
  
  .notion-property-file {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  
  .notion-property-file img {
    max-height: 24px;
    max-width: 100%;
    margin-right: 6px;
  }
  
  .notion-collection-card-cover .notion-property-file {
    height: 100%;
  }
  
  .notion-collection-card-cover .notion-property-file img {
    width: 100%;
    margin: 0;
    max-height: 100%;
  }
  
  .notion-property-checkbox {
    width: 16px;
    height: 16px;
  }
  
  .notion-property-checkbox-checked {
    width: 16px;
    height: 16px;
    background: var(--select-color-0);
  }
  
  .notion-property-checkbox-checked svg {
    position: relative;
    display: block;
    /* top: -3px; */
    top: 1px;
    left: 1px;
    width: 14px;
    height: 14px;
    fill: #fff;
  }
  
  .notion-property-checkbox-unchecked {
    width: 16px;
    height: 16px;
    border: 1.3px solid var(--fg-color);
  }
  
  .notion-gallery {
    align-self: center;
  }
  
  .notion-gallery-view {
    position: relative;
    padding-left: 0;
    transition: padding 200ms ease-out;
  }
  
  .notion-gallery-grid {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-auto-rows: 1fr;
    gap: 16px;
    border-top: 1px solid var(--fg-color-1);
    padding-top: 16px;
    padding-bottom: 4px;
  }
  
  .notion-gallery-grid-size-small {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  
  .notion-gallery-grid-size-large {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
  
  .notion-collection-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  
    text-decoration: none;
    box-shadow: rgba(15, 15, 15, 0.1) 0 0 0 1px, rgba(15, 15, 15, 0.1) 0 2px 4px;
    border-radius: 3px;
    background: var(--bg-color);
    color: var(--fg-color);
    transition: background 100ms ease-out 0s;
  
    user-select: none;
    cursor: pointer;
  }
  
  .notion-collection-card:hover {
    background: var(--bg-color-0);
  }
  
  .notion-collection-card-cover {
    position: relative;
    width: 100%;
    height: 190px;
    border-bottom: 1px solid var(--fg-color-0);
    overflow: hidden;
  }
  
  .notion-collection-card-cover img {
    width: 100%;
    height: 100%;
    border-radius: 1px 1px 0 0;
    /* object-fit: cover; */
  }
  
  .notion-collection-card-cover .notion-collection-card-cover-empty {
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    background: var(--fg-color-5);
    box-shadow: var(--fg-color-0) 0 -1px 0 0 inset;
    padding: 8px 8px 0;
  }
  
  .notion-collection-card-size-small .notion-collection-card-cover {
    height: 124px;
  }
  
  .notion-collection-card-body {
    display: flex;
    flex-direction: column;
    padding: 4px 10px;
  }
  
  .notion-collection-card-property {
    padding: 4px 0;
    white-space: nowrap;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  
  .notion-collection-card-property:first-child {
    font-size: 14px;
    font-weight: 500;
  }
  
  .notion-collection-card-property:not(:first-child) {
    white-space: nowrap;
    text-overflow: clip;
  }
  
  .notion-collection-card-property img {
    max-height: 18px;
  }
  
  .notion-list-collection {
    align-self: center;
  }
  
  .notion-list-collection {
    width: 100%;
    max-width: 100%;
  }
  
  .notion-list-view {
    position: relative;
    padding-left: 0;
    transition: padding 200ms ease-out;
    max-width: 100%;
  }
  
  .notion-list-body {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--fg-color-1);
    padding-top: 8px;
    max-width: 100%;
    overflow: hidden;
  }
  
  .notion-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    margin: 1px 0;
    max-width: 100%;
    overflow: hidden;
  }
  
  .notion-list-item-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    line-height: 1.3;
  }
  
  .notion-list-item-body {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  
  .notion-list-item-property {
    /* display: flex;
    align-items: center; */
    margin-left: 14px;
    font-size: 14px;
  }
  
  .notion-list-item-property .notion-property-date,
  .notion-list-item-property .notion-property-created_time,
  .notion-list-item-property .notion-property-last_edited_time,
  .notion-list-item-property .notion-property-url {
    display: inline-block;
    color: var(--fg-color-3);
    font-size: 12px;
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notion-board {
    width: 100vw;
    max-width: 100vw;
    align-self: center;
    overflow: auto hidden;
  }
  
  .notion-board-view {
    position: relative;
    float: left;
    min-width: 100%;
    padding-left: 0;
    transition: padding 200ms ease-out;
  }
  
  .notion-board-header {
    display: flex;
    position: absolute;
    z-index: 82;
    height: 44px;
    min-width: 100%;
  }
  
  .notion-board-header-inner {
    display: inline-flex;
    border-top: 1px solid var(--fg-color-1);
    border-bottom: 1px solid var(--fg-color-1);
  }
  
  .notion-board-header-placeholder {
    height: 45px;
  }
  
  .notion-board-th {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-right: 16px;
    box-sizing: content-box;
    flex-shrink: 0;
  }
  
  .notion-board-th-body {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 1.2;
    padding-left: 2px;
    padding-right: 4px;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .notion-board-th-count {
    color: var(--fg-color-3);
    font-weight: 500;
    padding: 0 8px;
  }
  
  .notion-board-th-empty {
    margin-right: 4px;
    position: relative;
    top: 2px;
  }
  
  .notion-board-body {
    display: inline-flex;
  }
  
  .notion-board-group {
    flex: 0 0 auto;
    padding-right: 16px;
    box-sizing: content-box;
  }
  
  .notion-board-group-card {
    margin-bottom: 8px;
  }
  
  .notion-board-view .notion-board-th,
  .notion-board-view .notion-board-group {
    width: 260px;
  }
  
  .notion-board-view-size-small .notion-board-th,
  .notion-board-view-size-small .notion-board-group {
    width: 180px;
  }
  
  .notion-board-view-size-large .notion-board-th,
  .notion-board-view-size-large .notion-board-group {
    width: 320px;
  }
  
  .notion-board-view .notion-collection-card .notion-collection-card-cover {
    height: 148px;
  }
  
  .notion-board-view-size-small
    .notion-collection-card
    .notion-collection-card-cover {
    height: 100px;
  }
  
  .notion-board-view-size-large
    .notion-collection-card
    .notion-collection-card-cover {
    height: 180px;
  }
  
  .notion-table-of-contents {
    width: 100%;
    margin: 4px 0;
  }
  
  .notion-table-of-contents-item {
    color: inherit;
    text-decoration: none;
    user-select: none;
    transition: background 20ms ease-in 0s;
    cursor: pointer;
    width: 100%;
  
    padding: 6px 2px;
    font-size: 14px;
    line-height: 1.3;
    display: flex;
    align-items: center;
  
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notion-table-of-contents-item:hover {
    background: var(--bg-color-0);
  }
  
  .notion-table-of-contents-item-body {
    border-bottom: 1px solid var(--fg-color-1);
  }
  
  .notion-to-do {
    width: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 2px;
    min-height: calc(1.5em + 3px + 3px);
  }
  
  .notion-to-do-checked {
    text-decoration: line-through;
    opacity: 0.375;
  }
  
  .notion-to-do-body {
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  .notion-to-do .notion-property-checkbox {
    margin-right: 8px;
  }
  
  .notion-google-drive {
    width: 100%;
    align-self: center;
    margin: 4px 0;
  }
  
  .notion-google-drive-link {
    position: relative;
    display: flex;
    flex-direction: column;
    color: inherit;
    text-decoration: none;
    width: 100%;
    border: 1px solid var(--fg-color-1);
    border-radius: 3px;
  
    user-select: none;
    transition: background 20ms ease-in 0s;
    cursor: pointer;
  }
  
  .notion-google-drive-link:hover {
    background: var(--bg-color-0);
  }
  
  .notion-google-drive-preview {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 55%;
    overflow: hidden;
  }
  
  .notion-google-drive-preview img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
    object-position: center top;
  }
  
  .notion-google-drive-body {
    width: 100%;
    min-height: 60px;
    padding: 12px 14px 14px;
    overflow: hidden;
    border-top: 1px solid var(--fg-color-1);
  }
  
  .notion-google-drive-body-title {
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
  }
  
  .notion-google-drive-body-modified-time {
    font-size: 12px;
    line-height: 1.3;
    color: var(--fg-color-3);
    max-height: 32px;
    overflow: hidden;
  }
  
  .notion-google-drive-body-source {
    display: flex;
    align-items: center;
    margin-top: 6px;
  }
  
  .notion-google-drive-body-source-icon {
    flex-shrink: 0;
    background-size: cover;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  
  .notion-google-drive-body-source-domain {
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notion-file {
    width: 100%;
    margin: 1px 0;
  }
  
  .notion-file-link {
    display: flex;
    align-items: center;
    padding: 3px 2px;
    border-radius: 3px;
    transition: background 20ms ease-in 0s;
    color: inherit;
    text-decoration: none;
  }
  
  .notion-file-link:hover {
    background: var(--bg-color-0);
  }
  
  .notion-file-icon {
    margin-right: 2px;
    width: 1.35em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    min-height: calc(1.5em + 3px + 3px);
    height: 1.35em;
  }
  
  .notion-file-info {
    display: flex;
    align-items: baseline;
  }
  
  .notion-file-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .notion-file-size {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--fg-color-3);
    font-size: 12px;
    line-height: 16px;
    margin-left: 6px;
  }
  
  .notion-audio {
    width: 100%;
  }
  
  .notion-audio audio {
    width: 100%;
  }
  
  .notion-equation {
    position: relative;
    display: inline-flex;
    color: inherit;
    fill: inherit;
    user-select: none;
    border-radius: 3px;
    transition: background 20ms ease-in 0s;
  }
  
  .notion-equation-inline {
    -webkit-user-select: all;
    -moz-user-select: all;
    user-select: all;
  }
  
  .notion-equation-block {
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    max-width: 100%;
    padding: 4px 8px;
    margin: 4px 0;
    cursor: pointer;
  }
  
  .notion-equation:hover {
    background: var(--bg-color-0);
  }
  
  .notion-equation:active,
  .notion-equation:focus {
    background: var(--select-color-2);
  }
  
  .notion-frame .katex-display .katex {
    padding-right: 32px;
  }
  
  .notion-frame .katex > .katex-html {
    white-space: normal;
  }
  
  .notion-page-title {
    display: inline-flex;
    max-width: 100%;
    align-items: center;
    line-height: 1.3;
    transition: background 120ms ease-in 0s;
  }
  
  .notion-page-link:hover {
    background: var(--bg-color-0);
  }
  
  .notion-page-title-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    border-radius: 3px;
    flex-shrink: 0;
    margin-left: 2px;
    margin-right: 6px;
  }
  
  .notion-collection-card-property .notion-link {
    border-bottom: 0 none;
  }
  
  .notion-collection-card-property .notion-page-title {
    transition: none;
  }
  
  .notion-collection-card-property .notion-page-title:hover {
    background: unset;
  }
  
  .notion-collection-card-property .notion-page-title-icon {
    margin-left: 0;
    height: 18px;
    width: 18px;
  }
  
  .notion-collection-card-property .notion-page-title-text {
    border-bottom: 0 none;
  }
  
  .notion-collection-card-property
    .notion-property-relation
    .notion-page-title-text {
    border-bottom: 1px solid;
  }
  
  .notion-page-title-text {
    position: relative;
    top: 1px;
    border-bottom: 1px solid var(--fg-color-1);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }
  
  .notion-collection-row {
    width: 100%;
    padding: 4px 0 8px;
    border-bottom: 1px solid var(--fg-color-0);
    margin-bottom: 1em;
  }
  
  .notion-collection-row-body {
    display: flex;
    flex-direction: column;
  }
  
  .notion-collection-row-property {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  
  .notion-collection-row-value {
    flex: 1;
    padding: 6px 8px 7px;
    font-size: 14px;
  }
  
  .notion-collection-row-property .notion-collection-column-title {
    display: flex;
    align-items: center;
    width: 160px;
    height: 34px;
    color: var(--fg-color-3);
    padding: 0 6px;
  }
  
  .notion-collection-row-property .notion-property {
    width: 100%;
  }
  
  .notion-collection-row-property .notion-collection-column-title-icon {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
  }
  
  .notion-collection-row-property .notion-link {
    border-bottom: 0 none;
  }
  
  .notion-collection-row-property
    .notion-property-relation
    .notion-page-title-text {
    border-bottom: 1px solid;
  }
  
  .notion-user {
    display: block;
    object-fit: cover;
    border-radius: 100%;
    width: 20px;
    height: 20px;
  }
  
  .notion-list-item-property .notion-property-multi_select-item {
    margin-bottom: 0;
    flex-wrap: none;
  }
  
  .notion-list-item-property .notion-property-multi_select-item:last-of-type {
    margin-right: 0;
  }
  
  .notion-toggle .notion-collection-header,
  .notion-toggle .notion-table-view,
  .notion-toggle .notion-board-view,
  .notion-column .notion-collection-header,
  .notion-column .notion-table-view,
  .notion-column .notion-board-view {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
  .notion-toggle .notion-table,
  .notion-toggle .notion-board,
  .notion-column .notion-table,
  .notion-column .notion-board {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  @media only screen and (max-width: 730px) {
    .notion-page {
      padding: 0 2vw;
    }
  
    .notion-asset-wrapper {
      max-width: 100%;
    }
  
    .notion-asset-wrapper-full {
      max-width: 100vw;
    }
  }
  
  @media (max-width: 640px) {
    .notion-bookmark-image {
      display: none;
    }
  }
  
  .lazy-image-wrapper {
    position: relative;
    overflow: hidden;
  }
  
  .lazy-image-wrapper img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
  
  .lazy-image-preview {
    filter: blur(20px);
    transform: scale(1.1);
  
    opacity: 1;
    transition: opacity 400ms ease-out !important;
    will-change: opacity;
  }
  
  .lazy-image-real {
    opacity: 0;
    transition: opacity 400ms ease-out !important;
    will-change: opacity;
  }
  
  .lazy-image-real.medium-zoom-image {
    transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1),
      opacity 400ms ease-out !important;
    will-change: opacity, transform;
  }
  
  .medium-zoom-image--opened {
    object-fit: cover;
    opacity: 1;
  }
  
  .lazy-image-loaded .lazy-image-preview {
    opacity: 0;
  }
  
  .lazy-image-loaded .lazy-image-real {
    opacity: 1;
  }
  
  .notion-page-cover.lazy-image-wrapper {
    padding: 0 !important;
  }
  
  .notion-collection-card-cover .lazy-image-wrapper {
    padding: 0 !important;
    height: 100%;
  }
  
  .notion-page-cover .lazy-image-preview,
  .notion-page-cover .lazy-image-real {
    will-change: unset !important;
  }
  
  .notion-page-cover .lazy-image-loaded .lazy-image-preview {
    opacity: 1;
  }
  
  .notion-lite {
    overflow-y: auto;
  }
  
  .notion-lite .notion-page {
    width: 100%;
    padding: 0;
    /* padding: calc(max(2vmin, 8px)); */
  }
  
  .notion-lite .notion-collection-header,
  .notion-lite .notion-table-view,
  .notion-lite .notion-board-view {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
  .notion-lite .notion-board,
  .notion-lite .notion-table {
    width: 100% !important;
  }
  
  .notion-header {
    position: relative;
    width: 100%;
    max-width: 100vw;
    height: 45px;
    min-height: 45px;
    z-index: 9;
  }
  
  .notion-header .nav-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    text-size-adjust: 100%;
    line-height: 1.5;
    line-height: 1.2;
    font-size: 14px;
  }
  
  .notion-header .breadcrumbs {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    flex-grow: 0;
    min-width: 0;
    margin-right: 8px;
  }
  
  .notion-header .breadcrumb {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  
    color: var(--fg-color);
    text-decoration: none;
    margin: 1px 0px;
    padding: 4px 6px;
    border-radius: 3px;
    transition: background 120ms ease-in 0s;
    user-select: none;
    background: transparent;
    cursor: pointer;
  }
  
  .notion-header .breadcrumb .icon {
    position: relative;
    top: -1px;
  }
  
  .notion-header img.icon {
    width: 18px !important;
    height: 18px !important;
  }
  
  .notion-header .icon {
    font-size: 18px;
    margin-right: 6px;
    line-height: 1.1;
  }
  
  .notion-header .searchIcon {
    width: 14px;
    height: 14px;
    margin-right: 6px;
    color: var(--fg-color);
    fill: var(--fg-color);
  }
  
  .notion-header .breadcrumb:not(.active):hover {
    background: var(--bg-color-0);
  }
  
  .notion-header .breadcrumb:not(.active):active {
    background: var(--bg-color-1);
  }
  
  .notion-header .breadcrumb.active {
    cursor: default;
  }
  
  .notion-header .spacer {
    margin: 0 2px;
    color: var(--fg-color-2);
  }
  
  .notion-header .button {
    height: 28px;
    padding: 0 8px;
  }
  
  .notion-search-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 15, 15, 0.6);
  
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1001;
  }
  
  .notion-search {
    box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px;
    border-radius: 3px;
    background: #fff;
  
    position: relative;
    top: 90px;
    max-width: 600px;
    min-height: 50px;
    max-height: 80vh;
    width: 75%;
    overflow: hidden;
    outline: none;
  
    font-size: 16px;
    line-height: 1.5;
    color: rgb(55, 53, 47);
    caret-color: rgb(55, 53, 47);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  
  .notion-search .quickFindMenu {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: calc(100vw - 24px);
    height: 100%;
    max-height: 80vh;
    min-height: 50px;
  }
  
  .notion-search .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 52px;
    box-shadow: rgba(55, 53, 47, 0.09) 0px 1px 0px;
    font-size: 18px;
    line-height: 27px;
    padding: 0 16px;
  }
  
  .notion-search .searchInput {
    resize: none;
    white-space: nowrap;
    border: none;
    outline: none;
    flex: 1;
  
    line-height: inherit;
    font-size: inherit;
  }
  
  .notion-search .inlineIcon {
    margin-right: 10px;
    fill: rgba(55, 53, 47, 0.4);
  }
  
  .notion-search .clearButton {
    user-select: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 8px;
  }
  
  .notion-search .clearIcon {
    width: 14px;
    height: 14px;
    fill: rgba(55, 53, 47, 0.3);
  }
  
  .notion-search .clearButton:hover .clearIcon {
    fill: rgba(55, 53, 47, 0.4);
  }
  
  .notion-search .clearButton:active .clearIcon {
    fill: rgba(55, 53, 47, 0.8);
  }
  
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  
  .notion-search .loadingIcon {
    animation: spinner 0.6s linear infinite;
  }
  
  .notion-search .noResultsPane {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px 16px;
  }
  
  .notion-search .noResults {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(55, 53, 47, 0.6);
  }
  
  .notion-search .noResultsDetail {
    font-size: 14px;
    margin-top: 2px;
    color: rgba(55, 53, 47, 0.4);
  }
  
  .notion-search .resultsFooter {
    box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px;
    margin-top: 1px;
    font-size: 12px;
    min-height: 28px;
    color: rgba(55, 53, 47, 0.4);
    user-select: none;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .notion-search .resultsCount {
    font-weight: 500;
    color: rgba(55, 53, 47, 0.6);
  }
  
  .notion-search .resultsPane {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    overflow: auto;
  }
  
  .notion-search .result {
    padding: 8px 14px;
    border-bottom: 1px solid rgba(55, 53, 47, 0.06);
    min-height: 36px;
    font-size: 14px;
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: rgb(55, 53, 47);
    text-decoration: none;
  }
  
  .notion-search .result .breadcrumb {
    padding: 0;
    width: 100%;
    background: unset !important;
    justify-content: flex-start;
  }
  
  .notion-search .resultsPane .result:hover {
    background: rgba(55, 53, 47, 0.08) !important;
  }
  
  .notion-search .resultsPane .result:active {
    background: rgba(55, 53, 47, 0.16) !important;
  }
  `

const getPageContentXD = async (id) => {
    const recordMap = await notion.getPage(id);
    //  console.log(notionStyles)
    /* let cssModule = [
        "../node_modules/react-notion-x/src/styles.css",
        "../node_modules/prismjs/themes/prism-tomorrow.css",
        "../node_modules/rc-dropdown/assets/index.css",
        //"node_modules/katex/dist/katex.min.css",
    ]; */
    //let css = cssModule.map( cssModule => readFileSync(cssModule).toString()).join('\n\n');
    //console.log(css)

    let props = { recordMap  }
    let notionHTML = ReactDOMServer.renderToStaticMarkup(
        React.createElement(NotionRenderer, props)
    )

    return (`
    <html lang="en">
      <head>
        <meta charset="utf-8">
      </head>
      <body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.js" integrity="sha512-/CMIhXiDA3m2c9kzRyd97MTb3MC6OVnx4TElQ7fkkoRghwDf6gi41gaT1PwF270W6+J60uTmwgeRpNpJdRV6sg==" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.css" integrity="sha512-h7nl+xz8wgDlNM4NqKEM4F1NkIRS17M9+uJwIGwuo8vGqIl4BhuCKdxjWEINm+xyrUjNCnK5dCrhM0sj+wTIXw==" crossorigin="anonymous" />
      <style>
      ${css}
      </style>
      ${notionHTML}
      <style>.notion-page {width: 80vw !important;}</style>
      </body>
    </html>
    `);
}
//const getPageContent = require('../helpers/that.min.js');
exports.handler = async (event) => {
    const id = event.queryStringParameters.id ;
    if(!id) return {statusCode: 400, body: `No id provided`};

    let html = await getPageContentXD(id);
    return {
        statusCode: 200,
        'headers': {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/html',
        },
        body: html,
    }
}