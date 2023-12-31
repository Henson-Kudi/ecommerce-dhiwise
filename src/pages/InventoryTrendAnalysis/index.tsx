import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const InventoryTrendAnalysisPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_6.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="round"
                  size="sm"
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg_85X85.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[49%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_minimize.svg"
                        alt="minimize"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Coupons
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-8 items-center justify-start pt-[5px] w-full">
              <div className="flex flex-col gap-[29px] items-start justify-start rounded-md w-full">
                <Text
                  className="text-gray-900_03 text-lg"
                  size="txtGilroySemiBold18Gray90003"
                >
                  Dashboard
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between rounded-md w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[65px] grid sm:grid-cols-1 grid-cols-2 w-[47%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-col gap-[22px] items-start justify-end sm:ml-[0] p-2 rounded-md shadow-bs3 w-full">
                      <Text
                        className="ml-2 md:ml-[0] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                        size="txtGilroySemiBold28BlueA700"
                      >
                        $2500
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtGilroyMedium16Black900"
                      >
                        January
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[22px] items-start justify-end sm:ml-[0] p-2 rounded-md shadow-bs3 w-full">
                      <Text
                        className="ml-2 md:ml-[0] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                        size="txtGilroySemiBold28BlueA700"
                      >
                        $3700
                      </Text>
                      <Text
                        className="ml-2 md:ml-[0] text-base text-black-900"
                        size="txtGilroyMedium16Black900"
                      >
                        February
                      </Text>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col gap-[21px] items-start justify-end p-[13px] rounded-md shadow-bs3">
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                      size="txtGilroySemiBold28BlueA700"
                    >
                      $1660
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      March
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[22px] items-start justify-end p-2 rounded-md shadow-bs3">
                    <Text
                      className="ml-2 md:ml-[0] mt-[17px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                      size="txtGilroySemiBold28BlueA700"
                    >
                      $1280
                    </Text>
                    <Text
                      className="ml-2 md:ml-[0] text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      April
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded-md w-[71%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-gray-900_03 text-lg"
                          size="txtGilroySemiBold18Gray90003"
                        >
                          Total Revenue
                        </Text>
                        <div className="flex sm:flex-1 flex-row gap-8 items-center justify-between w-[41%] sm:w-full">
                          <div className="border-b border-blue_gray-400 border-solid flex flex-row gap-4 items-start justify-between w-[81%]">
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                              <div className="flex flex-col items-center justify-start p-2.5 w-full">
                                <Text
                                  className="text-base text-blue-A700 w-auto"
                                  size="txtGilroyMedium16BlueA700"
                                >
                                  Yearly
                                </Text>
                              </div>
                              <Line className="bg-blue-A700 h-0.5 w-full" />
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-base text-blue_gray-400 w-auto"
                                size="txtGilroyMedium16Bluegray400"
                              >
                                Monthly
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-base text-blue_gray-400 w-auto"
                                size="txtGilroyMedium16Bluegray400"
                              >
                                Daily
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-6 w-6"
                            src="images/img_overflowmenu.svg"
                            alt="overflowmenu"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-row gap-6 items-center justify-start w-[36%] md:w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_03"
                            size="txtGilroyBold28Gray90003"
                          >
                            $236,535
                          </Text>
                          <div className="flex flex-row gap-3.5 items-center justify-between w-[46%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_floatingicon.svg"
                              alt="floatingicon"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[15px] text-blue-A700"
                                size="txtGilroyMedium15"
                              >
                                0.8%
                              </Text>
                              <Text
                                className="text-blue_gray-400 text-xs"
                                size="txtGilroyRegular12Bluegray400"
                              >
                                Than last Day
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                          <div className="flex flex-col gap-[17px] items-start justify-start pb-[5px] pl-[5px]">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              30K
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              25K
                            </Text>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              20K
                            </Text>
                            <Text
                              className="ml-1 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              15K
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              10K
                            </Text>
                            <Text
                              className="h-4 md:ml-[0] ml-[9px] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              5K
                            </Text>
                            <Text
                              className="mb-[19px] ml-2 md:ml-[0] text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              0K
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-[30px] items-end justify-between w-[94%] md:w-full">
                            <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                              <div className="bg-blue-A700_01 h-[212px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Jan
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[132px] w-[5%]">
                              <div className="bg-blue-A700_01 h-20 rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Feb
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-9 w-[5%]">
                              <div className="bg-blue-A700_01 h-44 rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Mar
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[31px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[181px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Apr
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[157px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[55px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                May
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[94px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[118px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Jun
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[49px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[163px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Jul
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[108px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[104px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Aug
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[91px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[121px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Sep
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2.5 items-center justify-start mt-[58px] w-[5%]">
                              <div className="bg-blue-A700_01 h-[154px] rounded-[5px] w-full"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtGilroyRegular14Bluegray900"
                              >
                                Oct
                              </Text>
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 mt-[39px] w-[13%]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <div className="bg-blue-A700_01 h-[173px] rounded-[5px] w-full"></div>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  Nov
                                </Text>
                              </div>
                              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                <div className="bg-blue-A700_01 h-[173px] rounded-[5px] w-full"></div>
                                <Text
                                  className="text-blue_gray-900 text-sm"
                                  size="txtGilroyRegular14Bluegray900"
                                >
                                  Des
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-end p-4 rounded-md shadow-bs w-[27%] md:w-full">
                      <div className="flex flex-row items-start justify-between mt-2 w-[94%] md:w-full">
                        <Text
                          className="mt-0.5 text-gray-900_03 text-lg"
                          size="txtGilroySemiBold18Gray90003"
                        >
                          Trending Items
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_overflowmenu.svg"
                          alt="overflowmenu One"
                        />
                      </div>
                      <List
                        className="flex flex-col gap-[15px] items-center w-[91%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_jankoferlicg_40X40.png"
                            alt="jankoferlicG"
                          />
                          <div className="flex flex-row items-center justify-between mt-[5px] w-[78%]">
                            <Text
                              className="text-gray-900_03 text-sm"
                              size="txtGilroyMedium14Gray90003"
                            >
                              Item 1
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_studioportrait_40X40.png"
                            alt="studioportrait"
                          />
                          <div className="flex flex-row items-center justify-between mt-1.5 w-[78%]">
                            <Text
                              className="text-gray-900_03 text-sm"
                              size="txtGilroyMedium14Gray90003"
                            >
                              Item 2
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_youngbeardedm_40X40.png"
                            alt="youngbeardedm"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_03 text-sm"
                              size="txtGilroyMedium14Gray90003"
                            >
                              Item 3
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_cheerfulindian_40X40.png"
                            alt="cheerfulindian"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_03 text-sm"
                              size="txtGilroyMedium14Gray90003"
                            >
                              Item 4
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_cheerfulindian_1.png"
                            alt="cheerfulindian One"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_03 text-sm"
                              size="txtGilroyMedium14Gray90003"
                            >
                              Item 5
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                            src="images/img_cheerfulindian_2.png"
                            alt="cheerfulindian Two"
                          />
                          <div className="flex flex-row items-center justify-between w-[78%]">
                            <Text
                              className="text-gray-900_03 text-sm"
                              size="txtGilroyMedium14Gray90003"
                            >
                              Item 6
                            </Text>
                            <Text
                              className="text-blue-A700 text-xs"
                              size="txtGilroySemiBold12"
                            >
                              40
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-md w-[49%] md:w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtGilroySemiBold18Black900"
                          >
                            Number of Orders
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_overflowmenu.svg"
                            alt="overflowmenu Two"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row font-montserrat sm:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="ml-0.5 md:ml-[0] rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              75
                            </Text>
                            <Text
                              className="rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              50
                            </Text>
                            <Text
                              className="rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              25
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="ml-2 md:ml-[0] rotate-[-1deg] text-black-900 text-sm"
                              size="txtMontserratMedium14Black900"
                            >
                              0
                            </Text>
                          </div>
                          <div className="font-gilroy h-[171px] ml-1 sm:ml-[0] relative w-[95%] sm:w-full">
                            <Img
                              className="h-32 mt-1.5 mx-auto w-[94%]"
                              src="images/img_group9863.svg"
                              alt="Group9863"
                            />
                            <div className="absolute flex flex-col gap-[15px] h-full inset-[0] items-center justify-center m-auto w-full">
                              <Img
                                className="h-[140px] rounded-[10px] w-[99%]"
                                src="images/img_graphlines.svg"
                                alt="Graphlines"
                              />
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Jan
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Feb
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Mar
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Apr
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  May
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Jun
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  July
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Aug
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Sept
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Nov
                                </Text>
                                <Text
                                  className="rotate-[-1deg] text-black-900 text-sm"
                                  size="txtGilroyRegular14"
                                >
                                  Dec
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-[49%] md:w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtGilroySemiBold18Black900"
                          >
                            Referrals
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_overflowmenu.svg"
                            alt="overflowmenu Three"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start w-[95%] md:w-full">
                          <div className="flex flex-col gap-5 items-center justify-start w-1/2 sm:w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start">
                                <div className="bg-blue-A700 h-3 my-[3px] rounded-[50%] w-3"></div>
                                <Text
                                  className="text-base text-gray-900_03"
                                  size="txtGilroyMedium16Gray90003"
                                >
                                  Social Media
                                </Text>
                              </div>
                              <Text
                                className="text-base text-blue_gray-400_01"
                                size="txtGilroyMedium16Bluegray40001"
                              >
                                20%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start">
                                <div className="bg-green-600 h-3 my-[3px] rounded-[50%] w-3"></div>
                                <Text
                                  className="text-base text-gray-900_03"
                                  size="txtGilroyMedium16Gray90003"
                                >
                                  Websites
                                </Text>
                              </div>
                              <Text
                                className="text-base text-blue_gray-400_01"
                                size="txtGilroyMedium16Bluegray40001"
                              >
                                15%
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-row gap-2.5 items-center justify-start">
                                <div className="bg-orange-A700 h-3 my-[3px] rounded-[50%] w-3"></div>
                                <Text
                                  className="text-base text-gray-900_03"
                                  size="txtGilroyMedium16Gray90003"
                                >
                                  Others
                                </Text>
                              </div>
                              <Text
                                className="text-base text-blue_gray-400_01"
                                size="txtGilroyMedium16Bluegray40001"
                              >
                                15%
                              </Text>
                            </div>
                          </div>
                          <div className="h-[171px] relative w-[171px]">
                            <div className="!w-[171px] h-[171px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[171px] h-[171px] m-auto overflow-visible"
                                value={34}
                                strokeWidth={4}
                                styles={{
                                  trail: { strokeWidth: 4, stroke: "#0061ff" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(245deg)",
                                    stroke: "#eaecf0",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute h-[132px] inset-[0] justify-center m-auto w-[132px]">
                              <div className="!w-[132px] h-[132px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[132px] h-[132px] m-auto overflow-visible"
                                  value={43}
                                  counterClockwise
                                  strokeWidth={5}
                                  styles={{
                                    trail: {
                                      strokeWidth: 5,
                                      stroke: "#349765",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(12deg)",
                                      stroke: "#eaecf0",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <div className="absolute h-[94px] inset-[0] justify-center m-auto w-[94px]">
                                <div className="!w-[94px] h-[94px] m-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[94px] h-[94px] m-auto overflow-visible"
                                    value={52}
                                    counterClockwise
                                    strokeWidth={6}
                                    styles={{
                                      trail: {
                                        strokeWidth: 6,
                                        stroke: "#eaecf0",
                                      },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(180deg)",
                                        stroke: "#ff6700",
                                      },
                                    }}
                                  ></CircularProgressbar>
                                </div>
                                <Text
                                  className="absolute h-max inset-[0] justify-center m-auto text-blue_gray-400 text-lg w-max"
                                  size="txtGilroyBold18Bluegray400"
                                >
                                  100%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryTrendAnalysisPage;
