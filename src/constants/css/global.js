import {css} from 'styled-components';

const global = css`
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  tbody tr {
    cursor: pointer;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }  
  
  nav {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }
    
    li {
      float: left;
    }
    
    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    li a:hover {
      background-color: #111;
    }
  }
  
  form {
    & * {
      display: block;
    }
  }
  
  article {
    margin-bottom: 2rem;

    & > header {
      display: inline-block;
      vertical-align: top;
    }
    
    & > main {
      display: inline-block;
      vertical-align: bottom;
    }
  }
`;

export default global;
