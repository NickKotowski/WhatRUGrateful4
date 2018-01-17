import { connect } from 'react-redux';

import MainContainer from './main.js';
import { mapStateToProps, mapDispatchToProps} from './actions.js';

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
