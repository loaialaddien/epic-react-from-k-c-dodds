(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[39],{198:function(e,t,n){"use strict";n.r(t),t.default='\x3c!-- Creating custom components --\x3e\n\x3c!-- \ud83d\udcaf using React Fragments --\x3e\n\x3c!-- http://localhost:3000/isolated/final/04.extra-5.html --\x3e\n\n<body>\n  <div id="root"></div>\n  <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"><\/script>\n  <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"><\/script>\n  <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"><\/script>\n  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"><\/script>\n  <script type="text/babel">\n    function Message({subject, greeting}) {\n      return (\n        <div className="message">\n          {greeting}, {subject}\n        </div>\n      )\n    }\n    Message.propTypes = {\n      subject: PropTypes.string.isRequired,\n      greeting: PropTypes.string.isRequired,\n    }\n\n    const element = (\n      <>\n        <Message subject="World" greeting="Hello" />\n        <Message subject="World" greeting="Goodbye" />\n      </>\n    )\n\n    ReactDOM.render(element, document.getElementById(\'root\'))\n  <\/script>\n</body>\n'}}]);
//# sourceMappingURL=39.c596e078.chunk.js.map