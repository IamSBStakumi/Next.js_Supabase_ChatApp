"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    /* 基準1rem=10pxに設定 */
    font-size: 62.5%
  }

  body {
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4286;
  color: #333;
  background-color: #fff;
  }

  /* @Headline
  ------------------------------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  /* @List
  ------------------------------------- */
  ul {
    list-style: none;
  }

  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
  }

  /* @Image
  ------------------------------------- */
  img {
    vertical-align: middle;
    border: 0;
  }

  a img {
    border: 0;
  }

  /* @Anchor
  ------------------------------------- */
  a {
    overflow: hidden;
    color: #337ab7;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
  }

  /* @Table
  ------------------------------------- */
  table {
    font-size: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    background-color: transparent;
  }

  th,
  td {
    padding: 0;
    margin: 0;
    font-weight: normal;
    text-align: left;
  }

  th {
    padding: 0;
    text-align: left;
  }

  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  .table > thead > tr > th,
  .table > tbody > tr > th,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > td,
  .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.4286;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }

  .table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
  }

  .table > colgroup + thead > tr:first-child > th,
  .table > thead:first-child > tr:first-child > th,
  .table > colgroup + thead > tr:first-child > td,
  .table > thead:first-child > tr:first-child > td {
    border-top: 0;
  }

  .table > tbody + tbody {
    border-top: 2px solid #ddd;
  }

  .table .table {
    background-color: #fff;
  }

  .table-responsive {
    min-height: 0.01%;
    overflow-x: auto;
  }

  /* ^@bootstrap
  ------------------------------------- */
  html {
  font-family: sans-serif;
  text-size-adjust: 100%;
  font-size: 10px;
  -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
  }

  template {
    display: none;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    font: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }


  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="submit"] {
    appearance: button;
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  input {
    line-height: normal;
  }

  input[type="checkbox"],
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  textarea {
    overflow: auto;
  }

  @media print {
    *,
    *::before,
    *::after {
      color: #000 !important;
      text-shadow: none !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]::after {
      content: " (" attr(href) ")";
    }

    a[href^="#"]::after,
    a[href^="javascript:"]::after {
      content: "";
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    h3 {
      orphans: 3;
      widows: 3;
      page-break-after: avoid;
    }

    .label {
      border: 1px solid #000;
    }

    .table {
      border-collapse: collapse !important;
    }

    .table td,
    .table th {
      background-color: #fff !important;
    }
  }

  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  a:hover,
  a:focus {
    color: #23527c;
    text-decoration: underline;
  }

  a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }

  .img-responsive,
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  [role="button"] {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }

  h1,
  .h1 {
    font-size: 36px;
  }

  h2,
  .h2 {
    font-size: 30px;
  }

  h3,
  .h3 {
    font-size: 24px;
  }

  h4,
  .h4 {
    font-size: 18px;
  }

  h5,
  .h5 {
    font-size: 14px;
  }

  h6,
  .h6 {
    font-size: 12px;
  }

  p {
    margin: 0 0 10px;
  }

  /* ^@Pagination
  ------------------------------------- */
  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }

  .pagination > li {
    display: inline;
  }

  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.4286;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }

  .pagination > .active > a,
  .pagination > li > a:hover,
  .pagination > .active > span,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 3;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
  }
`;

export default GlobalStyle;
