
import Label from '../components/Label/Label';

const Resources = () => (
  <div className="page">
     <div className="page content">
       <Label text="Resources" />
       <ul>
         <li><a href="https://reactjs.org/docs/getting-started.html">React Docs</a> - Fundamental React knowledge</li>
         <li><a href="https://jestjs.io/">Jest</a> - Testing library used in project</li>
         <li><a href="https://docs.docker.com/">Docker</a> - Packaging app for deployment</li>
         <li><a href="https://storybook.js.org/">Storybook</a> - UI component visualization</li>
       </ul>
     </div>
  </div>
);

export default Resources;