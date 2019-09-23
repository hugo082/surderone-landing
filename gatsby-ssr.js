/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('assets/js/plugins.js')}/>
            <script src={safePrefix('assets/js/init.js')}/>
            <script src={safePrefix('assets/js/main.js')}/>

            {/* Crisp integration */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.$crisp=[];
                        window.CRISP_WEBSITE_ID="15555479-9155-476e-b046-1fede2f18905";
                        s=document.createElement("script");
                        s.src="https://client.crisp.chat/l.js";
                        s.async=1;
                        document.getElementsByTagName("head")[0].appendChild(s);
                    `,
                }}
            />
        </React.Fragment>
    ]);

};
