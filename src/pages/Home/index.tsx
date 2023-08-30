import React, { useEffect } from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import themeConfig from "../../config/theme.config";
import colorsUtil from "../../utils/colors.util";
import Service from "../../components/Service";
import ModalScheduling from "../../components/ModalScheduling";
import { useDispatch, useSelector } from "react-redux";
import {
  allServicesSalonAction,
  getSalonAction,
} from "../../store/modules/salon/actions";
import { InitialStateSalon } from "../../interfaces/store/initialStateSalon.interface";

const Home: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { services, form } = useSelector(
    (state: { salonReducer: InitialStateSalon }) => state.salonReducer
  );

  const finalServices =
    form.inputFilter.length > 0
      ? services.filter((service) => {
          const title = service.title.toLowerCase().trim();
          const arrSearch = form.inputFilter.toLowerCase().trim().split(" ");

          return arrSearch.every((word) => title.search(word) !== -1);
        })
      : services;

  console.log("form", form);

  useEffect(() => {
    dispatch(getSalonAction());
    dispatch(allServicesSalonAction());
  }, []);

  console.log("services", services);

  return (
    <>
      <FlatList
        style={{
          backgroundColor: colorsUtil.toAlpha(themeConfig.colors.muted, 10),
        }}
        data={finalServices}
        ListHeaderComponent={Header}
        renderItem={({ item }) => <Service service={item} key={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <ModalScheduling />
    </>
  );
};

export default Home;
