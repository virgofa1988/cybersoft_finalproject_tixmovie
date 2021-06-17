const stateDefault = {
  locationList: [
    { id: 1, name: "Hồ Chí Minh" },
    { id: 2, name: "Hải Phòng" },
    { id: 3, name: "Đà Nẵng" },
    { id: 4, name: "Cần Thơ" },
    { id: 5, name: "Nha Trang" },
    { id: 6, name: "Hà Nội" },
  ],
  locationSelect: {},
};
export const LocationSelect = (state = stateDefault, action) => {
  return { ...state };
};
