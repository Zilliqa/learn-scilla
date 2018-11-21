import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

interface IProps {
  t: (key: string) => string;
  proceed: () => void;
  closeModal: () => void;
  isModalVisible: boolean;
}

export default class CodeModal extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { isModalVisible, t, closeModal, proceed } = this.props;
    return (
      <div>
        <Modal isOpen={isModalVisible} fade={false} toggle={closeModal}>
          <ModalHeader toggle={closeModal}>{t('lesson.congratulations')}!</ModalHeader>
          <ModalBody>{t('lesson.chapterCompleteMessage')}</ModalBody>
          <ModalFooter>
            <Button color="primary" outline={true} onClick={proceed}>
              {t('lesson.nextLesson')}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
