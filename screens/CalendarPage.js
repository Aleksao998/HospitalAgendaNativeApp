import React, { useState, useEffect } from "react";
import moment from "moment";

//Elements
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header } from "react-native-elements";
import { Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

//Styles
import { AppStyles } from "../AppStyles";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mart.",
    "Ap.",
    "Maj.",
    "Jun.",
    "Jul.",
    "Avg.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Četvrtak",
    "Petak",
    "Subota",
  ],
  dayNamesShort: ["Ned.", "Pon.", "Ut.", "Sr", "Čet.", "Pet.", "Sub."],
  today: "Danas",
};
LocaleConfig.defaultLocale = "fr";
const appointments = {
  "2020-05-09": [
    {
      key: 32,
      year: "2020",
      month: "5",
      day: "5",
      mins: "00",
      hour: "21",
      time: "08:00 h",
      title: "Aleksa Opacic (pregled)",
      date: "2020-05-09",
    },
    {
      key: 33,
      year: "2020",
      month: "7",
      day: "11",
      mins: "00",
      hour: "23",
      time: "10:00 h",
      title: "Sara Labalo (pregled)",
      date: "2020-05-09",
    },

    {
      key: 33,
      year: "2020",
      month: "7",
      day: "11",
      mins: "00",
      hour: "23",
      time: "14:00 h",
      title: "Luka Labalo (Kontrola)",
      date: "2020-05-09",
    },
  ],

  "2020-05-10": [
    {
      key: 34,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "22",
      time: "10:00 PM",
      title: "Shave (Customer)",
      date: "2020-05-10",
    },
  ],

  "2019-09-17": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2020-05-11": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2020-05-11",
    },
  ],
  "2019-09-19": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-20": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-21": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-22": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-23": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-24": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-25": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-26": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-27": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-28": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-29": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
  "2019-09-30": [
    {
      key: 32,
      year: "2019",
      month: "7",
      day: "11",
      mins: "00",
      hour: "21",
      time: "09:00 PM",
      title: "Shave (Customer1)",
      date: "2019-09-14",
    },
  ],
};

export default function CalendarPage(props) {
  const [selectedDay, setselectedDay] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [appointmentsL, setAppointments] = useState({
    [selectedDay]: appointments[selectedDay],
  });

  useEffect(() => {
    // Update the document title using the browser API
    console.log(appointmentsL);
  }, [appointmentsL]);

  const logOut = () => {
    props.navigation.replace({ routeName: "login" });
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundColor={AppStyles.color.main}
        leftComponent={{ icon: "settings", color: "#fff" }}
        centerComponent={{
          text: "Agenda",
          style: { color: "#fff" },
        }}
        rightComponent={{
          icon: "close",
          color: "#fff",
          onPress: () => logOut(),
        }}
      />
      <Agenda
        style={{ flex: 1 }}
        onDayPress={(day) => {
          console.log(day.dateString);
          var dayString = day.dateString;

          setAppointments({ [dayString]: appointments[dayString] });
        }}
        firstDay={parseInt(moment(new Date()).day().toString(), 10)}
        items={appointmentsL}
        renderDay={(day, item) => {
          return (
            <View style={[styles.itemContainer]}>
              <View style={[styles.item1]}>
                <Text
                  style={{ color: AppStyles.color.main, textAlign: "center" }}
                >
                  {item.time}
                </Text>
              </View>
              <View style={[styles.item]}>
                <Text style={{ color: "#6a6a6a" }}>{item.title}</Text>
              </View>
            </View>
          );
        }}
        onRefresh={() => {}}
        renderEmptyData={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text>No appointments</Text>
          </View>
        )}
        rowHasChanged={(r1, r2) => r1.title !== r2.title}
        theme={{
          agendaDayNumColor: AppStyles.color.main,
          agendaDayTextColor: AppStyles.color.main,
          agendaKnobColor: AppStyles.color.main,
          agendaTodayColor: AppStyles.color.main,
          dotColor: AppStyles.color.main,
          todayTextColor: AppStyles.color.main,
          selectedDayBackgroundColor: AppStyles.color.main,
          "stylesheet.calendar.header": {
            week: {
              marginTop: 0,
              marginBottom: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f7f7f7",
  },
  headerText: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 20,
    color: "#6a6a6a",
  },
  flatListContainer: {
    marginBottom: 200,
  },
  item: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: 60,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  item1: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    minHeight: 60,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
