import React from "react";
import { MantineProvider, Modal } from "@mantine/core";

const ProfileModal = ({ isModalOpened, setIsModalOpened }) => {
  return (
    <MantineProvider>
      <Modal
        styles={{
          overlay: {
            backgroundColor: "transparent",
            backdropFilter: "blur(3px)",
          },
        }}
        size="md"
        opened={isModalOpened}
        onClose={() => setIsModalOpened(false)}
      >
        <form className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            />

            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAT"
              placeholder="Works at"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIN"
              placeholder="Lives in"
            />

            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Relationship Status"
            />
          </div>

          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>

          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </MantineProvider>
  );
};

export default ProfileModal;
