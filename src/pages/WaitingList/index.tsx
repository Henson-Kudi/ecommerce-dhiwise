import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const group9970OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WaitingListPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_4.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
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
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-end max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[49%] md:w-full">
              <div className="flex md:flex-col flex-row gap-2 items-start justify-between w-full">
                <div className="flex flex-col gap-8 items-center justify-start rounded-md">
                  <Img
                    className="h-24 md:h-auto object-cover rounded-md w-24"
                    src="images/img_rectangle1213.png"
                    alt="Rectangle1213"
                  />
                  <Img
                    className="h-24 md:h-auto object-cover rounded-md w-24"
                    src="images/img_rectangle1214.png"
                    alt="Rectangle1214"
                  />
                  <Img
                    className="h-24 md:h-auto object-cover rounded-md w-24"
                    src="images/img_rectangle1215.png"
                    alt="Rectangle1215"
                  />
                  <Img
                    className="h-24 md:h-auto object-cover rounded-md w-24"
                    src="images/img_rectangle1216.png"
                    alt="Rectangle1216"
                  />
                  <Img
                    className="h-24 md:h-auto object-cover rounded-md w-24"
                    src="images/img_rectangle1217.png"
                    alt="Rectangle1217"
                  />
                </div>
                <Img
                  className="sm:flex-1 h-[512px] md:h-auto object-cover rounded w-[512px] sm:w-full"
                  src="images/img_rectangle163.png"
                  alt="Rectangle163"
                />
              </div>
              <Button
                className="cursor-pointer font-medium md:ml-[0] ml-[3px] rounded-md text-base text-center w-[512px]"
                shape="round"
                color="blue_A700"
                size="lg"
                variant="fill"
              >
                Joi Waitlist
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
              <div className="flex md:flex-col flex-row font-gilroy gap-4 items-start justify-between w-full">
                <Text
                  className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroyMedium24Bluegray900"
                >
                  OnePlus 10R 5G (Sierra Black, 12GB RAM, 256GB Storage, 150W
                  SuperVOOC)
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_share.svg"
                  alt="share"
                />
              </div>
              <div className="flex flex-row font-gilroy gap-2 items-start justify-start mt-6 w-[46%] md:w-full">
                <Img className="h-6 w-6" src="images/img_star.svg" alt="star" />
                <div className="flex flex-row gap-2 items-center justify-start w-[89%]">
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    4.3/5
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    (112 Ratings l 94 Reviews)
                  </Text>
                </div>
              </div>
              <Text
                className="italic mt-9 text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtUrbanistItalicThin24"
              >
                <span className="md:text-[26px] sm:text-2xl text-colors1 font-gilroy text-left text-[28px] font-semibold italic">
                  $499
                </span>
                <span className="text-colors1 font-gilroy text-left font-fw italic">
                  {" "}
                </span>
                <span className="text-colors2 font-gilroy text-left text-base font-semibold line-through italic">
                  $599
                </span>
              </Text>
              <div className="flex flex-col font-gilroy gap-4 items-start justify-start mt-[37px] w-[28%] md:w-full">
                <SelectBox
                  className="font-medium text-black-900_01 text-left text-lg w-[53%] sm:w-full"
                  placeholderClassName="text-black-900_01"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown_black_901.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="Group9970"
                  options={group9970OptionsList}
                  isSearchable={false}
                  placeholder="Shades"
                  size="xs"
                />
                <Img
                  className="h-[34px] w-full"
                  src="images/img_group9981.svg"
                  alt="Group9981"
                />
              </div>
              <List
                className="sm:flex-col flex-row font-gilroy gap-6 grid sm:grid-cols-1 grid-cols-4 mt-6 w-[68%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                    <Button
                      className="flex h-[87px] items-center justify-center rounded-[12px] w-[87px]"
                      color="blue_gray_100_01"
                      size="lg"
                      variant="outline"
                    >
                      <Img
                        className="h-[58px]"
                        src="images/img_checkmark_87X87.svg"
                        alt="checkmark"
                      />
                    </Button>
                    <Text
                      className="leading-[22.00px] text-center text-gray-800 text-sm"
                      size="txtGilroyMedium14Gray800"
                    >
                      <>
                        100% <br />
                        Authentic
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                    <Button
                      className="flex h-[87px] items-center justify-center rounded-[12px] w-[87px]"
                      color="blue_gray_100_01"
                      size="lg"
                      variant="outline"
                    >
                      <Img
                        className="h-[52px]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                    </Button>
                    <Text
                      className="leading-[22.00px] text-center text-gray-800 text-sm"
                      size="txtGilroyMedium14Gray800"
                    >
                      <>
                        15 days
                        <br />
                        Returns
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                    <Button
                      className="flex h-[87px] items-center justify-center rounded-[12px] w-[87px]"
                      color="blue_gray_100_01"
                      size="xl"
                      variant="outline"
                    >
                      <Img src="images/img_vector.svg" alt="Vector" />
                    </Button>
                    <Text
                      className="leading-[22.00px] text-center text-gray-800 text-sm"
                      size="txtGilroyMedium14Gray800"
                    >
                      <>
                        COD
                        <br />
                        Available
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-start rounded-[12px] w-full">
                    <Button
                      className="flex h-[87px] items-center justify-center rounded-[12px] w-[87px]"
                      color="blue_gray_100_01"
                      size="lg"
                      variant="outline"
                    >
                      <Img src="images/img_car.svg" alt="car" />
                    </Button>
                    <Text
                      className="leading-[22.00px] text-center text-gray-800 text-sm"
                      size="txtGilroyMedium14Gray800"
                    >
                      <>
                        Free
                        <br />
                        Delivery
                      </>
                    </Text>
                  </div>
                </div>
              </List>
              <Text
                className="leading-[28.00px] mt-6 text-base text-black-900"
                size="txtGilroyMedium16Black900"
              >
                <span className="text-colors4 font-gilroy text-left font-bold">
                  About this item
                </span>
                <span className="text-colors4 font-gilroy text-left font-medium">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-colors2 font-gilroy text-left font-medium">
                  <>
                    Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro
                    Camera with Dual LED Flash; 16MP Front (Selfie) Camera with
                    Sony IMX471
                    <br />
                    Camera Features: Nightscape2.0, Super Macro, UltraShot HDR,
                    Smart Scene Recognition, Portrait mode, Pro mode, Panorama,
                    Tilt-shift mode, Focus Peaking, Filters, Video Nightscape,
                    Video HDR, Video Portrait Timelapse, Hyperlapse Mode
                    <br />
                    Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X
                    1080 pixels 394 ppi; Aspect Ratio: 20:9
                    <br />
                    Display Features: Hyper Touch Mode, Reading Mode, Night
                    Mode, Eye Comfort Mode, Auto brightness
                    <br />
                    Operating System: OxygenOS based on Android 12
                    <br />
                    Processor: MTK D8100 Max
                    <br />
                    Battery & Charging: 5000 mAh with 80W SuperVOOC
                    <br />
                    In-Display Fingerprint Sensor
                    <br />
                    Special Features: Hyperboost gaming engine
                    <br />
                    Alexa Hands-Free capable: Download the Alexa app to use
                    Alexa hands-free. Play music, make calls, hear news, open
                    apps, navigate, and more, all using just your voice, while
                    on-the-go.
                    <br />
                    Show Less
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingListPage;
