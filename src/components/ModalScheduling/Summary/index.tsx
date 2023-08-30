import React from "react";
import { Text, Title, Spacer, Box, Cover } from "../../../styles";
import themeConfig from "../../../config/theme.config";
import colorsUtil from "../../../utils/colors.util";
import { ServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
import { awsUtil } from "../../../utils/aws.util";

type Props = {
  service: ServicesSalonApi;
};

const ModalSchedulingSummary: React.FC<Props> = ({ service }): JSX.Element => {
  return (
    <Box
      align="center"
      hasPadding
      background={colorsUtil.toAlpha(themeConfig.colors.muted, 5)}
    >
      <Cover
        width="40px"
        height="40px"
        source={
          service.files.length
            ? `${awsUtil.bucketUrl}/${service.files[0].path}`
            : ""
        }
      />
      <Box direction="column">
        <Title small style={{ fontSize: 20 }}>
          {service.title}
        </Title>
        <Spacer size="4px" />
        <Text small> Total: R$ {service.price} </Text>
      </Box>
    </Box>
  );
};

export default ModalSchedulingSummary;
