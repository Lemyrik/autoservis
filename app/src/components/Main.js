import React from 'react';
import { Layout } from 'antd';
import './Main.css'


const { Header, Content, Footer } = Layout;
function Main () {
    return (
        <>
        <Header
            className='header'
        >
            <img
                    alt='' 
                    className='header-img'
                    src="https://pngimg.com/uploads/mustang/mustang_PNG57.png"
                />
            <div>AUTO CLUB</div>
        </Header>
        <Content
            className='content'
        >
        </Content>
        <Footer
            className='footer'
        >
            <div className='footer_container'
            >
                <img
                    alt='' 
                    className='footer-img'
                    src="https://uploads.vw-mms.de/system/production/images/cws/076/602/images/7915a2c353dfe6b4b46132e5fb7bc8737d8a5678/B2023CW00271_web_1600.png?1694772693"
                />
                <img
                    alt='' 
                    className='footer-img'
                    src="https://uploads.vw-mms.de/system/production/images/cws/076/604/images/ceb0b9a59d1e83a123b975f37005f95a6c17a762/B2023CW00273_web_1600.png?1684232497"
                />
                <img
                    alt='' 
                    className='footer-img'
                    src="https://uploads.vw-mms.de/system/production/images/cws/076/605/images/5032258d80baa9e929d9abd5b2e8977d05cf2dcd/B2023CW00274_web_1600.png?1684232430"
                />
                <img
                    alt='' 
                    className='footer-img'
                    src="https://uploads.vw-mms.de/system/production/images/cws/076/603/images/2bd466737828e1413b1d0d248f73c5ba8d580e68/B2023CW00272_web_1600.png?1684232565"
                />
                <img
                    alt='' 
                    className='footer-img'
                    src="https://uploads.vw-mms.de/system/production/images/cws/076/600/images/4157a288b2debbb132c7b8a21fb0cdf878e211fe/B2023CW00269_web_1600.jpg?1684232726"
                />
            </div>
        </Footer>
        </>
    )
}
export default Main