import React, { useState, useCallback } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from '../Result/Result';

export default function Editor() {
    const [html_edit, setHtml_Edit] = useState('');
    const [css_edit, setCss_Edit] = useState('');
    const [js_edit, setJs_Edit] = useState('');

    //* Html onchange handler 
    const onChangeHtml = useCallback((value) => {
        console.log(value);
        setHtml_Edit(value);
    }, []);

    //* Css onchange handler 
    const onChangeCss = useCallback((value) => {
        setCss_Edit(value);
    }, []);

    //* JavaScript onchange handler 
    const onChangeJavaScript = useCallback((value) => {
        setJs_Edit(value);
    }, []);

      //* Create Html Document
  const srcCode = `<html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
`

    return <>
        {/*editor section */}
        <section >
            {/* Editor  */}

            <div className="row m-0  mt-2  ">
                {/* Html Editor */}
                <div className="col-lg-4  p-2 " >
                    <div className='edit p-2 rounded-2 shadow'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-brands fa-html5 fa-2xl"></i>
                            <h2 className="text-lg font-semibold mx-2 mb-0 text-white">HTML</h2>
                        </div>
                        <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
                    </div>
                </div>

                {/* Css Editor  */}
                <div className="col-lg-4  p-2 " >
                    <div className='edit p-2 rounded-2 shadow'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-brands fa-css3 fa-2xl"></i>
                            <h2 className="text-lg font-semibold mx-2 mb-0 text-white">CSS</h2>
                        </div>
                        <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
                    </div>
                </div>
                {/* JavaScript Editor  */}
                <div className="col-lg-4  p-2 " >
                    <div className='edit p-2 rounded-2 shadow'>
                        <div className='d-flex align-items-center'>
                            <i className="fa-brands fa-square-js fa-2xl"></i> <h2 className="text-lg font-semibold mx-2 mb-0 text-white">JavaScript</h2>
                        </div>
                        <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
                    </div>
                </div>
            </div>
        </section>
     {/* Result section */}
     <Result srcCode={srcCode}/>
    </>
}

