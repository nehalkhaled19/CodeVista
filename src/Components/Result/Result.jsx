import React from 'react'

export default function Result({srcCode}) {
    return <>
        <section className='px-2 '  >
            <div className=" p-2 result shadow mt-2 rounded-2">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                    Result
                </h2>
                <iframe
                    className=" border rounded-2"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </section>
    </>
}
