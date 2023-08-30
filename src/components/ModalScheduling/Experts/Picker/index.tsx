import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import moment from "moment";

import { Text, Box, Touchable, Cover } from "../../../../styles";
import themeConfig from "../../../../config/theme.config";
import {
  updateFormServiceSalonAction,
  updateSchedulingSalonAction,
} from "../../../../store/modules/salon/actions";
import { SchedulingDaysAvailableApiCollaborator } from "../../../../interfaces/api/schedulingDaysAvailableApi.interface";
import { InitialStateSalonScheduling } from "../../../../interfaces/store/initialStateSalon.interface";
import { ServicesSalonApi } from "../../../../interfaces/api/allServicesSalonApi.interface";

type Props = {
  isVisible: boolean;
  collaborators: SchedulingDaysAvailableApiCollaborator[];
  scheduling: InitialStateSalonScheduling;
  services: ServicesSalonApi[];
  hourSelected: string;
  collaboratorsDay: any[];
};

const ModalSchedulingExpertsPicker: React.FC<Props> = ({
  isVisible,
  collaborators,
  scheduling,
  services,
  hourSelected,
  collaboratorsDay,
}): JSX.Element => {
  const dispatch = useDispatch();

  const collaboratorsIdsAvailable: any[] = [];

  for (const collaboratorId of Object.keys(collaboratorsDay)) {
    const hours = collaboratorsDay[collaboratorId as unknown as number].flat(2);

    if (hours && hours.includes(hourSelected)) {
      collaboratorsIdsAvailable.push(collaboratorId);
    }
  }

  const collaboratorsAvailables = collaborators.filter((c) =>
    collaboratorsIdsAvailable.includes(c._id)
  );

  const service = services.filter((s) => s._id === scheduling.serviceId)[0] ?? {
    _id: "",
    title: "",
  };

  return (
    <Modal
      isVisible={isVisible}
      style={{ backgroundColor: themeConfig.colors.light }}
      onBackdropPress={() =>
        dispatch(
          updateFormServiceSalonAction({
            modalEspecialty: false,
          })
        )
      }
    >
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">
            {service.title}
          </Text>
          <Text small>
            Disponíveis em{" "}
            {moment(scheduling.date).format("DD/MM/YYYY [ás] HH:mm")}
          </Text>
          <Box wrap="wrap" spacing="10px 0 0" width="100%">
            {collaboratorsAvailables.map((collaborator, idx) => (
              <Touchable
                key={Math.random().toString() + idx}
                height="70px"
                spacing="10px 0px 0px 0px"
                direction="column"
                align="center"
                width={`${(Dimensions.get("screen").width - 80) / 4}px`}
                onPress={() => {
                  dispatch(
                    updateSchedulingSalonAction({
                      collaboratorId: collaborator._id,
                    })
                  );
                  dispatch(
                    updateFormServiceSalonAction({
                      modalEspecialty: false,
                    })
                  );
                }}
              >
                <Cover
                  height="45px"
                  width="45px"
                  source={collaborator.photo}
                  circle
                  border={
                    collaborator._id === scheduling.collaboratorId
                      ? `2px solid ${themeConfig.colors.primary}`
                      : "none"
                  }
                  spacing="0px 0px 5px 0px"
                />
                <Text small bold>
                  {collaborator.name}
                </Text>
              </Touchable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Modal>
  );
};

export default ModalSchedulingExpertsPicker;
