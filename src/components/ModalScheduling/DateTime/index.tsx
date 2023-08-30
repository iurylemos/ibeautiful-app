import React from "react";
import { FlatList } from "react-native-gesture-handler";
import moment from "moment";
import { Text, Title, Box, Touchable } from "../../../styles";
import colorsUtil from "../../../utils/colors.util";
import themeConfig from "../../../config/theme.config";
import { ServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
import { dateUtil } from "../../../utils/date.util";
import { useDispatch } from "react-redux";
import { updateSchedulingSalonAction } from "../../../store/modules/salon/actions";
import "moment/locale/pt-br";
import "moment/dist/locale/pt-br";

moment.locale("pt-br");

type Props = {
  service: ServicesSalonApi;
  schedule: any;
  dateSelected: string;
  hourSelected: string;
  hoursAvailable: any;
};

const ModalSchedulingDateTime: React.FC<Props> = ({
  service,
  schedule,
  dateSelected,
  hoursAvailable,
  hourSelected,
}): JSX.Element => {
  const dispatch = useDispatch();

  const setScheduling = (val: string, isTime = false) => {
    const { hoursAvailable: hoursAvailableUtil } = dateUtil.selectScheduling(
      schedule,
      isTime ? dateSelected : val
    );

    const currentDate = !isTime
      ? `${val}T${hoursAvailableUtil[0][0]}`
      : `${dateSelected}T${val}`;

    dispatch(
      updateSchedulingSalonAction({
        date: currentDate,
      })
    );
  };

  return (
    <>
      <Text hasPadding bold color="dark">
        Para quando você gostaria de agendar?
      </Text>
      <FlatList
        data={schedule}
        horizontal
        keyExtractor={() => Math.random().toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => {
          const date = moment(Object.keys(item)[0], "YYYY-MM-DDTHH:mm:ss");
          const dateISO = moment(date).format("YYYY-MM-DD");

          const selected = dateISO === dateSelected;

          return (
            <Touchable
              width="70px"
              height="80px"
              spacing="0 10px 0 0"
              rounded="10px"
              direction="column"
              justify="center"
              align="center"
              background={selected ? "primary" : "light"}
              border={`1px solid ${
                selected
                  ? themeConfig.colors.primary
                  : colorsUtil.toAlpha(themeConfig.colors.muted, 10)
              }`}
              onPress={() => setScheduling(dateISO)}
            >
              <Text small color={selected ? "light" : undefined}>
                {dateUtil.daysOfWeek[date.day()]}
              </Text>
              <Title small color={selected ? "light" : undefined}>
                {date.format("DD")}
              </Title>
              <Text small color={selected ? "light" : undefined}>
                {date.format("MMMM")}
              </Text>
            </Touchable>
          );
        }}
      />
      <Text hasPadding bold color="dark">
        Que horas?
      </Text>
      <FlatList
        data={hoursAvailable}
        horizontal
        keyExtractor={(it) => Math.random().toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Box direction="column" spacing="0 10px 0 0" width="100px">
            {item.map((workingSchedule: any) => {
              const selected = workingSchedule === hourSelected;

              return (
                <Touchable
                  key={workingSchedule}
                  width="100px"
                  height="35px"
                  spacing="0 0 5px 0"
                  background={selected ? "primary" : "light"}
                  rounded="7px"
                  justify="center"
                  align="center"
                  border={`1px solid ${
                    selected
                      ? themeConfig.colors.primary
                      : colorsUtil.toAlpha(themeConfig.colors.muted, 20)
                  }`}
                  onPress={() => setScheduling(workingSchedule, true)}
                >
                  <Text small color={selected ? "light" : undefined}>
                    {workingSchedule}
                  </Text>
                </Touchable>
              );
            })}
          </Box>
        )}
      />
    </>
  );
};

export default ModalSchedulingDateTime;
