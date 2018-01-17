import { connect } from 'react-redux';

import EnterItemScreen from './enter.js';
import { mapStateToProps, mapDispatchToProps } from './actions.js';

export default connect(mapStateToProps, mapDispatchToProps)(EnterItemScreen);
