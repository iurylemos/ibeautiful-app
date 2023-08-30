import React from "react";
import { Text, Box, Touchable, Cover, Button } from "../../styles";
import { ServicesSalonApi } from "../../interfaces/api/allServicesSalonApi.interface";
import moment from "moment";
import { awsUtil } from "../../utils/aws.util";
import { useDispatch } from "react-redux";
import {
  filterScheduleSalonAction,
  updateSchedulingSalonAction,
} from "../../store/modules/salon/actions";

type Props = {
  service: ServicesSalonApi;
};

const Service: React.FC<Props> = ({ service }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Touchable
      height="100px"
      hasPadding
      align="center"
      background="light"
      onPress={() => {
        dispatch(
          updateSchedulingSalonAction({
            serviceId: service._id,
          })
        );
        dispatch(filterScheduleSalonAction());
      }}
    >
      <Cover
        source={
          service.files.length
            ? `${awsUtil.bucketUrl}/${service.files[0].path}`
            : ""
        }
      />
      <Box direction="column">
        <Text bold color="dark">
          {service.title}
        </Text>
        <Text small>
          R$ {service.price} •
          {moment(service.duration, "YYYY-MM-DDTHH:mm:ss").format("HH:mm")} mins
        </Text>
      </Box>
      <Box>
        <Button
          icon="clock-check-outline"
          background="success"
          mode="contained"
        >
          Agendar
        </Button>
      </Box>
    </Touchable>
  );
};

export default Service;
