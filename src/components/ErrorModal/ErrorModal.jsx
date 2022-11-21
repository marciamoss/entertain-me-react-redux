import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';

import { closeErrorModal } from '../../actions';

const ErrorModal = ({closeErrorModal, error}) => <Modal size={'mini'} open>
    <Modal.Header>Sign in failed</Modal.Header>
    <Modal.Content>
      <p>Reason: {error}, clear cache and refresh the page to retry</p>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={() => closeErrorModal(true)}>
        Close
      </Button>
    </Modal.Actions>
  </Modal>;


// export default ErrorModal;
const mapStateToProps = state => ({ close: state.errorModal.close, error: state.auth.userId })

export default connect(
  mapStateToProps,
  { closeErrorModal }
)(ErrorModal);
