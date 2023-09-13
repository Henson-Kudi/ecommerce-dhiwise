import React from "react";

import { Button, Img, List, Text } from "components";

const NotificationsPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-gilroy h-[1024px] items-center justify-end mx-auto pt-[193px] w-full"
        style={{ backgroundImage: "url('images/img_automatedemail.png')" }}
      >
        <div className="flex flex-col gap-5 justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[978px] mr-6 p-3 md:px-5 rounded-[15px] w-[31%] md:w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-2 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start rounded-[5px] w-[95%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[5px] text-[15px] text-black-900"
                  size="txtGilroyRegular15"
                >
                  Notifications
                </Text>
                <Button
                  className="bg-transparent black_900_0e_black_900_29_border cursor-pointer min-w-[89px] sm:ml-[0] ml-[109px] outline outline-[1px] rounded-[5px] text-center text-xs"
                  shape="round"
                  color="white_A700_b2"
                  size="sm"
                  variant="fill"
                >
                  Settings
                </Button>
                <Button
                  className="bg-transparent black_900_0e_black_900_29_border2 cursor-pointer min-w-[89px] ml-3.5 sm:ml-[0] outline outline-[1px] rounded-[5px] text-center text-xs"
                  shape="round"
                  color="white_A700_b2"
                  size="sm"
                  variant="fill"
                >
                  Clear All
                </Button>
              </div>
              <List
                className="flex flex-col gap-5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_appicon.png"
                            alt="AppIcon"
                          />
                          <Text
                            className="mt-[3px] text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="mt-0.5 text-[15px] text-black-900"
                            size="txtGilroyRegular15"
                          >
                            Meeting
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_appicon_28X28.png"
                            alt="AppIcon One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtGilroySemiBold15"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-500"
                          size="txtGilroyRegular15Gray500"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[355px] mt-[3px] text-[15px] text-gray-900_01"
                    size="txtGilroyRegular15Gray90001"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_appicon.png"
                            alt="AppIcon One"
                          />
                          <Text
                            className="mt-[3px] text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="mt-0.5 text-[15px] text-black-900"
                            size="txtGilroyRegular15"
                          >
                            Meeting
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_appicon_28X28.png"
                            alt="AppIcon One One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtGilroySemiBold15"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-500"
                          size="txtGilroyRegular15Gray500"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[355px] mt-[3px] text-[15px] text-gray-900_01"
                    size="txtGilroyRegular15Gray90001"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_appicon.png"
                            alt="AppIcon Two"
                          />
                          <Text
                            className="mt-[3px] text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="mt-0.5 text-[15px] text-black-900"
                            size="txtGilroyRegular15"
                          >
                            Meeting
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_appicon_28X28.png"
                            alt="AppIcon One Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtGilroySemiBold15"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-500"
                          size="txtGilroyRegular15Gray500"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[355px] mt-[3px] text-[15px] text-gray-900_01"
                    size="txtGilroyRegular15Gray90001"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_appicon.png"
                            alt="AppIcon Three"
                          />
                          <Text
                            className="mt-[3px] text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="mt-0.5 text-[15px] text-black-900"
                            size="txtGilroyRegular15"
                          >
                            Meeting
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_appicon_28X28.png"
                            alt="AppIcon One Three"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtGilroySemiBold15"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-500"
                          size="txtGilroyRegular15Gray500"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[355px] mt-[3px] text-[15px] text-gray-900_01"
                    size="txtGilroyRegular15Gray90001"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_appicon.png"
                            alt="AppIcon Four"
                          />
                          <Text
                            className="mt-[3px] text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="mt-0.5 text-[15px] text-black-900"
                            size="txtGilroyRegular15"
                          >
                            Meeting
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_appicon_28X28.png"
                            alt="AppIcon One Four"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtGilroySemiBold15"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-500"
                          size="txtGilroyRegular15Gray500"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[355px] mt-[3px] text-[15px] text-gray-900_01"
                    size="txtGilroyRegular15Gray90001"
                  >
                    6:00 PM
                  </Text>
                </div>
                <div className="flex flex-1 flex-col justify-start w-full">
                  <div className="flex flex-col items-center justify-start mr-3.5 w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[35%]">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_appicon.png"
                            alt="AppIcon Five"
                          />
                          <Text
                            className="mt-[3px] text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            One Outlook
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-start justify-between w-1/4">
                          <Text
                            className="mt-0.5 text-[15px] text-black-900"
                            size="txtGilroyRegular15"
                          >
                            Meeting
                          </Text>
                          <Img
                            className="h-7 md:h-auto object-cover w-7"
                            src="images/img_appicon_28X28.png"
                            alt="AppIcon One Five"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-1">
                        <Text
                          className="text-[15px] text-black-900"
                          size="txtGilroySemiBold15"
                        >
                          You’ve got 1 Micorosft Teams meeting today at 3:15 PM
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-500"
                          size="txtGilroyRegular15Gray500"
                        >
                          Click to see more details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[355px] mt-[3px] text-[15px] text-gray-900_01"
                    size="txtGilroyRegular15Gray90001"
                  >
                    6:00 PM
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <footer className="bg-blue_gray-900_7f flex font-poppins items-center justify-center md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-[575px] mr-5 my-1 w-[59%]">
              <div className="flex flex-col items-center justify-start w-[36%] sm:w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_start.png"
                    alt="Start"
                  />
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_search.png"
                    alt="Search"
                  />
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_desktop.png"
                    alt="Desktop"
                  />
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[41px]"
                    src="images/img_widgets.png"
                    alt="Widgets"
                  />
                  <div className="flex flex-col items-center justify-start p-2 w-[41px]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-end p-0.5 w-[25px]"
                      style={{
                        backgroundImage: "url('images/img_explorericon.png')",
                      }}
                    >
                      <div className="bg-gradient1  h-[7px] mt-3 w-[48%]"></div>
                    </div>
                  </div>
                  <div className="md:h-[38px] h-[41px] relative w-[41px]">
                    <div className="bg-white-A700_0c border border-solid border-white-A700_0c flex flex-col h-full items-center justify-end m-auto rounded w-[41px]">
                      <div className="bg-white-A700_87 h-0.5 mt-9 rounded-[1px] w-2/5"></div>
                    </div>
                    <Img
                      className="absolute h-[25px] inset-[0] justify-center m-auto object-cover w-[25px]"
                      src="images/img_placeyouricon.png"
                      alt="PlaceYourIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between pt-0.5 w-[26%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <div className="flex flex-row gap-2.5 items-center justify-center">
                  <Img
                    className="h-6 w-6"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_videocamera.svg"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-end justify-start">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    11:55 PM
                  </Text>
                  <Text
                    className="mt-[3px] text-white-A700 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    10/6/2021
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
