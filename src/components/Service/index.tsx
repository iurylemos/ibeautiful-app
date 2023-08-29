import React from "react";
import { Text, Box, Touchable, Cover, Title, Button } from "../../styles";

const Service: React.FC = (): JSX.Element => {
  return (
    <Touchable height="100px" hasPadding align="center" background="light">
      <Cover
        source={
          "https://blog.voraxacessorios.com.br/wp-content/uploads/2022/08/Corte_Freestyle.jpg"
        }
      />
      <Box direction="column">
        <Text bold color="dark">
          Corte de cabelo masculino
        </Text>
        <Text small>R$ 45 + 30 mins</Text>
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
