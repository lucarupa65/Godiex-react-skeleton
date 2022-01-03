import React, { useState } from 'react';
import { Modal, Button, Tooltip } from 'antd';

const ModalComponent = ({textTooltip, size, iconButton, textButton, modalTitle, form, modalWidth, colorButton}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
		<Tooltip placement="left" color='#ffffff' title={textTooltip}>
			<Button
                type="primary"
                style={{ backgroundColor: colorButton ? colorButton : "#1890ff" }}
                size={size ? size : "small"}
                onClick={showModal}
                icon={ iconButton }>{ textButton }
			</Button>
		</Tooltip>

      <Modal
            title={modalTitle}
            centered
            visible={isModalVisible}
            footer={false}
            onCancel={() => setIsModalVisible(false)}
            width={modalWidth ? modalWidth : 500}
      >
        { form  }
      </Modal>
    </>
  );
};

export default ModalComponent;
