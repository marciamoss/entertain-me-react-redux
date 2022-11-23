import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';

import { closeErrorModal } from '../../actions';
import { setError } from '../../utils/setError';

const ErrorModal = ({closeErrorModal, error, errorHeader}) => <Modal size={'mini'} open>
    <Modal.Header>{errorHeader}</Modal.Header>
    <Modal.Content>
      <p>{error}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={() => closeErrorModal(true)}>
        Close
      </Button>
    </Modal.Actions>
  </Modal>;

const mapStateToProps = state => {
  const error = setError(state);
  return ({ close: state.errorModal.close, error: error.errorMessage, errorHeader: error.errorHeader });
}

export default connect(
  mapStateToProps,
  { closeErrorModal }
)(ErrorModal);
