import { VisualRegressionTest } from '../../../lib/test/visual-regression-test';
import * as style from '../style.less';

console.log(style.container);
new VisualRegressionTest(__dirname, style.container).run();