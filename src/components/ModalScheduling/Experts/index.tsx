import React from "react";
import { Cover, Box, Text, Button, Touchable } from "../../../styles";
import themeConfig from "../../../config/theme.config";
import { SchedulingDaysAvailableApiCollaborator } from "../../../interfaces/api/schedulingDaysAvailableApi.interface";
import { InitialStateSalonScheduling } from "../../../interfaces/store/initialStateSalon.interface";
import { useDispatch } from "react-redux";
import { updateFormServiceSalonAction } from "../../../store/modules/salon/actions";

type Props = {
  collaborators: SchedulingDaysAvailableApiCollaborator[];
  scheduling: InitialStateSalonScheduling;
};

const ModalSchedulingExperts: React.FC<Props> = ({
  collaborators,
  scheduling,
}): JSX.Element => {
  const dispatch = useDispatch();

  const collaborator = collaborators.filter(
    (c) => c._id === scheduling.collaboratorId
  )[0] ?? { photo: "", name: "" };

  return (
    <>
      <Text bold color="dark" hasPadding removePaddingBottom>
        Gostaria de trocar o(a) especialistas?
      </Text>
      <Box hasPadding removePaddingBottom>
        <Box align="center">
          <Cover
            width="45px"
            height="45px"
            circle
            source={collaborator.photo}
          />
          <Text small>{collaborator.name}</Text>
        </Box>
        <Box>
          <Touchable
            onPress={() =>
              dispatch(
                updateFormServiceSalonAction({
                  modalEspecialty: true,
                })
              )
            }
          >
            <Button
              uppercase={false}
              textColor={themeConfig.colors.muted}
              background={themeConfig.colors.light}
              mode="contained"
              block
            >
              Trocar Especialista
            </Button>
          </Touchable>
        </Box>
      </Box>
    </>
  );
};

export default ModalSchedulingExperts;
