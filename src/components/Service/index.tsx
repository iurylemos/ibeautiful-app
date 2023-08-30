import React from "react";
import { Text, Box, Touchable, Cover, Title, Button } from "../../styles";
import { ServicesSalonApi } from "../../interfaces/api/allServicesSalonApi.interface";
import moment from "moment";
import { awsUtil } from "../../utils/aws.util";

type Props = {
  service: ServicesSalonApi;
};

const Service: React.FC<Props> = ({ service }): JSX.Element => {
  return (
    <Touchable height="100px" hasPadding align="center" background="light">
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
