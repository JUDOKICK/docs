/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

// You can delete this file if you're not using it
require("prismjs/themes/prism-dark.css")
require("prismjs/components/prism-lua");
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
