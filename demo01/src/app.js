require('./style/main.css')
require('./index.html')
import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './component/CommentBox.jsx'

ReactDom.render(<CommentBox url='127.0.0.1:3000/api/comments'/>,document.getElementById('content'))
