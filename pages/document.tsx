import Document, {Html, Head, Main, NextScript} from 'next/document'

function MyDocument() {

    return (
        <Html lang="fa" dir={'rtl'}>
            <body className="rtl">


            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
export default MyDocument
